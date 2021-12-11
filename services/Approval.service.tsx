import { BASE_SERVICE_URL } from '../config';

export default class ApprovalsService {

  constructor() {}

  public async approve(pk: string, comment: string)  {
    return fetch(BASE_SERVICE_URL + `/rest/approval/${pk}`, {
      method: 'post',
      body: JSON.stringify({comment,"apprStatus": "Approve"}),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      return response.json();
    });
  }


  public async reject(pk: string, comment: string) {
    return fetch(BASE_SERVICE_URL + `/rest/approval/${pk}`, {
      method: 'post',
      body: JSON.stringify({comment, "apprStatus": "Reject"}),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      return response.json();
    });
  }

}