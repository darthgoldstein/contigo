import { request } from '../lib/api-requester';

const routes = {
  login: '/auth/login',
};

export const login = (
  username: string,
  password: string
): Promise<ContigoProfile> => {
  return request.postRequest(routes.login, { username, password });
};
