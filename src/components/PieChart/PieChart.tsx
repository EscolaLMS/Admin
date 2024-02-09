import { reports } from '@/services/escola-lms/reports';
import { FileExcelOutlined } from '@ant-design/icons';
import type { PieConfig } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';
import ProCard from '@ant-design/pro-card';
import { Alert, Button, Spin, Table } from 'antd';
import { mkConfig } from 'export-to-csv';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { download, generateCsv } from 'export-to-csv';

const columns = [
  {
    title: <FormattedMessage id="label" defaultMessage="label" />,
    dataIndex: 'label',
    key: 'label',
  },
  {
    title: <FormattedMessage id="value" defaultMessage="value" />,
    dataIndex: 'value',
    key: 'value',
  },
];

type State =
  | {
      mode: 'init';
    }
  | {
      mode: 'loading';
    }
  | {
      mode: 'error';
      error: string;
    }
  | {
      mode: 'loaded';
      value: API.Report;
    };

const PieChart: React.FC<{
  metric: API.ReportType;
  header?: boolean;
  asDonut?: boolean;
  customLabelTitle?: (text: string) => string;
  customLabelContent?: (value: API.ReportItem) => string;
}> = ({ metric, header = true, asDonut = false, customLabelTitle, customLabelContent }) => {
  const [state, setState] = useState<State>({ mode: 'init' });
  const intl = useIntl();

  const config: Omit<PieConfig, 'data'> = {
    appendPadding: 10,
    angleField: 'value',
    colorField: 'label',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',

      content: function content(_ref: Record<string, any>) {
        const percent = _ref.percent as number;
        return percent >= 0.01 ? ''.concat((percent * 100).toFixed(0), '%') : '';
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
    legend: {
      itemValue: {
        alignRight: true,
        formatter: (text, item) => {
          if (customLabelContent && 'value' in state) {
            const value = state.value.find(({ label }) => label === item.name);
            return value ? customLabelContent(value) : text;
          }
          return text;
        },
      },
    },
  };

  const donutConfig: Pick<PieConfig, 'innerRadius' | 'label' | 'appendPadding' | 'legend'> = {
    appendPadding: 20,
    innerRadius: 0.6,
    label: {
      ...config.label,
      offset: '-50%',
    },
    legend: {
      itemWidth: undefined,
      itemName: {
        formatter: (text) => (customLabelTitle ? customLabelTitle(text) : text),
      },
      offsetX: -24,
      itemValue: {
        formatter: (_, item) => {
          if (customLabelContent && 'value' in state) {
            const value = state.value.find(({ label }) => label === item.value);
            return value ? customLabelContent(value) : undefined;
          }
          return undefined;
        },
      },
    },
  };

  const completeConfig: Omit<PieConfig, 'data'> = {
    ...config,
    ...(asDonut ? donutConfig : {}),
  };

  useEffect(() => {
    setState({ mode: 'loading' });

    reports({ metric })
      .then((response) => {
        if (response.success) {
          setState({ mode: 'loaded', value: response.data });
        } else {
          setState({ mode: 'error', error: response.message });
        }
      })
      .catch((err) => setState({ mode: 'error', error: err.toString() }));
  }, [metric]);

  const onDownload = useCallback(() => {
    if (state.mode === 'loaded') {
      const options = {
        filename: metric.split('\\').join('-'),
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: intl.formatMessage({ id: metric.split('\\').pop() }),
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
      };

      const csvConfig = mkConfig(options);

      const csv = generateCsv(csvConfig)(state.value);

      download(csvConfig)(csv);
    }
  }, [state]);

  return (
    <ProCard
      title={
        header && (
          <FormattedMessage
            id={metric.split('\\').pop()}
            defaultMessage={metric.split('\\').pop()}
          />
        )
      }
      extra={
        header && (
          <Button icon={<FileExcelOutlined />} size="small" onClick={() => onDownload()}>
            {' '}
            <FormattedMessage id={'download'} />
            {'\u00A0'}CSV
          </Button>
        )
      }
      headerBordered
    >
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && (
        <div>
          <Pie {...completeConfig} data={state.value} />
          {header && (
            <Table pagination={false} size="small" dataSource={state.value} columns={columns} />
          )}
        </div>
      )}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default PieChart;
