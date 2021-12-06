

//const base_url = 'http://mnipdmkuchipudi.modeln.com:5525/modeln';
const base_url = 'http://localhost:13006/modeln';
var authUrl = '/rest/NotifMsg/search';



const body = { username: 'Administrator', password: 'Administrator' };

export default class NotifService {
  constructor() { }

  public async search(body?: any) {

    body = { "moduleName": "admin", "orgFilter": { "onlyOrgSearch": false, "orgList": [], "directOrgAssociation": true }, "startRowIndex": 1, "searchName": "NotifMsgPopover", "selectList": ["Pk", "MgrId", "VerNumber", "Resource.Description", "ImmediateNotif", "dateCreated", "Priority", "NotifInfo", "Unread", "Custom"], "sortTermList": [{ "descending": true, "fullName": "Pk" }], "resultLimit": 11, "searchTermList": [{ "attribute": { "name": "VirtualMgrId", "value": [11100, 10547, 11702, 10739, 10706, 10732, 11708, 50462] }, "operator": "in" }, { "attribute": { "name": "NotifInfo", "value": "null" }, "operator": "isNotNull" }] };
    const resposeData = await fetch(base_url + authUrl, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      console.log(response.headers);
      return response.json();
    });

    return resposeData;
  }

}
