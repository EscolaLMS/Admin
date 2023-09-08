import type { RequestData } from '@ant-design/pro-table/lib/typing';
import type { SortOrder } from 'antd/lib/table/interface';

export type ProTableRequest<TData, UParams> = (
  params: UParams & {
    pageSize?: number;
    current?: number;
    keyword?: string;
  },
  sort: Record<string, SortOrder>,
  filter: Record<string, (string | number)[] | null>,
) => Promise<Partial<RequestData<TData>>>;
