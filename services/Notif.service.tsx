import { BASE_SERVICE_URL } from '../config';

export default class NotifService {
  constructor() { }

  public async search(body?: any) {

    body = { "moduleName": "admin", "orgFilter": { "onlyOrgSearch": false, "orgList": [], "directOrgAssociation": true }, "startRowIndex": 1, "searchName": "NotifMsgPopover", "selectList": ["Pk", "MgrId", "VerNumber", "Resource.Description", "ImmediateNotif", "dateCreated", "Priority", "NotifInfo", "Unread", "Custom"], "sortTermList": [{ "descending": true, "fullName": "Pk" }], "resultLimit": 11, "searchTermList": [{ "attribute": { "name": "VirtualMgrId", "value": [11100, 10547, 11702, 10739, 10706, 10732, 11708, 50462] }, "operator": "in" }, { "attribute": { "name": "NotifInfo", "value": "null" }, "operator": "isNotNull" }] };
    const resposeData = await fetch(BASE_SERVICE_URL + '/rest/NotifMsg/search', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      console.log(response.headers);
      return response.json();
    });

    return resposeData;
  }


  public async unReadFlagUpdate(uniqueObjIdString?: any,pk?: any) {

    var body = {
      "moduleName": "admin", "appCommand": {
        "actionCommandName": "performAction",
        "appCommandParams": [{ "name": "PObjModelString", "value": "NotifMsg" }, { "name": "ActionType", "value": "MARKASREAD" }]
      },
      "objectIdentifiers": [{ "objectType": "NotifMsg", "mgrId": 50461, "verNum": 0, "dateUpdated": null, "uniqueObjIdString": uniqueObjIdString, "pk": pk }]
    };


    const resposeData = await fetch(BASE_SERVICE_URL + '/rest/NotifMsg', {
      method: 'put',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      console.log(response.headers);
      return response.json();
    });

    return resposeData;
  }


}
