import {
  getNotifications,
  readAllNotification,
  readNotification,
} from '@/services/escola-lms/notifications';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useIntl, useModel } from 'umi';

import NoticeIcon from './NoticeIcon';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  fetchingNotices?: boolean;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onNoticeClear?: (tabName?: string) => void;
};

const getNoticeData = (notices: API.Notification[]): Record<string, API.Notification[]> => {
  if (!notices || notices.length === 0 || !Array.isArray(notices)) {
    return {};
  }

  return {
    notifyList: notices,
  };
};

const NoticeIconView = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const [notices, setNotices] = useState<API.Notification[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [unreadMsg, setUnreadMsg] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const intl = useIntl();

  const fetchNotifications = useCallback(async (page: number) => {
    const request = await getNotifications({ page }, currentUser?.id);
    const response = await request;

    if (response.success) {
      setLoading(false);
      setUnreadMsg(response.meta?.total);
      setNotices((prev) => [...prev, ...response.data]);
      setHasMore(response.data.length > 0);
    }
  }, []);

  const noticeData = getNoticeData(notices);

  const changeNoticeReadAt = useCallback((id: string, date: Date | null) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item };
        if (notice.id === id) {
          notice.read_at = date;
        }
        return notice;
      }),
    );
  }, []);

  const changeReadState = async (id: string) => {
    // Change read_at key to change opacity of element
    changeNoticeReadAt(id, new Date());
    const response = await readNotification(id);
    if (response.success) {
      // remove notification when success
      setNotices(notices.filter(({ id: noticeId }) => noticeId !== id));
    } else {
      // when read failed then read_at change to null
      changeNoticeReadAt(id, null);
    }
  };

  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer && observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          setPageNum((prev) => prev + 1);
        }
      });

      if (node && observer.current) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    fetchNotifications(pageNum);
  }, [pageNum]);

  const readAll = useCallback(async () => {
    setLoading(true);
    const response = await readAllNotification();
    if (response.success) {
      setUnreadMsg(0);
      setHasMore(false);
      setNotices([]);
    }
  }, []);

  return (
    <>
      <NoticeIcon
        className={styles.action}
        count={unreadMsg}
        onItemClick={(item) => {
          changeReadState(item.id!);
        }}
        clearText={intl.formatMessage({ id: 'read_all' })}
        onClear={readAll}
        loading={loading}
      >
        <NoticeIcon.Tab
          tabKey="notification"
          list={noticeData.notifyList}
          title={intl.formatMessage({ id: 'notifications.list' })}
          emptyText="No notices"
          showViewMore
          lastElementRef={lastElementRef}
        />
        {/* TODO:uncoment #1014 this if you need mor tabs in notifylist */}
        {/* <NoticeIcon.Tab
        tabKey="message"
        count={unreadMsg.message}
        list={noticeData.message}
        title="Readed"
        emptyText="empty"
        showViewMore
      /> */}
      </NoticeIcon>
      {/* {isVisible ? 'true' : 'false'} */}
    </>
  );
};

export default NoticeIconView;
