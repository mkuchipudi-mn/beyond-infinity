import { BASE_SERVICE_URL } from '../config';

export default class LoginService {

  public async login(username: string, password: string) {
    const body = { username, password };
    return fetch( BASE_SERVICE_URL + '/rest/authenticate/session/login', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      console.log(response.headers);
      return response.json();
    });
  }

  public async logout() {}
}