import { HTTP } from '../utils/HTTP';
import BaseAPI from './BaseApi';

const chatAPIInstance = new HTTP('api/v1/chats');

class ChatAPI extends BaseAPI {
  create() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.post('/', { data: { title: 'string' }});
  }

  request() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.get('/full');
  }
}
