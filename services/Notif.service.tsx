

//const base_url = 'http://mnipdmkuchipudi.modeln.com:5525/modeln';
const base_url = 'http://localhost:3006/modeln';
var authUrl = '/rest/NotifMsg/search';



const body = { username: 'Administrator', password: 'Administrator' };

export default class NotifService {
  constructor() {}

  public async search(body: any) {
    return fetch( base_url + authUrl, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      console.log(response.headers);
      return response.json();
    });
  }

}
