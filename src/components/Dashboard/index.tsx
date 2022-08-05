import { useCallback, useMemo, useState } from 'react';
import CurrentUsers from './CurrentUsers';
import Customers from './Customers';
import HallOfFame from './HallOfFame';
import Ratings from './Ratings';
import Sales from './Sales';
import Tutorial from './Tutorial';
import YourCourses from './YourCourses';
import PieChart from './PieChart';
import { FormattedMessage } from 'umi';
import { PlusSquareOutlined } from '@ant-design/icons';

import { Responsive, WidthProvider, Layout } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './index.css';
import { Button, Row, Space, Typography } from 'antd';

const COLS = 2;
const ROW_HEIGHT = 150;

const components: Record<
  string,
  Omit<Layout, 'i' | 'x' | 'y'> & {
    component: React.FC<any>;
    props?: any;
  }
> = {
  'current-users': { component: CurrentUsers, w: 1, h: 1, maxH: 1 },
  customers: { component: Customers, w: 1, h: 1, maxH: 1 },
  'hall-of-fame': { component: HallOfFame, w: 1, h: 1, maxH: 1 },
  ratings: { component: Ratings, w: 1, h: 1, maxH: 1 },
  sales: { component: Sales, w: 1, h: 1, maxH: 1 },
  tutorial: { component: Tutorial, w: 1, h: 1, maxH: 1 },
  'your-courses': { component: YourCourses, w: 1, h: 1, maxH: 1 },
  'pie-chart-CoursesMoneySpentMetric': {
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: { metric: 'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric', header: false },
  },
  'pie-chart-CoursesPopularityMetric': {
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: { metric: 'EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric', header: false },
  },
  'pie-chart-CoursesSecondsSpentMetric': {
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: { metric: 'EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric', header: false },
  },
  'pie-chart-TutorsPopularityMetric': {
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: { metric: 'EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric', header: false },
  },

  add: {
    w: 1,
    h: 1,
    maxH: 1,
    component: PieChart,
  },
};
// ALL
// const defaultStageComponents =  Object.keys(components) as Array<keyof typeof components>

const defaultStageComponents = [
  'pie-chart-CoursesMoneySpentMetric',
  'pie-chart-CoursesPopularityMetric',
  'pie-chart-CoursesSecondsSpentMetric',
  'pie-chart-TutorsPopularityMetric',
];

export const Dashdoard: React.FC = () => {
  const [stageComponents, setStageComponents] =
    useState<Array<keyof typeof components>>(defaultStageComponents);
  const onRemove = useCallback((key: keyof typeof components) => {
    setStageComponents((prevStageComponents) => {
      console.log(key, prevStageComponents);
      return prevStageComponents.filter((k) => k !== key);
    });
  }, []);

  const onAdd = useCallback((key: keyof typeof components) => {
    setStageComponents((prevStageComponents) => [...prevStageComponents, key]);
  }, []);

  const layouts = useMemo(() => {
    let x = 1;
    let y = 0;

    /*

    const l = Object.keys(components)
      .filter((key) => stageComponents.includes(key))
      */

    const l = stageComponents.map((key, i, arr) => {
      // const prevItem = i > 0 ? components[arr[i - 1]] : null;
      const currItem = components[key];
      x = (x + currItem.w) % COLS;
      return {
        i: key,
        x: x,
        y: y++,
        w: currItem.w,
        h: currItem.h,
        maxH: currItem.maxH,
      };
    });

    return { lg: l, md: l, sm: l, xs: l };
  }, [stageComponents]);

  const keysToAdd = useMemo(() => {
    return Object.keys(components).filter((key) => !stageComponents.includes(key) && key !== 'add');
  }, [stageComponents]);

  return (
    <main>
      <ResponsiveGridLayout
        rowHeight={ROW_HEIGHT}
        autoSize={true}
        cols={{ lg: 2, md: 2, sm: 2 }}
        className="layout dashboard-draggable"
        layouts={layouts}
      >
        {stageComponents
          .filter((key) => key !== 'add')
          .map((key) => (
            <div key={key}>
              {components[key].component({ ...components[key].props })}
              <button className="dashboard-draggable__remove_btn" onClick={() => onRemove(key)}>
                x
              </button>
            </div>
          ))}
        {keysToAdd.length > 0 && (
          <div key="add">
            <div className="dashboard-draggable__component">
              <article>
                <Row align="middle" justify="center">
                  <Typography.Title level={3}>
                    <FormattedMessage id="add_new_component" />
                  </Typography.Title>
                </Row>
                <Row align="middle" justify="center">
                  <Space>
                    {keysToAdd.map((key) => (
                      <Button
                        icon={<PlusSquareOutlined />}
                        size="small"
                        type="primary"
                        key={key}
                        onClick={() => onAdd(key)}
                      >
                        {' '}
                        <FormattedMessage id={key} />
                      </Button>
                    ))}
                  </Space>
                </Row>
              </article>
            </div>
          </div>
        )}
      </ResponsiveGridLayout>
    </main>
  );
};
