import React, { useState, useEffect, useCallback } from 'react';
import type { PieConfig } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';
import { reports } from '@/services/escola-lms/reports';
import { Spin, Alert, Button, Table } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import ProCard from '@ant-design/pro-card';
import { FileExcelOutlined } from '@ant-design/icons';
import { ExportToCsv } from 'export-to-csv';

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
  asDonut: boolean;
  customLabelContent?: (value: API.ReportItem) => string;
}> = ({ metric, header = true, asDonut = false, customLabelContent }) => {
  const [state, setState] = useState<State>({ mode: 'init' });
  const intl = useIntl();

  // const getValueOfSingleData = (searchLabel: string) => {
  //   if ('value' in state) {
  //     // const value = state.value.find((x) => label === searchLabel);
  //     // return value;
  //     // console.log(value);
  //   }
  // };

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
      // itemSpacing: 20,
      itemWidth: 80,
      itemName: {
        // spacing: 40,
        style: {
          width: 10,
        },
      },
      itemValue: {
        formatter: (text, item) => {
          // return 'halo' + text;
          // console.log(item);
          // const x = getValueOfSingleData(item.id ?? item.name);
          // console.log('text __ ', x);
          // return text;
          if (customLabelContent && 'value' in state) {
            // const a = state.value.find(customLabelContent);
            // console.log(a);
            console.log(item.id);
            const value = state.value.find(({ label }) => label === item.name);
            if (value) console.log('func ', customLabelContent(value));
            return value ? customLabelContent(value) : '__' + text;
            // return value;
            // console.log(value);
          }
          // return customLabelContent(item.id) ?? text;
          return '00 ' + text;
        },
      },
    },
  };

  const donutConfig: Pick<PieConfig, 'innerRadius' | 'label'> = {
    innerRadius: 0.6,
    label: {
      ...config.label,
      offset: '-50%',
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

      const csvExporter = new ExportToCsv(options);

      csvExporter.generateCsv(state.value);
    }
  }, [state]);

  console.log('state', state);

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
