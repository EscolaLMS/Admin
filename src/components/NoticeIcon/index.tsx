import { useCallback, useEffect, useState, useRef } from 'react';
import { useModel } from 'umi';
import { getNotifications, readNotification } from '@/services/escola-lms/notifications';

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

  const fetchNotifications = useCallback(async (page) => {
    const request = await getNotifications({ current: page }, currentUser?.id);
    const response = await request;

    if (response.success) {
      setLoading(false);
      setUnreadMsg(response.meta?.total);
      setNotices((prev) => [...prev, ...response.data]);
      setHasMore(response.data.length > 0);
    }
  }, []);

  const noticeData = getNoticeData(notices);

  const changeReadState = (id: string) => {
    readNotification(id);
    setNotices(
      notices.map((item) => {
        const notice = { ...item };
        if (notice.id === id) {
          notice.read_at = new Date();
        }
        return notice;
      }),
    );
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

  return (
    <>
      <NoticeIcon
        className={styles.action}
        count={unreadMsg}
        onItemClick={(item) => {
          changeReadState(item.id!);
        }}
        // clearText="Clear all"
        // onClear={() => clearAll()}
        loading={loading}
      >
        <NoticeIcon.Tab
          tabKey="notification"
          list={noticeData.notifyList}
          title={'notifications.list'}
          emptyText="No notices"
          showViewMore
          lastElementRef={lastElementRef}
        />
        {/* TODO:uncoment this if you need mor tabs in notifylist */}
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
