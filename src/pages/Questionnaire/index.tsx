import React, { useCallback, useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { questionnaire, deleteQuestionnaire } from '@/services/escola-lms/questionnaire';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
// import QuestionnaireModalForm from './components/ModalForm';

const TableColumns: ProColumns<API.Questionnaire>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    hideInSearch: true,
    width: '80%',
  },
];

const Questionnaire: React.FC = () => {
  const actionRef = useRef<ActionType>();
  // const [modalVisible, setModalVisible] = useState<number | false>(false);
  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      const hide = message.loading(
        intl.formatMessage({
          id: 'loading',
        }),
      );
      try {
        await deleteQuestionnaire(id);
        hide();
        message.success(<FormattedMessage id="success" defaultMessage="success" />);

        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);

        return false;
      }
    },
    [actionRef, intl],
  );

  return (
    <PageContainer>
      <ProTable<API.Questionnaire>
        headerTitle={intl.formatMessage({
          id: 'questionnaires',
          defaultMessage: 'questionnaires',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Link to="/questionnaire/new" key="addnew">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
          // <Button
          //   type="primary"
          //   key="primary"
          //   onClick={() => {
          //     setModalVisible(-1);
          //   }}
          // >
          //   <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          // </Button>,
        ]}
        request={() => {
          return questionnaire().then((response) => {
            if (response.success) {
              return {
                data: response.data,
                success: true,
              };
            }
            return [];
          });
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',

            render: (_, record) => [
              <Link to={`/questionnaire/${record.id}`} key="editlink">
                <Button type="primary" icon={<EditOutlined />} />
              </Link>,
              // <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
              //   <Button
              //     type="primary"
              //     icon={<EditOutlined />}
              //     onClick={() => setModalVisible(Number(record.id))}
              //   />
              // </Tooltip>,
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={() => record.id && handleRemove(record.id)}
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
      />
      {/* <Modal
        title="Questionnaire form"
        width={'900px'}
        visible={Number.isInteger(modalVisible)}
        onCancel={() => {
          setModalVisible(false);
          return actionRef.current && actionRef.current.reload();
        }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <QuestionnaireModalForm
          id={modalVisible}
          close={() => {
            setModalVisible(false);
            return actionRef.current && actionRef.current.reload();
          }}
        />
      </Modal> */}
    </PageContainer>
  );
};

export default Questionnaire;
