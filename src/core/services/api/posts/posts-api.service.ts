import type { RequestService } from '../../request-service/request.service';
import requestService from '../../request-service/request.service';
import ApiServiceAbstract from '../api-service.abstract';

export class PostsApiService extends ApiServiceAbstract {
  constructor(service: RequestService, baseUrl: string) {
    super(service, baseUrl);
  }

  getPosts = async (): Promise<void> => this.get('posts');
}

export default new PostsApiService(requestService, '');
