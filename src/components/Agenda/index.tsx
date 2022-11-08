import type { ComponentClass } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import React, { useState } from 'react';
import './index.css';

import { Button, Popconfirm, Tooltip } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import type { SortableContainerProps, SortableElementProps } from 'react-sortable-hoc';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import {
  DeleteOutlined,
  EditOutlined,
  MenuOutlined,
  PlusOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage, useIntl } from 'umi';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import AgendaModalForm from './ModalForm';
import type { AgendaType } from '@/pages/StationaryEvents/form';
import { user as fetchUser } from '@/services/escola-lms/user';

const SortableItem: ComponentClass<SortableElementProps & { className?: string }, any> =
  SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />);
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));
const DragHandle = SortableHandle(() => (
  <MenuOutlined
    style={{
      cursor: 'grab',
      color: '#999',
    }}
  />
));

interface RenderAgendaTutor {
  id: number;
  first_name: string;
  last_name: string;
}

interface RenderAgendaType extends Omit<AgendaType, 'tutors'> {
  tutors: (RenderAgendaTutor | null)[];
}

const Agenda = ({ data, onCreate }: { data: AgendaType[]; onCreate: (value: string) => void }) => {
  const actionRef = useRef<ActionType>();
  const agendaOrder = useRef<number[] | null>(null);
  const intl = useIntl();

  const [source, setSource] = useState<RenderAgendaType[]>([]);
  const [fields, setFields] = useState<AgendaType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [receivedData, setReceivedData] = useState<AgendaType[]>(data);
  const [candidateData, setCandidateData] = useState<AgendaType[]>([]);
  const [wasOrderChanged, setWasOrderChanged] = useState(false);

  const TableColumns: ProColumns[] = [
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: '5%',
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      width: '20%',
      title: <FormattedMessage id="title" defaultMessage="Title" />,
      dataIndex: 'title',
      hideInSearch: true,
      renderText: (title: string) => (title.length > 80 ? `${title.slice(0, 77)}...` : title),
    },
    {
      width: '20%',
      title: <FormattedMessage id="subtitle" defaultMessage="subtitle" />,
      dataIndex: 'subtitle',
      hideInSearch: true,
      renderText: (subtitle: string) =>
        subtitle.length > 80 ? `${subtitle.slice(0, 77)}...` : subtitle,
    },
    {
      width: '10%',
      title: <FormattedMessage id="hour" defaultMessage="hour" />,
      dataIndex: 'hour',
      hideInSearch: true,
    },
    {
      width: '15%',
      title: <FormattedMessage id="tutors" defaultMessage="tutors" />,
      dataIndex: 'tutors',
      hideInSearch: true,
      renderText: (tutors: RenderAgendaTutor[]) =>
        tutors.map(({ first_name, last_name }) => `${first_name} ${last_name}`).join(', '),
    },
    {
      width: '18%',
      title: <FormattedMessage id="description" defaultMessage="description" />,
      dataIndex: 'description',
      hideInSearch: true,
      renderText: (description: string) =>
        !description
          ? '-'
          : description.length > 80
          ? `${description.trim().slice(0, 77)}...`
          : description.trim(),
    },
  ];

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(source.slice(), oldIndex, newIndex).filter(Boolean);
      setSource(newData);
    }
  };

  const DraggableContainer = (props: SortableContainerProps) => {
    return (
      <SortableBody
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging"
        onSortEnd={onSortEnd}
        {...props}
      />
    );
  };

  const DraggableBodyRow = ({ ...restProps }) => {
    const index = source.findIndex(({ id }) => id === restProps['data-row-key']);
    const updatedRestProps = {
      ...restProps,
      className: `${restProps.className} ${
        !!source[index]?.asCandidate ? 'agenda-row-candidate' : ''
      }`,
    };
    return <SortableItem index={index} {...updatedRestProps} />;
  };

  const getUsersFullNames = async (ids: number[]): Promise<(RenderAgendaTutor | null)[]> => {
    const usersRequests = ids.map((id) => fetchUser(id));
    const response = await Promise.all(usersRequests);
    const results = await response.map((user) =>
      user.success
        ? {
            id: user.data.id,
            first_name: user.data.first_name,
            last_name: user.data.last_name,
          }
        : null,
    );
    return results;
  };

  useEffect(() => {
    setCandidateData([]);
    setReceivedData(data);
    setFields(null);
    setWasOrderChanged(false);
    agendaOrder.current = null;
  }, [data]);

  useEffect(() => {
    (async () => {
      if (!receivedData || !candidateData) return;

      const dataRequests: Promise<RenderAgendaType>[] = [...receivedData, ...candidateData].map(
        async (element) => {
          const results = await getUsersFullNames(element.tutors);
          return {
            ...element,
            tutors: results,
          };
        },
      );

      const dataResponse = await Promise.all(dataRequests);

      const uniqueData = dataResponse.reduce((acc, item, _, arr) => {
        const value = arr.filter(({ id }) => id === item.id);

        if (value.length > 1) {
          const duplicatedItem = value.find((i) => 'asCandidate' in i);
          if (!duplicatedItem) return [...acc, value[-1]];
          const isInAccumulator = duplicatedItem && acc.find(({ id }) => id === duplicatedItem.id);
          return isInAccumulator ? acc : [...acc, duplicatedItem];
        }
        return [...acc, value[0]];
      }, [] as typeof dataResponse);

      const newItems = source.length
        ? uniqueData.filter(
            ({ id }) => source.findIndex((singleSource) => singleSource.id === id) === -1,
          )
        : [];

      const sortedData = source.length
        ? source.map((item) => {
            const idx = uniqueData.findIndex(({ id }) => id === item.id);
            return uniqueData[idx];
          })
        : uniqueData;

      const mergedData = [...sortedData, ...newItems];

      setSource(mergedData.filter(Boolean));
    })();
  }, [receivedData, candidateData]);

  useEffect(() => {
    const a = source.map((item) => {
      const { id, title, subtitle, hour, description, tutors } = item;
      return {
        id,
        title,
        subtitle,
        hour,
        description,
        tutors: tutors.map((tutor) => (tutor ? tutor.id : null)).filter(Boolean),
      };
    });
    onCreate(JSON.stringify(a));

    const sortedSource = source.map(({ id }) => id);

    if (agendaOrder.current === null) {
      if (!sortedSource.length) return;
      agendaOrder.current = sortedSource;
    }

    if (sortedSource.length > agendaOrder.current.length) {
      const checkIfOrderWasChanged =
        JSON.stringify(sortedSource.slice(0, agendaOrder.current.length)) !==
        JSON.stringify(agendaOrder.current);
      setWasOrderChanged(checkIfOrderWasChanged);
      if (!checkIfOrderWasChanged) {
        agendaOrder.current = sortedSource;
        return;
      }
    }

    setWasOrderChanged(JSON.stringify(sortedSource) !== JSON.stringify(agendaOrder.current));
  }, [source]);

  return (
    <PageContainer header={{ breadcrumb: {} }} className="agenda-container">
      <ProTable<AgendaType | any>
        className="agenda-table"
        headerTitle={intl.formatMessage({
          id: 'agenda',
          defaultMessage: 'Agenda',
        })}
        actionRef={actionRef}
        rowKey={(record) => record.id}
        search={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setModalVisible(true)}>
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        pagination={false}
        dataSource={source}
        columns={[
          ...TableColumns,
          {
            width: '12%',
            hideInSearch: true,
            title: <FormattedMessage id="pages.searchTable.titleOption" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <Button
                key="edit"
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  if ('asCandidate' in record) {
                    setFields(candidateData.find(({ id }) => id === record.id) ?? null);
                  } else {
                    setFields(data.find(({ id }) => id === record.id) ?? null);
                  }
                  setModalVisible(true);
                }}
              />,
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={async () => {
                  if ('asCandidate' in record) {
                    setCandidateData((current) => current.filter(({ id }) => id !== record.id));
                    return;
                  }
                  setReceivedData((current) => current.filter(({ id }) => id !== record.id));
                }}
                okText={<FormattedMessage id="yes" />}
                cancelText={<FormattedMessage id="no" />}
              >
                <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                  <Button type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
      />

      {!!candidateData.length && (
        <div className="legend">
          <div className="legend__dot" />
          <p className="legend__label">
            <FormattedMessage id="changesToBeApproved" defaultMessage="Changes to be approved" />
          </p>
        </div>
      )}

      {wasOrderChanged && (
        <div className="legend">
          <SwapOutlined className="legend__icon" />
          <p className="legend__label">
            <FormattedMessage id="orderHasBeenChanged" defaultMessage="Order has been changed" />
          </p>
        </div>
      )}

      <AgendaModalForm
        name={modalVisible}
        visible={modalVisible}
        fields={fields}
        onVisibleChange={(value: boolean) => {
          if (value === false) {
            setModalVisible(false);
            setFields(null);
          }
        }}
        onFinish={async (value: any) => {
          if (value.id) {
            const isCandidate = 'asCandidate' in value;
            const referenceSource = isCandidate ? candidateData : data;

            const valueInReferenceSource = referenceSource.find(({ id }) => id === value.id);
            const wasValueUpdated = valueInReferenceSource
              ? JSON.stringify(valueInReferenceSource) !== JSON.stringify(value)
              : false;

            if (wasValueUpdated) {
              const mappedCandidateAgenda = isCandidate
                ? candidateData.map((agenda) => (agenda.id === value.id ? value : agenda))
                : [...candidateData, { ...value, asCandidate: true }];
              setCandidateData(mappedCandidateAgenda);
            }

            setFields(null);
            setModalVisible(false);
            return;
          }
          setCandidateData((current) => [
            ...current,
            { ...value, asCandidate: true, id: Date.now() },
          ]);
          setFields(null);
          setModalVisible(false);
        }}
      />
    </PageContainer>
  );
};

export default Agenda;
