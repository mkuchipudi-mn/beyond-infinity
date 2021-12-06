//const base_url = 'http://mnipdmkuchipudi.modeln.com:5525/modeln';
const base_url = 'http://localhost:13006/modeln';
var authUrl = '/rest/authenticate/session/login';
const body = { username: 'Administrator', password: 'Administrator' };

export default class LoginService {

  public async login(username: string, password: string) {
    const body = { username, password };
    return fetch( base_url + authUrl, {
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