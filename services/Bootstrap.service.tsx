const base_url = 'http://mnipdmkuchipudi.modeln.com:5525/modeln';
import axios from 'axios';


export default class BootstrapService {
  constructor() {}

  public async bootstrap(username: string, password: string) {
    const body = { username, password };
    return axios.post(base_url, body);
  }

  public async logout() {}
}
