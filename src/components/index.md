---
title: Esolca LMS Docs
sidemenu: false
---

## Footer

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import Footer from '@/components/Footer';

export default () => <Footer />;
```

## HeaderDropdown

HeaderDropdown antd Dropdown

```tsx
/**
 * background: '#f0f2f5'
 */
import { Button, Menu } from 'antd';
import React from 'react';
import HeaderDropdown from '@/components/HeaderDropdown';

export default () => {
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="center">center</Menu.Item>
      <Menu.Item key="settings">settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">logout</Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <Button>hover hello</Button>
    </HeaderDropdown>
  );
};
```

## NoticeIcon

```tsx
/**
 * background: '#f0f2f5'
 */
import { message } from 'antd';
import React from 'react';
import NoticeIcon from '@/components/NoticeIcon/NoticeIcon';

export default () => {
  const list = [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'Title 14 ',
      datetime: '2017-08-09',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: 'Title ipsum',
      datetime: '2017-08-08',
      type: 'notification',
    },
  ];
  return (
    <NoticeIcon
      count={10}
      onItemClick={(item) => {
        message.info(`${item.title} Titl`);
      }}
      onClear={(title: string, key: string) => message.info('info')}
      loading={false}
      clearText="clear"
      viewMoreText="view more"
      onViewMore={() => message.info('info')}
      clearClose
    >
      <NoticeIcon.Tab
        tabKey="notification"
        count={2}
        list={list}
        title="notification"
        emptyText="notification"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="message"
        count={2}
        list={list}
        title="message"
        emptyText="message"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="event"
        title="event"
        emptyText="event"
        count={2}
        list={list}
        showViewMore
      />
    </NoticeIcon>
  );
};
```

### NoticeIcon API

| Parameters | Description | Type | Default Value |
| --- | --- | --- | --- |
| count | How many unread notifications | `number` | - |
| bell | Chart of bells | `ReactNode` | - |
| onClear | Click the clear data button | `(tabName: string, tabKey: string) => void` | - |
| onItemClick | The unread message column is clicked | `(item: API.NoticeIconData, tabProps: NoticeIconTabProps) => void` | - |
| onViewMore | View more button clicks | `(tabProps: NoticeIconTabProps, e: MouseEvent) => void` | - |
| onTabChange | Notification Tab switch | `(tabTile: string) => void;` | - |
| popupVisible | Whether to display the notification display | `boolean` | - |
| onPopupVisibleChange | Callback function for notification information display hidden | `(visible: boolean) => void` | - |
| clearText | Clear the text of the button | `string` | - |
| viewMoreText | View more button text | `string` | - |
| clearClose | Show clear button | `boolean` | - |
| emptyImage | Bottom display when the list is empty | `ReactNode` | - |

### NoticeIcon.Tab API

| Parameters | Description | Type | Default Value |
| --- | --- | --- | --- |
| count | How many unread notifications | `number` | - |
| title | Title of the notification Tab | `ReactNode` | - |
| showClear | Show clear button | `boolean` | `true` |
| showViewMore | Show loading update | `boolean` | `true` |
| tabKey | Tab's unique key | `string` | - |
| onClick | Click event of child | `(item: API.NoticeIconData) => void` | - |
| onClear | Click on the clear button | `()=>void` | - |
| emptyText | Test when it is empty | `()=>void` | - |
| viewMoreText | View more button text | `string` | - |
| onViewMore | View more button clicks | `( e: MouseEvent) => void` | - |
| list | List of notification information | `API.NoticeIconData` | - |

### NoticeIconData

```tsx | pure
export interface NoticeIconData {
  id: string;
  key: string;
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra: any;
  status: string;
}
```

## RightContent

RightContent plugins `SelectLang`

```tsx | pure
<Space>
  <HeaderSearch
    placeholder="站内搜索"
    defaultValue="umi ui"
    options={[
      { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
      {
        label: <a href="next.ant.design">Ant Design</a>,
        value: 'Ant Design',
      },
      {
        label: <a href="https://protable.ant.design/">Pro Table</a>,
        value: 'Pro Table',
      },
      {
        label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
        value: 'Pro Layout',
      },
    ]}
  />
  <Tooltip title="Tooltip">
    <span
      className={styles.action}
      onClick={() => {
        window.location.href = 'https://pro.ant.design/docs/getting-started';
      }}
    >
      <QuestionCircleOutlined />
    </span>
  </Tooltip>
  <Avatar />
  {REACT_APP_ENV && (
    <span>
      <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
    </span>
  )}
  <SelectLang className={styles.action} />
</Space>
```
