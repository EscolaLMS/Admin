import AnalysisCharts from '@/pages/Consultations/components/EffectivenessAnalysisDetails/AnalysisCharts';
import DownloadSection from '@/pages/Consultations/components/EffectivenessAnalysisDetails/DownloadSection';
import type {
  AnalysisData,
  AnalysisMeta,
  ChartPoint,
} from '@/pages/Consultations/components/types';
import { getAnalyticsChartFrames, getModelAnalytics } from '@/services/escola-lms/consultations';
import {
  ANALYSIS_COLORS, EmotionKey, formatRating,
  getRatingLabelColorByValue
} from '@/utils/utils';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Select, Space, Typography, message } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage, Link, useParams, useSelectedRoutes } from 'umi';
import {WarningOutlined} from "@ant-design/icons";

const { Text } = Typography;

const PageWrapper = styled.div`
  padding: 0;
  min-height: 100vh;
  background: ${ANALYSIS_COLORS.bgLight};
  border-radius: 10px;
`;

const StyledCard = styled(Card)`
  background: transparent;
  box-shadow: none;
`;

const ControlsRow = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const RatingValue = styled(Text)<{ color: string }>`
  font-size: 24px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 6px;
  color: ${(props) => props.color};
  background: ${(props) => `${props.color}33`};
  border: 1px solid ${(props) => props.color};
  white-space: nowrap;
`;

const RatingDescription = styled(Text)`
  max-width: 250px;
`;

const ResolutionPicker = styled(Space)`
  background: ${ANALYSIS_COLORS.white};
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${ANALYSIS_COLORS.border};
`;

const ResolutionLabel = styled(Text)`
  font-size: 13px;
`;

const SectionTitle = styled(Text)`
  font-size: 16px;
`;

const VideoScreenWarning = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;
  color: ${ANALYSIS_COLORS.orange};
`;

const VideoScreenWarningText = styled(Text)`
   margin: 0;
   color: ${ANALYSIS_COLORS.orange};
`;


const TIME_OPTIONS = [
  { value: 15, label: <FormattedMessage id="time.seconds" values={{ value: 15 }} /> },
  { value: 30, label: <FormattedMessage id="time.seconds" values={{ value: 30 }} /> },
  { value: 60, label: <FormattedMessage id="time.minutes" values={{ value: 1 }} /> },
  { value: 300, label: <FormattedMessage id="time.minutes" values={{ value: 5 }} /> },
];

const EffectivenessAnalysisDetails = () => {
  const { modelId, id: termId } = useParams<{ modelType: string; modelId: string; id: string }>();
  const [res, setRes] = useState<number>(15);
  const [loading, setLoading] = useState<boolean>(false);
  const [analysisMeta, setAnalysisMeta] = useState<AnalysisMeta | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const routes = useSelectedRoutes();
  const ratingColor = useMemo(
    () => getRatingLabelColorByValue(analysisMeta?.rating ? analysisMeta.rating : 0),
    [analysisMeta?.rating],
  );

  const modelType = useMemo(() => {
    const currentRoute = routes[routes.length - 1]?.route as any;
    return currentRoute?.modelType;
  }, [routes]);

  const breadcrumbItems = useMemo(
    () => [
      {
        title: (
          <FormattedMessage id={modelType === 'webinar' ? 'menu.Courses' : 'other_activities'} />
        ),
      },
      {
        title: (
          <Link to={modelType === 'webinar' ? '/courses/webinars/list' : '/other/consultations'}>
            <FormattedMessage id={modelType === 'webinar' ? 'webinars' : 'consultations'} />
          </Link>
        ),
      },
      {
        title: analysisMeta?.model_name || <FormattedMessage id="details" />,
      },
    ],
    [modelType, analysisMeta],
  );

  const colWidth = useMemo(() => (res <= 30 ? 85 : 150), [res]);

  useEffect(() => {
    const fetchMeta = async () => {
      if (!modelType || !modelId || !termId) return;
      try {
        const resMeta = await getModelAnalytics(modelType, modelId, termId);
        if (resMeta?.success) {
          setAnalysisMeta(resMeta.data);
        }
      } catch {
        message.error('Error fetching meta data');
      }
    };
    fetchMeta();
  }, [modelType, modelId, termId]);

  useEffect(() => {
    const fetchFrames = async () => {
      if (!analysisMeta?.id) return;
      setLoading(true);
      try {
        const resFrames = await getAnalyticsChartFrames(analysisMeta.id, { interval: res });
        if (resFrames?.success && resFrames.data && resFrames.data.length > 0) {
          const firstTs = new Date(resFrames.data[0].window_start).getTime();
          const formatted: ChartPoint[] = resFrames.data.map((item: AnalysisData) => {
            const currentTs = new Date(item.window_start).getTime();
            const second = Math.floor((currentTs - firstTs) / 1000);
            return {
              ...item,
              second,
              interval: res,
              time: `${Math.floor(second / 60)}:${(second % 60).toString().padStart(2, '0')}`,
              attention: Math.round(parseFloat(item.attention) * 100) || 0,
              max_emotion_percentage_val:
                Math.round(parseFloat(item.max_emotion_percentage) * 100) || 0,
              emotionKey: item.max_emotion || EmotionKey.NEUTRAL,
            };
          });
          setChartData(formatted);
        } else {
          setChartData([]);
        }
      } catch (e) {
        console.error(e);
        message.error('Error fetching chart data');
      } finally {
        setLoading(false);
      }
    };
    fetchFrames();
  }, [analysisMeta?.id, res]);

  const chartWidth = useMemo(() => {
    const calculatedWidth = chartData.length * colWidth;
    return chartData.length > 5 ? `${calculatedWidth}px` : '100%';
  }, [chartData.length, colWidth]);

  return (
    <PageContainer
      header={{
        breadcrumb: { items: breadcrumbItems },
        title: analysisMeta?.model_name,
        extra: [
          <DownloadSection
            key="download"
            url={analysisMeta?.url}
            expirationTime={analysisMeta?.url_expiration_time_millis}
          />,
        ],
      }}
    >
      <PageWrapper>
        <StyledCard bordered={false}>
          <ControlsRow span={24}>
            <Space direction="vertical" size={8}>
              <SectionTitle strong>
                <FormattedMessage id="engagement_rating" />
              </SectionTitle>
              <Space size="large">
                <RatingValue color={ratingColor}>{formatRating(analysisMeta?.rating || 0)}</RatingValue>
                <RatingDescription type="secondary">
                  <FormattedMessage
                    id="ai_analysis_average"
                    values={{
                      modelType: <FormattedMessage id={modelType === 'webinar' ? "webinarFragment" : "consultationFragment"}/>,
                    }}
                  />
                </RatingDescription>
              </Space>
            </Space>
            <ResolutionPicker align="center">
              <ResolutionLabel>
                <FormattedMessage id="resolution" />:
              </ResolutionLabel>
              <Select value={res} onChange={setRes} style={{ width: 100 }} variant="borderless">
                {TIME_OPTIONS.map((opt) => (
                  <Select.Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Option>
                ))}
              </Select>
            </ResolutionPicker>
          </ControlsRow>
          {analysisMeta?.processing_video && (
            <VideoScreenWarning>
              <WarningOutlined/>
              <VideoScreenWarningText>
                <FormattedMessage id="ai_warn_video_buffer"/>
                </VideoScreenWarningText>
            </VideoScreenWarning>
          )}
          {chartData && (
            <AnalysisCharts
              chartData={chartData}
              loading={loading}
              chartWidth={chartWidth}
              resolution={res}
            />
          )}
        </StyledCard>
      </PageWrapper>
    </PageContainer>
  );
};

export default EffectivenessAnalysisDetails;
