import React, { useCallback } from 'react';
import ProCard from '@ant-design/pro-card';
import { Column } from '@ant-design/plots';

const Chart: React.FC<{
  config: any;
  value: any[];
  title: JSX.Element | string;
  children?: JSX.Element;
  valueLabel?: string;
}> = ({ config, value, title, children, valueLabel }) => {
  const onTitle = useCallback(
    (_title: string, datum: any) => {
      const topic = value.find((v) => v.type === datum.type)?.topic;
      if (topic as API.Topic) {
        return `${topic.topicable_type.split('\\').pop()}:${topic.title}`;
      }
      return _title;
    },
    [value],
  );

  const onTooltip = useCallback(
    (datum: any) => {
      return {
        name: valueLabel || datum.type,
        value: datum.value,
      };
    },
    [valueLabel],
  );

  return (
    <ProCard title={title} headerBordered>
      <div style={{ overflow: 'auto', minHeight: '400px' }}>
        <Column
          {...config}
          tooltip={{
            formatter: onTooltip,
            title: onTitle,
          }}
          data={value}
        />
        {children && children}
      </div>
    </ProCard>
  );
};

export default Chart;
