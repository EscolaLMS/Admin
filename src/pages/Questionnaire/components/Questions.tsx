import { useCallback, useMemo, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { message, Button, Tooltip, Popconfirm } from 'antd';
import { addQuestion, deleteQuestion, editQuestion } from '@/services/escola-lms/questionnaire';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import QuestionModalForm from './QuestionModalForm';

const QuestionForm: React.FC<{
  questionnaireId: number | undefined;
  questions?: API.Question[];
  fetchData: () => void;
}> = ({ questionnaireId, questions, fetchData }) => {
  const intl = useIntl();
  const [modalVisible, setModalVisible] = useState<number | false>(false);

  const TableColumns: ProColumns<API.Questionnaire>[] = useMemo(
    () => [
      {
        title: <FormattedMessage id="id" defaultMessage="id" />,
        dataIndex: 'id',
        hideInSearch: true,
      },
      {
        title: <FormattedMessage id="title" defaultMessage="title" />,
        dataIndex: 'title',
        hideInSearch: true,
        sorter: true,
      },
      {
        title: <FormattedMessage id="type" defaultMessage="type" />,
        dataIndex: 'type',
        hideInSearch: true,
        sorter: true,
        renderText: (_, type) =>
          intl.formatMessage({
            // @ts-ignore TODO: Remove this ts-ignore when types ready
            id: `QuestionType.${type.type}`,
          }),
      },
      {
        title: <FormattedMessage id="description" defaultMessage="description" />,
        dataIndex: 'description',
        hideInSearch: true,
      },
      {
        title: <FormattedMessage id="position" defaultMessage="position" />,
        dataIndex: 'position',
        hideInSearch: true,
      },
    ],
    [],
  );

  const actionRef = useRef<ActionType>();

  const handleUpdate = async (fields: Partial<API.Question>, id?: number) => {
    const hide = message.loading(
      intl.formatMessage({
        id: 'loading',
      }),
    );
    try {
      await (id && id !== -1
        ? editQuestion(id, {
            ...fields,
            questionnaire_id: questionnaireId,
          })
        : addQuestion({
            ...fields,
            questionnaire_id: questionnaireId,
          }));
      hide();
      fetchData();
      message.success(
        intl.formatMessage({
          id: 'success',
        }),
      );
      return true;
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({
          id: 'error',
        }),
      );
      return false;
    }
  };

  const handleRemoveQuestion = useCallback(
    async (questionId: number) => {
      const hide = message.loading(
        intl.formatMessage({
          id: 'loading',
        }),
      );
      try {
        await deleteQuestion(questionId);
        hide();
        fetchData();
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
    <>
      <ProTable
        headerTitle={intl.formatMessage({
          id: 'question_list',
          defaultMessage: 'question_list',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalVisible(-1);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
        ]}
        dataSource={questions && questions}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',

            render: (_, record) => [
              <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => record.id && setModalVisible(record.id)}
                />
              </Tooltip>,
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={() => record.id && handleRemoveQuestion(record.id)}
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
      <QuestionModalForm
        id={modalVisible}
        visible={Number.isInteger(modalVisible)}
        onVisibleChange={(value) => {
          return value === false && setModalVisible(false);
        }}
        questionsList={questions ?? []}
        onFinish={async (value) => {
          const success = await handleUpdate(value, Number(modalVisible));
          if (success) {
            setModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
    </>
  );
};

export default QuestionForm;
