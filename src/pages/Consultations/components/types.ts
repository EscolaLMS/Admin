export interface AnalysisMeta {
  id: number;
  model_name: string;
  rating: number;
  url: string | null;
  url_expiration_time_millis: number | null;
  processing_video?: boolean;
}

export interface AnalysisData {
  window_start: string;
  window_end: string;
  attention: string;
  max_emotion: string;
  max_emotion_percentage: string;
  screen_path: string;
  [key: string]: string | number;
}

export interface ChartPoint extends Omit<AnalysisData, 'attention'> {
  second: number;
  time: string;
  attention: number;
  max_emotion_percentage_val: number;
  emotionKey: string;
}

export interface DotProps {
  cx?: number;
  cy?: number;
  payload?: ChartPoint;
}
