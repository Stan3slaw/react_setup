import axios from 'axios';

jest.mock('axios');

describe('RequestService', () => {
  const data = { data: 'data' };
  const error: Error = {
    name: 'Bad Request',
    message: 'Error message',
  };

  describe('get', () => {
    it('should successfully get data', async () => {
      // Given
      jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve(data));

      // When
      const getRequest = axios.get('url');

      // Then
      expect(getRequest).resolves.toEqual(data);
    });

    it('should return error on get request', async () => {
      // Given
      jest.spyOn(axios, 'get').mockReturnValue(Promise.reject(error));

      // When
      const getRequest = axios.get('url');

      // Then
      expect(getRequest).rejects.toEqual(error);
    });
  });

  describe('post', () => {
    it('should successfully post data', async () => {
      // Given
      jest.spyOn(axios, 'post').mockReturnValue(Promise.resolve(data));

      // When
      const postRequest = axios.post('url');

      // Then
      expect(postRequest).resolves.toEqual(data);
    });

    it('should return error on post request', async () => {
      // Given
      jest.spyOn(axios, 'post').mockReturnValue(Promise.reject(error));

      // When
      const postRequest = axios.post('url');

      // Then
      expect(postRequest).rejects.toEqual(error);
    });
  });

  describe('put', () => {
    it('should successfully put data', async () => {
      // Given
      jest.spyOn(axios, 'put').mockReturnValue(Promise.resolve(data));

      // When
      const putRequest = axios.put('url');

      // Then
      expect(putRequest).resolves.toEqual(data);
    });

    it('should return error on put request', async () => {
      // Given
      jest.spyOn(axios, 'put').mockReturnValue(Promise.reject(error));

      // When
      const putRequest = axios.put('url');

      // Then
      expect(putRequest).rejects.toEqual(error);
    });
  });

  describe('patch', () => {
    it('should successfully patch data', async () => {
      // Given
      jest.spyOn(axios, 'patch').mockReturnValue(Promise.resolve(data));

      // When
      const patchRequest = axios.patch('url');

      // Then
      expect(patchRequest).resolves.toEqual(data);
    });

    it('should return error on patch request', async () => {
      // Given
      jest.spyOn(axios, 'patch').mockReturnValue(Promise.reject(error));

      // When
      const patchRequest = axios.patch('url');

      // Then
      expect(patchRequest).rejects.toEqual(error);
    });
  });

  describe('delete', () => {
    it('should successfully delete data', async () => {
      // Given
      jest.spyOn(axios, 'delete').mockReturnValue(Promise.resolve(data));

      // When
      const deleteRequest = axios.delete('url');

      // Then
      expect(deleteRequest).resolves.toEqual(data);
    });

    it('should return error on delete request', async () => {
      // Given
      jest.spyOn(axios, 'delete').mockReturnValue(Promise.reject(error));

      // When
      const deleteRequest = axios.delete('url');

      // Then
      expect(deleteRequest).rejects.toEqual(error);
    });
  });
});
