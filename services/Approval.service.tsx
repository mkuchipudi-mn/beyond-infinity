import { BASE_SERVICE_URL } from '../config';

export default class ApprovalsService {

  constructor() {}

  public async approve(pk: string, message: string)  {
    return fetch(BASE_SERVICE_URL + `/rest/data/Claim/${pk}/approve`, {
      method: 'post',
      body: JSON.stringify({message}),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      return response.json();
    });
  }


  public async reject(pk: string, message: string) {
    return fetch(BASE_SERVICE_URL + `/rest/data/Claim/${pk}/reject`, {
      method: 'post',
      body: JSON.stringify({message}),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      return response.json();
    });
  }

}