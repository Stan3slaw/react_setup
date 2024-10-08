import axios from 'axios';

import { BASE_URL } from '../../constants/request-service.constants';
import RequestServiceAbstract from './request-service.abstract';

export class RequestService extends RequestServiceAbstract {
  private instance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL || BASE_URL,
    });
  }

  get = <R = void>(url: string, query?: Record<string, string | number>): Promise<R> =>
    this.instance.get(url, { params: query });

  post = <R = void, B = unknown>(url: string, body?: B, query?: Record<string, string>): Promise<R> =>
    this.instance.post(url, body, { params: query });

  put = <R = void, B = unknown>(url: string, body?: B, query?: Record<string, string>): Promise<R> =>
    this.instance.put(url, body, { params: query });

  patch = <R = void, B = unknown>(url: string, body?: B, query?: Record<string, string>): Promise<R> =>
    this.instance.patch(url, body, { params: query });

  delete = <R = void>(url: string, query?: Record<string, string>): Promise<R> =>
    this.instance.delete(url, { params: query });
}

export default new RequestService();
