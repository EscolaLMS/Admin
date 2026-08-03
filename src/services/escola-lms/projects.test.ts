import { beforeEach, describe, expect, it, jest } from '@jest/globals';

jest.mock('umi', () => ({
  request: jest.fn(() => Promise.resolve({ success: true, data: {} })),
}));

import { request } from 'umi';
import { gradeProjectSolution } from './projects';

const mockRequest = request as unknown as ReturnType<typeof jest.fn>;

beforeEach(() => {
  mockRequest.mockClear();
});

describe('gradeProjectSolution', () => {
  it('PATCHes the dedicated /grade endpoint with a { score, max_score } body', async () => {
    await gradeProjectSolution(7, { score: 8, max_score: 10 });

    expect(mockRequest).toHaveBeenCalledTimes(1);
    expect(mockRequest).toHaveBeenCalledWith('/api/admin/topic-project-solutions/7/grade', {
      method: 'PATCH',
      data: { score: 8, max_score: 10 },
    });
  });

  it('supports a fractional score (score is a double)', async () => {
    await gradeProjectSolution(3, { score: 7.5, max_score: 10 });

    expect(mockRequest).toHaveBeenCalledWith('/api/admin/topic-project-solutions/3/grade', {
      method: 'PATCH',
      data: { score: 7.5, max_score: 10 },
    });
  });

  it('forwards extra request options (e.g. an abort signal)', async () => {
    const signal = new AbortController().signal;
    await gradeProjectSolution(42, { score: 0, max_score: 1 }, { signal });

    expect(mockRequest).toHaveBeenCalledWith('/api/admin/topic-project-solutions/42/grade', {
      method: 'PATCH',
      data: { score: 0, max_score: 1 },
      signal,
    });
  });
});
