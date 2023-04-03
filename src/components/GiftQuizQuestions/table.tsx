import { MenuOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-table';
import { Fragment, useState, useCallback } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import './index.css';
import { parse } from 'gift-pegjs';
import { Button, Space, Drawer, Typography, Switch } from 'antd';
import { FormattedMessage } from 'umi';
import { createQuestion, deleteQuestion } from '@/services/escola-lms/gift_quiz';
import { EditQuestion } from './editor/edit_question';
import { GiftQuizNewQuestionEditor } from './editor/new_question';
import { PlusCircleOutlined } from '@ant-design/icons';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

export const Table: React.FC<{
  quizId: number;
  questions: API.GiftQuestion[];
  onAdded?: () => void;
  onRemoved?: () => void;
  onEdited?: () => void;
}> = ({ questions, onAdded, onRemoved, onEdited, quizId }) => {
  const [editQuestion, setEditQuestion] = useState<API.GiftQuestion>();
  const [loading, setLoading] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const [debug, setDebug] = useState(true);

  const [newQuestion, setNewQuestion] = useState<{ score: number; value: string }>({
    score: 1,
    value: '',
  });

  const [dataSource, setDataSource] = useState(questions.map((q, i) => ({ ...q, sort: i })));
  const SortableItem = SortableElement((props: any) => <tr {...props} />);
  const SortContainer = SortableContainer((props: any) => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(dataSource.slice(), oldIndex, newIndex).filter(Boolean);
      // TODO send this to backend when ready !!
      console.log(oldIndex, newIndex, newData);
      setDataSource(newData);
    }
  };

  const DraggableContainer = (props: any) => (
    <SortContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

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
    <Fragment>
      <Drawer open={!!editQuestion} onClose={() => setEditQuestion(undefined)}>
        {editQuestion && (
          <EditQuestion
            debug={debug}
            onLoading={() => setLoading(true)}
            loading={loading}
            quizId={quizId}
            question={editQuestion}
            onRemoved={() => {
              if (onRemoved) {
                onRemoved();
              }
              setLoading(false);
            }}
            onEdited={() => {
              if (onEdited) {
                onEdited();
              }
              setLoading(false);
            }}
          />
        )}
      </Drawer>

      <Drawer open={showNew} onClose={() => setShowNew(false)}>
        <GiftQuizNewQuestionEditor
          debug={debug}
          onCreate={() => onNew()}
          value={newQuestion}
          onChange={(value) => setNewQuestion(value)}
        />
      </Drawer>

      <Space
        align="end"
        direction="horizontal"
        style={{ display: 'flex', marginBottom: '12px', justifyContent: 'end' }}
      >
        <Button icon={<PlusCircleOutlined />} type="primary" onClick={() => setShowNew(true)}>
          {' '}
          <FormattedMessage id="newQuestion" defaultMessage="Add New Question" />
        </Button>
      </Space>

      <ProTable
        search={false}
        toolBarRender={false}
        columns={[
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
            render: (_, row: API.GiftQuestion) => <FormattedMessage id={row.type} />,
          },
          {
            title: <FormattedMessage id="question" defaultMessage="question" />,
            dataIndex: 'question',
            hideInForm: true,
            hideInSearch: true,
            hideInSetting: true,
            render: (_, row: API.GiftQuestion) => {
              const obj = parse(row.value);

              if (obj && obj[0] && 'stem' in obj[0]) {
                return obj[0].stem.text;
              }
              return 'question';
            },
          },
          {
            title: <FormattedMessage id="actions" defaultMessage="Actions" />,
            dataIndex: 'address',
            hideInForm: true,
            hideInSearch: true,
            hideInSetting: true,
            render: (_, row) => (
              <Space>
                <Button
                  size="small"
                  type="primary"
                  onClick={() => {
                    setEditQuestion(row);
                  }}
                >
                  <FormattedMessage id="Questions.edit" defaultMessage="Edit Question" />
                </Button>
                <Button
                  loading={loading}
                  key={'delete'}
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
                </Button>
              </Space>
            ),
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
      <Typography>
        Debug GIFT: <Switch checked={debug} onChange={(v) => setDebug(v)} />
      </Typography>
    </Fragment>
  );
};
