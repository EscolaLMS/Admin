import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { parse } from '@escolalms/gift-pegjs';
import { Button, Drawer, Typography, Switch, message } from 'antd';
import { ExportOutlined, MenuOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

import SecureUpload from '@/components/SecureUpload';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import type { CompetencyChallengeCategoryTreeProps } from '@/pages/CompetencyChallenges/components/CompetencyChallengeCategoryTree';
import { createQuestion, deleteQuestion, updateQuestion } from '@/services/escola-lms/gift_quiz';
import { ExportQuizQuestionsModal } from './ExportQuizQuestionsModal';
import { GiftQuizQuestionEditor } from './editor';
import type { QuizQuestionSubmitData } from './editor/types';
import './index.css';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
));
const SortContainer = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));

const staticColumns: ProColumns<API.QuizQuestion>[] = [
  {
    title: <FormattedMessage id="sort" defaultMessage="sort" />,
    dataIndex: 'id',
    width: 60,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: <FormattedMessage id="type" defaultMessage="Type" />,
    dataIndex: 'type',
    hideInForm: true,
    hideInSearch: true,
    hideInSetting: true,
    render: (_, row) => <FormattedMessage id={`gift_type.${row.type}`} />,
  },
  {
    title: <FormattedMessage id="question" defaultMessage="Question" />,
    dataIndex: 'question',
    hideInForm: true,
    hideInSearch: true,
    hideInSetting: true,
    render: (_, row) => {
      try {
        const obj = parse(row.value);

        if (obj?.[0] && 'stem' in obj[0]) {
          return obj[0].stem.text;
        }
        return 'question';
      } catch (e) {
        console.error(e);
        return 'question';
      }
    },
  },
];

const categoryColumn: ProColumns<API.QuizQuestion> = {
  title: <FormattedMessage id="category" defaultMessage="Category" />,
  dataIndex: 'category_id',
  hideInForm: true,
  hideInSearch: true,
  hideInSetting: true,
  render: (_, row) =>
    typeof row.category_id === 'number' ? (
      <TypeButtonDrawer type="Category" type_id={row.category_id} />
    ) : (
      '-'
    ),
};

interface OnSortEndParams {
  oldIndex: number;
  newIndex: number;
}

interface Props {
  quizId: number;
  questions: API.QuizQuestion[];
  onAdded?: () => void;
  onRemoved?: () => void;
  onEdited?: () => void;
  tableHeader?: React.ReactNode;
  tableLoading?: boolean;
  questionsCategory?: boolean | Omit<CompetencyChallengeCategoryTreeProps, 'value' | 'onChange'>;
  customToolbarElements?: React.ReactNode[];
}

export const Table: React.FC<Props> = ({
  questions,
  onAdded,
  onRemoved,
  onEdited,
  quizId,
  tableLoading,
  tableHeader,
  questionsCategory,
  customToolbarElements = [],
}) => {
  const [loading, setLoading] = useState(false);
  const [newQuestion, setNewQuestion] = useState(false);
  const [editQuestion, setEditQuestion] = useState<API.QuizQuestion>();
  const [exportQuestions, setExportQuestions] = useState(false);

  const [debug, setDebug] = useState(false);

  const [dataSource, setDataSource] = useState(questions);

  const intl = useIntl();
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    actionRef.current?.reload();
    setDataSource(questions);
  }, [questions]);

  const onSortEnd = ({ oldIndex, newIndex }: OnSortEndParams) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(dataSource.slice(), oldIndex, newIndex)
        .filter(Boolean)
        .map((row, index) => ({ ...row, order: index }));

      newData.forEach((newRow, index) => {
        if (newRow.id !== dataSource[index].id) {
          updateQuestion(newRow.id, { ...newRow, order: index + 1, topic_gift_quiz_id: quizId });
        }
      });

      setDataSource(newData);
    }
  };

  // TODO types & refactor https://react.dev/learn/your-first-component#nesting-and-organizing-components
  const DraggableContainer = (props: any) => (
    <SortContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  // TODO types & refactor https://react.dev/learn/your-first-component#nesting-and-organizing-components
  const DraggableBodyRow = (props: any) => {
    const { className, style, ...restProps } = props;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex((x) => x.id === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  const onNewQuestionSubmit = useCallback(
    async (data: QuizQuestionSubmitData) => {
      try {
        setLoading(true);

        const response = await createQuestion({ topic_gift_quiz_id: quizId, ...data });
        setNewQuestion(false);
        onAdded?.();
        return response.success;
      } catch (err) {
        console.log(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [newQuestion, quizId],
  );

  const onEditQuestionSubmit = useCallback(
    async (data: QuizQuestionSubmitData) => {
      if (editQuestion?.id === undefined) return false;

      try {
        setLoading(true);

        const response = await updateQuestion(editQuestion.id, {
          topic_gift_quiz_id: quizId,
          ...data,
        });
        setEditQuestion(undefined);
        onEdited?.();
        return response.success;
      } catch (err) {
        console.log(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [editQuestion?.id, quizId],
  );

  return (
    <>
      <Drawer open={newQuestion} onClose={() => setNewQuestion(false)}>
        <GiftQuizQuestionEditor
          onSubmit={onNewQuestionSubmit}
          competencyChallengeCategoryTreeProps={questionsCategory}
        />
      </Drawer>
      <Drawer open={!!editQuestion} onClose={() => setEditQuestion(undefined)}>
        <GiftQuizQuestionEditor
          onSubmit={onEditQuestionSubmit}
          competencyChallengeCategoryTreeProps={questionsCategory}
          values={editQuestion}
        />
      </Drawer>
      <ExportQuizQuestionsModal
        quiz_id={quizId}
        quizQuestions={dataSource}
        visible={exportQuestions}
        onVisibleChange={setExportQuestions}
      />
      <ProTable
        search={false}
        cardProps={{ bodyStyle: { padding: 0 } }}
        loading={tableLoading}
        headerTitle={tableHeader}
        toolbar={{ settings: [] }}
        toolBarRender={() => [
          <Button
            key="add"
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={() => setNewQuestion(true)}
          >
            {' '}
            <FormattedMessage id="addNewQuestion" defaultMessage="Add new question" />
          </Button>,
          <SecureUpload
            key="import"
            title={intl.formatMessage({
              id: 'importQuestions',
            })}
            hideLabel
            showUploadList={false}
            url="/api/admin/gift-questions/import"
            name="file"
            accept=".xlsx"
            data={{
              topic_gift_quiz_id: quizId,
            }}
            onChange={(info) => {
              if (info.file.status === 'done') {
                if (info.file.response && info.file.response.success) {
                  message.success(info.file.response.message);
                  onAdded?.();
                }
              }
              if (info.file.response && info.file.status === 'error') {
                message.error(info.file.response.message);
                console.error(info.file.response);
              }
            }}
          />,
          <Button
            key="export"
            icon={<ExportOutlined />}
            type="primary"
            onClick={() => setExportQuestions(true)}
          >
            {' '}
            <FormattedMessage id="exportQuestions" />
          </Button>,
          ...customToolbarElements,
        ]}
        columns={[
          ...staticColumns,
          ...(questionsCategory ? [categoryColumn] : []),
          {
            title: <FormattedMessage id="actions" defaultMessage="Actions" />,
            dataIndex: 'address',
            valueType: 'option',
            render: (_, row) => [
              <Button
                key="edit"
                size="small"
                type="primary"
                onClick={() => {
                  setEditQuestion(row);
                }}
              >
                <FormattedMessage id="Questions.edit" defaultMessage="Edit Question" />
              </Button>,
              <Button
                loading={loading}
                key="delete"
                size="small"
                danger
                onClick={() => {
                  setLoading(true);
                  deleteQuestion(row.id)
                    .then(() => {
                      if (onRemoved) {
                        onRemoved();
                      }
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }}
              >
                <FormattedMessage id="Questions.delete" defaultMessage="Delete Question" />
              </Button>,
            ],
          },
        ]}
        rowKey={(record) => record.id}
        pagination={false}
        dataSource={dataSource}
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
      />
      <Typography style={{ marginTop: '3em' }}>
        Debug GIFT: <Switch checked={debug} onChange={(v) => setDebug(v)} />
      </Typography>
    </>
  );
};
