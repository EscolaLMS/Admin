import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FormattedMessage } from 'umi';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { parse } from '@escolalms/gift-pegjs';
import { Button, Drawer, Typography, Switch } from 'antd';
import { MenuOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import type { CategoryTreeProps } from '@/components/CategoryTree';
import { createQuestion, deleteQuestion, updateQuestion } from '@/services/escola-lms/gift_quiz';
import { GiftQuizNewQuestionEditor } from './editor/new_question';
import { EditQuestion } from './editor/edit_question';
import './index.css';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
));
const SortContainer = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));

const staticColumns: ProColumns<API.GiftQuestion>[] = [
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
    render: (_, row: API.GiftQuestion) => <FormattedMessage id={`gift_type.${row.type}`} />,
  },
  {
    title: <FormattedMessage id="question" defaultMessage="Question" />,
    dataIndex: 'question',
    hideInForm: true,
    hideInSearch: true,
    hideInSetting: true,
    render: (_, row: API.GiftQuestion) => {
      const obj = parse(row.value);

      if (obj?.[0] && 'stem' in obj[0]) {
        return obj[0].stem.text;
      }
      return 'question';
    },
  },
];

const categoryColumn: ProColumns<API.GiftQuestion> = {
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
  questions: API.GiftQuestion[];
  onAdded?: () => void;
  onRemoved?: () => void;
  onEdited?: () => void;
  tableHeader?: React.ReactNode;
  tableLoading?: boolean;
  questionsCategory?: boolean | Omit<CategoryTreeProps, 'value' | 'onChange'>;
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
}) => {
  const [editQuestion, setEditQuestion] = useState<API.GiftQuestion>();
  const [loading, setLoading] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const [debug, setDebug] = useState(false);

  const [newQuestion, setNewQuestion] = useState<{
    score: number;
    value: string;
    category_id?: number;
  }>({
    score: 1,
    value: '',
  });

  const [dataSource, setDataSource] = useState(questions);

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

  const onNew = useCallback(() => {
    setLoading(true);

    createQuestion({
      topic_gift_quiz_id: quizId,
      ...newQuestion,
    })
      .catch((err) => console.log('err', err))
      .then(() => {
        setNewQuestion({ value: '', score: 1 });
        setShowNew(false);
        if (onAdded) {
          onAdded();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [newQuestion, quizId]);

  return (
    <>
      <Drawer open={!!editQuestion} onClose={() => setEditQuestion(undefined)}>
        {editQuestion && (
          <EditQuestion
            debug={debug}
            onLoading={() => setLoading(true)}
            loading={loading}
            quizId={quizId}
            question={editQuestion}
            onRemoved={() => {
              onRemoved?.();
              setLoading(false);
            }}
            onEdited={() => {
              onEdited?.();
              setLoading(false);
            }}
            categoryProps={questionsCategory}
          />
        )}
      </Drawer>
      <Drawer open={showNew} onClose={() => setShowNew(false)}>
        <GiftQuizNewQuestionEditor
          debug={debug}
          onCreate={onNew}
          value={newQuestion}
          onChange={setNewQuestion}
          categoryProps={questionsCategory}
        />
      </Drawer>
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
            onClick={() => setShowNew(true)}
          >
            {' '}
            <FormattedMessage id="addNewQuestion" defaultMessage="Add new question" />
          </Button>,
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
