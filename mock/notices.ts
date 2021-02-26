import { Request, Response } from 'express';

const getNotices = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: 'title XXXX',
        datetime: '2017-08-09',
        type: 'notification',
      },
      {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: 'title XXXX',
        datetime: '2017-08-08',
        type: 'notification',
      },
      {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: 'title XXXX',
        datetime: '2017-08-07',
        read: true,
        type: 'notification',
      },
      {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: 'title XXXX',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000005',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: 'title XXXX',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'title XXXX',
        description: 'lorem ipsum',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'title XXXX',
        description: 'lorem ipsum',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'title XXXX',
        description: 'lorem ipsum',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000009',
        title: 'title XXXX',
        description: 'lorem ipsum',
        extra: '未开始',
        status: 'todo',
        type: 'event',
      },
      {
        id: '000000010',
        title: 'title XXXX',
        description: 'lorem ipsum',
        extra: '马上到期',
        status: 'urgent',
        type: 'event',
      },
      {
        id: '000000011',
        title: 'title XXXX',
        description: 'lorem ipsum',
        extra: '已耗时 8 天',
        status: 'doing',
        type: 'event',
      },
      {
        id: '000000012',
        title: 'title XXXX',
        description: 'lorem ipsum',
        extra: '进行中',
        status: 'processing',
        type: 'event',
      },
    ],
  });
};

export default {
  'GET /api/notices': getNotices,
};
