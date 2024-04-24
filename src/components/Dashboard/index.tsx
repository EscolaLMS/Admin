import PACKAGES from '@/consts/packages';
import { createHavePackageInstalled } from '@/utils/access';
import { CloseSquareOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { Responsive, WidthProvider, type Layout } from 'react-grid-layout';
import { useModel } from 'umi';

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import Add from './Add';
import CurrentUsers from './CurrentUsers';
import Customers from './Customers';
import HallOfFame from './HallOfFame';
import PieChart from './PieChart';
import Ratings from './Ratings';
import Sales from './Sales';
import Tutorial from './Tutorial';
import YourCourses from './YourCourses';
import './index.css';

const ResponsiveGridLayout = WidthProvider(Responsive);
const COLS = 2;
const ROW_HEIGHT = 150;

type Props = Record<string, any>;
type Component<P extends Props> = (props: P) => React.ReactElement | null | React.ReactNode;
type DashboardComponent<P extends Props> = {
  component: Component<P>;
  props?: P;
  [key: string]: any;
};
type DashboardData = Record<string, DashboardComponent<any>>;

const wrap = <P extends Props>(component: DashboardComponent<P>) => {
  return component;
};

const components: DashboardData = {
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
    maxH: 3,
    component: PieChart,
  }),
};

type ComponentsKeys = keyof typeof components;

const defaultStageAwfComponents: ComponentsKeys[] = [
  'your-courses',
  'pie-chart-CoursesMoneySpentMetric',
  'pie-chart-CoursesPopularityMetric',
  'pie-chart-CoursesSecondsSpentMetric',
  'pie-chart-TutorsPopularityMetric',
  'add',
];

const defaultStageComponents: ComponentsKeys[] = [
  'tutorial',
  'hall-of-fame',
  'ratings',
  'current-users',
  'your-courses',
  'pie-chart-CoursesMoneySpentMetric',
  'pie-chart-CoursesPopularityMetric',
  'pie-chart-CoursesSecondsSpentMetric',
  'pie-chart-TutorsPopularityMetric',
  'add',
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

export const Dashboard: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const havePackageInstalled = useCallback(createHavePackageInstalled(initialState?.packages), [
    initialState?.packages,
  ]);

  const [stageComponents, setStageComponents] = useState<ComponentsKeys[]>(
    havePackageInstalled(PACKAGES.PCGIntegration)
      ? defaultStageAwfComponents
      : defaultStageComponents,
  );

  const keysToAdd = useMemo(() => {
    return Object.keys(components).filter((key) => !stageComponents.includes(key) && key !== 'add');
  }, [stageComponents]);

  const onAdd = useCallback((key: ComponentsKeys) => {
    setStageComponents((prevStageComponents) => [...prevStageComponents, key]);
  }, []);

  const onRemove = useCallback((key: ComponentsKeys) => {
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

    const l = stageComponents.map((key) => {
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
    const data = layout.map<LayoutConfig>(({ i, x, y, w, h, maxH }) => ({
      i,
      x,
      y,
      w,
      h,
      maxH,
    }));
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
        onLayoutChange={onLayoutChange}
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
                  onMouseDown={(e) => e.stopPropagation()}
                />
              </div>
            );
          })}
        {keysToAdd.length > 0 && (
          <div key="add">
            <Add onAddButtonClick={onAdd} keys={keysToAdd} />
          </div>
        )}
      </ResponsiveGridLayout>
    </main>
  );
};
