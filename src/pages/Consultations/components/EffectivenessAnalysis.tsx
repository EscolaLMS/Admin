import CategoryTree from '@/components/CategoryTree';
import { DATETIME_FORMAT } from '@/consts/dates';
import type { RecommenderTerm } from '@/pages/Consultations/consultations';
import { getRecommenderTerms } from '@/services/escola-lms/consultations';
import {
  createTableOrderObject,
  EMOTION_POOL,
  formatPercent,
  getLabelColorByValue,
  getRatingLabelColorByValue,
} from '@/utils/utils';
import { Link } from '@@/exports';
import {
  DownloadOutlined,
  ReloadOutlined,
  SettingOutlined,
  VerticalAlignMiddleOutlined,
} from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Tag, Tooltip } from 'antd';
import { format } from 'date-fns';
import type { ElementType } from 'react';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'umi';

interface ActionIconProps {
  component: ElementType;
  onClick?: () => void;
  className?: string;
  key?: string | number;
}

interface EffectivenessAnalysisProps {
  modelType?: 'webinar' | 'consultation';
}

const StyledProTable = styled(ProTable)`
  .ant-table-thead > tr > th::before {
    display: none;
  }
` as typeof ProTable;

const StyledValueTag = styled(Tag)<{ $color: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => `${props.$color}33`};
  border: 1px solid ${(props) => props.$color};
  border-radius: 4px;
  font-weight: bold;
`;

const AttentionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const EmojiHeader = styled.span`
  font-size: 18px;
`;

const TableLink = styled(Link)`
  color: #000;
`;

const ActionIcon = styled(({ component: Component, ...props }: ActionIconProps) => (
  <Component {...props} />
))`
  font-size: 16px;
  color: #8c8c8c;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

const ValueTag = React.memo(
  ({
    value,
    suffix = '',
    isRaw = false,
    rating,
  }: {
    value: string | number;
    suffix?: string;
    isRaw?: boolean;
    rating?: boolean;
  }) => {
    const displayValue = useMemo(() => {
      if (isRaw) return formatPercent(value);
      const num = typeof value === 'string' ? parseFloat(value) : value;
      return isNaN(num) ? '0.00' : num.toFixed(2);
    }, [value, isRaw]);

    const color = useMemo(
      () =>
        rating
          ? getRatingLabelColorByValue(parseFloat(displayValue))
          : getLabelColorByValue(parseFloat(displayValue)),
      [displayValue],
    );

    return (
      <StyledValueTag $color={color}>
        {displayValue}
        {suffix}
      </StyledValueTag>
    );
  },
);

const createEmotionColumn = (emoji: string, dataKey: string): ProColumns<RecommenderTerm> => ({
  title: <EmojiHeader>{emoji}</EmojiHeader>,
  dataIndex: `avg_emotions_${dataKey}` as keyof RecommenderTerm,
  hideInSearch: true,
  align: 'center',
  width: 45,
  render: (val) => `${formatPercent(val as string)}%`,
});

export const EffectivenessAnalysis = ({
  modelType = 'consultation',
}: EffectivenessAnalysisProps) => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);

  const getDetailsPath = useCallback(
    (record: RecommenderTerm) => {
      if (modelType === 'webinar') {
        return `/courses/webinars/effectiveness-analysis/${record.model_id}/${record.id}`;
      }
      return `/other/consultations/effectiveness-analysis/${record.model_id}/${record.id}`;
    },
    [modelType],
  );

  const columns: ProColumns<RecommenderTerm>[] = useMemo(
    () => [
      {
        title: <FormattedMessage id="ID" />,
        dataIndex: 'id',
        hideInSearch: true,
        sorter: true,
        width: 40,
        render: (dom, record) => <TableLink to={getDetailsPath(record)}>{dom}</TableLink>,
      },
      {
        title: <FormattedMessage id="name" />,
        dataIndex: 'model_name',
        sorter: true,
        width: 250,
        render: (dom, record) => <TableLink to={getDetailsPath(record)}>{dom}</TableLink>,
      },
      {
        title: <FormattedMessage id="dateRange" />,
        dataIndex: 'dateRange',
        hideInTable: true,
        valueType: 'dateRange',
        fieldProps: {
          allowEmpty: [true, true],
        },
      },
      {
        title: <FormattedMessage id="categories" />,
        dataIndex: 'category_id',
        hideInTable: true,
        renderFormItem: ({ ...rest }) => <CategoryTree {...rest} />,
      },
      {
        title: <FormattedMessage id="average_attention" />,
        dataIndex: 'avg_attention',
        hideInSearch: true,
        width: 80,
        render: (val) => (
          <AttentionWrapper>
            <ValueTag value={val as string | number} suffix="%" isRaw={true} />
          </AttentionWrapper>
        ),
      },
      {
        title: <FormattedMessage id="emotions" />,
        dataIndex: 'emotions_label',
        hideInSearch: true,
        width: 5,
        render: () => null,
      },
      ...EMOTION_POOL.map((e) => createEmotionColumn(e.icon, e.key)),
      {
        title: <FormattedMessage id="rating" />,
        dataIndex: 'rating',
        hideInSearch: true,
        width: 60,
        render: (_, record) => <ValueTag rating value={record.rating ?? 0.0} />,
      },
      {
        title: <FormattedMessage id="recording_short" />,
        dataIndex: 'recording_short',
        hideInSearch: true,
        width: 60,
        render: (_, record) => (
          <>
            {record.url && (
              <Tooltip
                title={
                  <FormattedMessage
                    id="download_video_btn_tooltip"
                    values={{
                      duration: record.urlExpirationTimeMillis
                        ? `${record.urlExpirationTimeMillis}`
                        : '',
                    }}
                  />
                }
              >
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  size="middle"
                  style={{ borderRadius: '4px' }}
                  onClick={() => window.open(record.url, '_blank')}
                />
              </Tooltip>
            )}
          </>
        ),
      },
    ],
    [modelType],
  );

  return (
    <StyledProTable
      actionRef={actionRef}
      rowKey="id"
      loading={loading}
      search={{
        layout: 'horizontal',
        labelWidth: 'auto',
      }}
      columnEmptyText="0%"
      toolBarRender={() => [
        <ActionIcon
          key="reload"
          component={ReloadOutlined}
          onClick={() => actionRef.current?.reload()}
        />,
        <ActionIcon key="sort" component={VerticalAlignMiddleOutlined} />,
        <ActionIcon key="settings" component={SettingOutlined} />,
      ]}
      request={async (params, sort) => {
        const { dateRange, category_id, pageSize, current, model_name } = params;

        setLoading(true);

        const date_from = dateRange?.[0]
          ? format(new Date(dateRange[0]), DATETIME_FORMAT)
          : undefined;
        const date_to = dateRange?.[1]
          ? format(new Date(dateRange[1]), DATETIME_FORMAT)
          : undefined;

        try {
          const response = await getRecommenderTerms(modelType, {
            name: model_name,
            'categories[]': category_id,
            per_page: pageSize,
            page: current,
            date_from,
            date_to,
            ...createTableOrderObject(sort, 'id'),
          });

          setLoading(false);

          if (response.success) {
            return {
              data: response.data as unknown as RecommenderTerm[],
              total: response.meta.total,
              success: true,
            };
          }

          return { data: [], total: 0, success: false };
        } catch (error) {
          setLoading(false);
          return { data: [], total: 0, success: false };
        }
      }}
      columns={columns}
    />
  );
};

export default EffectivenessAnalysis;
