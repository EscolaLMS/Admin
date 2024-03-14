import DictionaryWordsDescriptionsModal from '@/pages/Dictionary/components/DictionaryWords/Descriptions/modal';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { type ActionType, type ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Tooltip } from 'antd';
import { useRef, useState } from 'react';
import { FormattedMessage } from 'umi';

interface Props {
  dataSource: API.DictionaryWordData[];
  updateData: (values: API.DictionaryWordData) => void;
  onDelete: (id: number) => void;
}

const DictionaryWordsDescriptions = ({ dataSource, updateData, onDelete }: Props) => {
  const actionRef = useRef<ActionType>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedField, setSelectedField] = useState<API.DictionaryWordData | null>(null);

  const columns: ProColumns<API.DictionaryWordData>[] = [
    {
      title: <FormattedMessage id="title" defaultMessage="title" />,
      dataIndex: 'title',
      sorter: false,
    },
    {
      title: <FormattedMessage id="description" defaultMessage="description" />,
      dataIndex: 'description',
      sorter: false,
    },
    {
      title: <FormattedMessage id="video_url" defaultMessage="Video URL" />,
      dataIndex: 'video_url',
      sorter: false,
    },
    {
      width: 100,
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
            setSelectedField(record);
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
            if (selectedField?.id) {
              onDelete(selectedField.id);
            }
          }}
          okText={<FormattedMessage id="yes" />}
          cancelText={<FormattedMessage id="no" />}
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              danger
              onClick={() => {
                setSelectedField(record);
              }}
            />
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <>
      <ProTable<API.DictionaryWordData>
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setModalVisible(true)}>
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        // We need set data source as a clone of the observable value for auto reload table
        dataSource={[...dataSource]}
        columns={columns}
        pagination={false}
        revalidateOnFocus={true}
      />
      <DictionaryWordsDescriptionsModal
        isOpen={modalVisible}
        onOpenChange={(newVisibleValue) => {
          if (!newVisibleValue) {
            setSelectedField(null);
          }
          setModalVisible(newVisibleValue);
        }}
        onFinish={async (formData: API.DictionaryWordData) => {
          updateData(formData);
          setSelectedField(null);
          setModalVisible(false);
          return;
        }}
        selectedField={selectedField}
      />
    </>
  );
};

export default DictionaryWordsDescriptions;
