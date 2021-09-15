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

## RightContent

RightContent plugins `SelectLang`

```tsx | pure
<Space className={className}>
  <Avatar />
  {REACT_APP_ENV && (
    <span>
      <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
    </span>
  )}
  <SelectLang className={styles.action} />
</Space>
```
