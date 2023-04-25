import React, { useCallback, useMemo, useState } from 'react';
import { Button } from 'antd';
import CurrentUsers from './CurrentUsers';
import Customers from './Customers';
import HallOfFame from './HallOfFame';
import Ratings from './Ratings';
import Sales from './Sales';
import Tutorial from './Tutorial';
import YourCourses from './YourCourses';
import PieChart from './PieChart';
import { CloseSquareOutlined } from '@ant-design/icons';
import type { Layout } from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './index.css';

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
    h: 4,
    maxH: 4,
    props: {
      metric: 'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric',
    },
  }),
  customers: wrap({ component: Customers, w: 1, h: 1, maxH: 1 }),
  'hall-of-fame': wrap({
    component: HallOfFame,
    w: 1,
    h: 3,
    maxH: 3,
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

interface LayoutConfig {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  maxH: number | undefined;
}

interface LayoutConfigObject {
  lg: LayoutConfig[];
  md: LayoutConfig[];
  sm: LayoutConfig[];
  xs: LayoutConfig[];
  xxs: LayoutConfig[];
}

export const Dashdoard: React.FC = () => {
  const [stageComponents, setStageComponents] =
    useState<(keyof typeof components)[]>(defaultStageComponents);

  const onRemove = useCallback((key: keyof typeof components) => {
    setStageComponents((prevStageComponents) => {
      return prevStageComponents.filter((k) => k !== key);
    });
  }, []);

  const layouts = useMemo(() => {
    let x = 1;
    let y = 0;

    if ('layout' in localStorage) {
      const layoutFromLS = localStorage.getItem('layout');

      if (layoutFromLS) {
        const layout = JSON.parse(layoutFromLS);
        return layout.value;
      }
    }

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

  function saveToLS(key: string, value: any) {
    if (localStorage) {
      localStorage.setItem(
        key,
        JSON.stringify({
          value,
        }),
      );
    }
  }

  const onLayoutChange = (layout: Layout[]) => {
    const data = layout.reduce<LayoutConfig[]>(
      (acc, { i, x, y, w, h, maxH }) => [
        ...acc,
        {
          i,
          x,
          y,
          w,
          h,
          maxH: maxH,
        },
      ],
      [],
    );
    const changedLayouts: LayoutConfigObject = {
      lg: data,
      md: data,
      sm: data,
      xs: data,
      xxs: data,
    };
    saveToLS('layout', changedLayouts);
  };

  return (
    <main>
      <ResponsiveGridLayout
        rowHeight={ROW_HEIGHT}
        autoSize={true}
        cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
        className="layout dashboard-draggable"
        layouts={layouts}
        onLayoutChange={(layout) => onLayoutChange(layout)}
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
      </ResponsiveGridLayout>
    </main>
  );
};
