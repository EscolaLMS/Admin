import React, { useCallback, useMemo, useState } from 'react';
import CurrentUsers from './CurrentUsers';
import Customers from './Customers';
import HallOfFame from './HallOfFame';
import Ratings from './Ratings';
import Sales from './Sales';
import Tutorial from './Tutorial';
import YourCourses from './YourCourses';
import PieChart from './PieChart';
import { FormattedMessage } from 'umi';
import { PlusSquareOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './index.css';
import { Button, Row, Space, Typography } from 'antd';

const COLS = 2;
const ROW_HEIGHT = 150;

type Props = Record<string, any>;
type Component<P extends Props> = (props: P) => React.ReactElement | null;
type DashboardComponent<P extends Props> = {
  component: Component<P>;
  props?: P;
  [key: string]: any;
};
type Dashboard = Record<string, DashboardComponent<any>>;

const wrap = <P extends Props>(component: DashboardComponent<P>) => {
  return component;
};

const components: Dashboard = {
  'current-users': wrap({
    component: CurrentUsers,
    w: 1,
    h: 1,
    maxH: 1,
    props: {
      metric: 'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric',
    },
  }),
  customers: wrap({ component: Customers, w: 1, h: 1, maxH: 1 }),
  'hall-of-fame': wrap({
    component: HallOfFame,
    w: 1,
    h: 1,
    maxH: 1,
    props: {
      metric: {
        bestSelling: 'EscolaLms\\Reports\\Metrics\\CoursesTopSellingMetric',
        bestRated: 'EscolaLms\\Reports\\Metrics\\CoursesBestRatedMetric',
      },
    },
  }),
  ratings: wrap({ component: Ratings, w: 1, h: 4, maxH: 4, props: {} }),
  sales: wrap({ component: Sales, w: 1, h: 1, maxH: 1 }),
  tutorial: wrap({ component: Tutorial, w: 2, h: 2, maxH: 2 }),
  'your-courses': wrap({ component: YourCourses, w: 2, h: 3, maxH: 3, props: {} }),
  'pie-chart-CoursesMoneySpentMetric': wrap({
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: {
      metric: 'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric',
      asDonut: true,
      customLabelTitle: (text: string) => text.slice(0, 8) + (text.length > 8 ? '...' : ''),
      customLabelContent: (item: API.ReportItem) => {
        return `PLN ${item.value}`;
      },
    },
  }),
  'pie-chart-CoursesPopularityMetric': wrap({
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: {
      metric: 'EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric',
    },
  }),
  'pie-chart-CoursesSecondsSpentMetric': wrap({
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: {
      metric: 'EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric',
      asDonut: true,
    },
  }),
  'pie-chart-TutorsPopularityMetric': wrap({
    w: 1,
    h: 4,
    maxH: 4,
    component: PieChart,
    props: { metric: 'EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric' },
  }),

  add: wrap({
    w: 1,
    h: 1,
    maxH: 1,
    component: PieChart,
  }),
};

const defaultStageComponents: (keyof typeof components)[] = [
  'tutorial',
  'hall-of-fame',
  'ratings',
  'current-users',
  'your-courses',
  'pie-chart-CoursesMoneySpentMetric',
  'pie-chart-CoursesPopularityMetric',
  'pie-chart-CoursesSecondsSpentMetric',
  'pie-chart-TutorsPopularityMetric',
];

export const Dashdoard: React.FC = () => {
  const [stageComponents, setStageComponents] =
    useState<(keyof typeof components)[]>(defaultStageComponents);
  const onRemove = useCallback((key: keyof typeof components) => {
    setStageComponents((prevStageComponents) => {
      return prevStageComponents.filter((k) => k !== key);
    });
  }, []);

  const onAdd = useCallback((key: keyof typeof components) => {
    setStageComponents((prevStageComponents) => [...prevStageComponents, key]);
  }, []);

  const layouts = useMemo(() => {
    let x = 1;
    let y = 0;

    const l = stageComponents.map((key /*, i, arr */) => {
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
          .map((key) => {
            const Component = components[key].component;
            return (
              <div key={key}>
                <Component {...components[key].props} />
                <Button
                  size="small"
                  type="default"
                  icon={<CloseSquareOutlined />}
                  className="dashboard-draggable__remove_btn"
                  onClick={() => onRemove(key)}
                />
              </div>
            );
          })}
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
                  <Space wrap style={{ justifyContent: 'center' }}>
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
