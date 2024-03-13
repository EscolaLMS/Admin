import DictionaryWordsDescriptionsModal from '@/pages/Dictionary/components/DictionaryWords/Descriptions/modal';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

type DictionaryWordsDescriptionsType = {
  title: string;
  description: string;
  url: string;
}

const DictionaryWordsDescriptions = ({}) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const columns: ProColumns<DictionaryWordsDescriptionsType>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      width: '80px',
    },
    {
      title: <FormattedMessage id="title" defaultMessage="title" />,
      dataIndex: 'title',
      sorter: true,
    },
    {
      title: <FormattedMessage id="description" defaultMessage="description" />,
      dataIndex: 'description',
      sorter: true,
    },
    {
      title: <FormattedMessage id="video_url" defaultMessage="Video URL" />,
      dataIndex: 'video_url',
      sorter: true,
    },
  ];

  return (
    <>
      <ProTable<DictionaryWordsDescriptionsType>
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setModalVisible(true)}>
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        dataSource={dataSource}
        columns={columns}
      />
      {/* <DictionaryWordsDescriptionsModal
        isOpen={modalVisible}
        onOpenChange={() => {}}
        onFinish={(formData: any) => {}}
      /> */}
    </>
  );
};

export default DictionaryWordsDescriptions;
