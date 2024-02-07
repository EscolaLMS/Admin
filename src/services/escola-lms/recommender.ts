import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/recommender/course/:courseId */
export async function getCourseRecommender(courseId?: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Recommender>>(
    `/api/admin/recommender/course/${courseId} `,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/**  GET /api/admin/recommender/lesson/:lessonId/topic */
export async function getExerciseRecommender(lessonId: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.RecommenderExercise>>(
    `/api/admin/recommender/lesson/${lessonId}/topic `,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
