import { beforeEach, describe, expect, it, jest } from '@jest/globals';

jest.mock('umi', () => ({
  request: jest.fn(() => Promise.resolve({ success: true, data: {} })),
}));

import { request } from 'umi';
import { updateQuizAttemptFeedback } from './gift_quiz';
import { getProjectSolution, updateProjectSolutionFeedback } from './projects';

const mockRequest = request as unknown as ReturnType<typeof jest.fn>;

beforeEach(() => {
  mockRequest.mockClear();
});

describe('updateQuizAttemptFeedback', () => {
  it('PATCHes the dedicated /feedback endpoint with a { feedback } body', async () => {
    await updateQuizAttemptFeedback(5, { feedback: 'Great work' });

    expect(mockRequest).toHaveBeenCalledTimes(1);
    expect(mockRequest).toHaveBeenCalledWith('/api/admin/quiz-attempts/5/feedback', {
      method: 'PATCH',
      data: { feedback: 'Great work' },
    });
  });

  it('sends feedback: null to delete the comment (no 422 path)', async () => {
    await updateQuizAttemptFeedback(5, { feedback: null });

    expect(mockRequest).toHaveBeenCalledWith('/api/admin/quiz-attempts/5/feedback', {
      method: 'PATCH',
      data: { feedback: null },
    });
  });

  it('accepts a string id and forwards extra request options', async () => {
    const signal = new AbortController().signal;
    await updateQuizAttemptFeedback('42', { feedback: 'x' }, { signal });

    expect(mockRequest).toHaveBeenCalledWith('/api/admin/quiz-attempts/42/feedback', {
      method: 'PATCH',
      data: { feedback: 'x' },
      signal,
    });
  });
});

describe('updateProjectSolutionFeedback', () => {
  it('PATCHes the dedicated /feedback endpoint with a { feedback } body', async () => {
    await updateProjectSolutionFeedback(7, { feedback: 'Nice solution' });

    expect(mockRequest).toHaveBeenCalledTimes(1);
    expect(mockRequest).toHaveBeenCalledWith('/api/admin/topic-project-solutions/7/feedback', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: { feedback: 'Nice solution' },
    });
  });

  it('sends feedback: null to delete the comment', async () => {
    await updateProjectSolutionFeedback(7, { feedback: null });

    expect(mockRequest).toHaveBeenCalledWith('/api/admin/topic-project-solutions/7/feedback', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: { feedback: null },
    });
  });
});

describe('getProjectSolution', () => {
  it('GETs a single solution by id (lecturer read endpoint)', async () => {
    await getProjectSolution(7);

    expect(mockRequest).toHaveBeenCalledTimes(1);
    expect(mockRequest).toHaveBeenCalledWith('/api/admin/topic-project-solutions/7', {
      method: 'GET',
    });
  });
});
