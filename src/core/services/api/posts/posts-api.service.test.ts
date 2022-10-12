import type { ErrorResponse } from '../../../types/api/api.types';
import type { GetPostResponseDto } from '../../../types/api/posts-api.types';
import requestService from '../../request-service/request.service';
import postsApiService from './posts-api.service';

describe('PostsApiService', () => {
  describe('getPosts', () => {
    it('should return posts', async () => {
      // Given
      const expectedResult: GetPostResponseDto[] = [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
      ];

      jest.spyOn(requestService, 'get').mockReturnValue(Promise.resolve(expectedResult));

      // When
      const result = await postsApiService.getPosts();

      // Then
      expect(result).toEqual(expectedResult);
      expect(requestService.get).toBeCalledWith(expect.any(String), undefined);
    });

    it('should return error on failure', async () => {
      // Given
      const error: ErrorResponse = {
        statusCode: 404,
        message: 'Not Found',
      };

      jest.spyOn(requestService, 'get').mockReturnValue(Promise.reject(error));

      try {
        // When
        const result = await postsApiService.getPosts();
        expect(result).rejects.toEqual(error);
      } catch (e) {
        // Then
        expect(postsApiService.getPosts).rejects.toEqual(error);
      }
    });
  });
});
