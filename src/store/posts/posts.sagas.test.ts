import { testSaga } from 'redux-saga-test-plan';

import postsApiService from '../../core/services/api/posts/posts-api.service';

import type { GetPostResponseDto } from '../../core/types/api/posts-api.types';
import { postsActions } from './posts.actions';
import { postsSagas } from './posts.sagas';

describe('PostsSagas', () => {
  describe('getPosts', () => {
    it('should successfully return list of posts', () => {
      // Given
      const expectedResult: GetPostResponseDto[] = [
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        },
        {
          userId: 1,
          id: 4,
          title: 'eum et est occaecati',
          body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
        },
      ];

      testSaga(postsSagas.getPostsWorker)
        .next()
        // When
        .put({ type: postsActions.getPostsRequested.type })
        .next()
        .call(postsApiService.getPosts)
        // Then
        .next({ data: expectedResult })
        .put({ type: postsActions.getPostsSuccessful.type, payload: expectedResult })
        .next()
        .isDone();
    });

    it('should return error on failure', () => {
      // Given
      const expectedError: any = {
        response: {
          data: {
            statusCode: 404,
            message: 'Not Found',
          },
        },
      };

      testSaga(postsSagas.getPostsWorker)
        .next()
        // When
        .put({ type: postsActions.getPostsRequested.type })
        .next()
        .call(postsApiService.getPosts)
        // Then
        .throw(expectedError)
        .put({ type: postsActions.getPostsFailed.type, payload: expectedError.response.data })
        .next()
        .isDone();
    });
  });
});
