import { List } from 'antd';
import React from 'react';
import classNames from 'classnames';
import styles from './NoticeList.less';
import { getEventType } from '@/pages/Notifications';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';

export type NoticeIconTabProps = {
  count?: number;
  showClear?: boolean;
  showViewMore?: boolean;
  style?: React.CSSProperties;
  title: string;
  tabKey: API.NoticeIconItemType;
  onClick?: (item: API.NoticeIconItem) => void;
  onClear?: () => void;
  emptyText?: string;
  clearText?: string;
  viewMoreText?: string;
  list: any;
  onViewMore?: (e: any) => void;
};
const NoticeList: React.FC<NoticeIconTabProps> = ({
  list = [],
  onClick,
  onClear,
  title,
  // onViewMore,
  emptyText,
  showClear = true,
  clearText,
  // viewMoreText,
  // showViewMore = false,
  // event,
}) => {
  if (!list || list.length === 0) {
    return (
      <div className={styles.notFound}>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
          alt="not found"
        />
        <div>{emptyText}</div>
      </div>
    );
  }
  return (
    <div>
      <List<API.Notification>
        className={styles.list}
        dataSource={list}
        renderItem={(item, i) => {
          const itemCls = classNames(styles.item, {
            [styles.read]: item.read_at,
          });
          // eslint-disable-next-line no-nested-ternary
          // const leftIcon = item.avatar ? (
          //   typeof item.avatar === 'string' ? (
          //     <Avatar className={styles.avatar} src={item.avatar} />
          //   ) : (
          //     <span className={styles.iconElement}>{item.avatar}</span>
          //   )
          // ) : null;

          return (
            <List.Item
              className={itemCls}
              key={item.id || i}
              onClick={() => {
                onClick?.(item);
              }}
            >
              <List.Item.Meta
                className={styles.meta}
                // avatar={leftIcon}
                title={
                  <div className={styles.title}>
                    {item.event && getEventType(item.event)}
                    {/* {item.title} */}
                    <div className={styles.extra}>Notify</div>
                    {/* <div className={styles.extra}>Notify{item.extra}</div> */}
                  </div>
                }
                description={
                  <div>
                    {/* <div className={styles.description}>{item.description}</div> */}
                    <div className={styles.datetime}>
                      {format(new Date(item.created_at), DATETIME_FORMAT)}
                    </div>
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />
      <div className={styles.bottomBar}>
        {showClear ? (
          <div onClick={onClear}>
            {clearText} {title}
          </div>
        ) : null}
        {/* {showViewMore ? (
          <div
            onClick={(e) => {
              if (onViewMore) {
                onViewMore(e);
              }
            }}
          >
            {viewMoreText}
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default NoticeList;
