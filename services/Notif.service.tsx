import { BASE_SERVICE_URL } from '../config';

export default class NotifService {
  constructor() { }

  public async search() {

    const body = { "moduleName": "admin", "orgFilter": { "onlyOrgSearch": false, "orgList": [], "directOrgAssociation": true }, "startRowIndex": 1, "searchName": "NotifMsgPopover", "selectList": ["Pk", "MgrId", "VerNumber", "Resource.Description", "ImmediateNotif", "dateCreated", "Priority", "NotifInfo", "Unread", "Custom"], "sortTermList": [{ "descending": true, "fullName": "Pk" }], "resultLimit": 11, "searchTermList": [{ "attribute": { "name": "VirtualMgrId", "value": [11100, 10547, 11702, 10739, 10706, 10732, 11708, 50462] }, "operator": "in" }, { "attribute": { "name": "NotifInfo", "value": "null" }, "operator": "isNotNull" }] };
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


  public async unReadFlagUpdate(uniqueObjIdString?: any, pk?: any) {

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



public async getCLaimDetails(pk ?: any) {

  var body = { "dataObjectPlugins": ["saveUiHistory"], "moduleName": "sales", "acquireLock": false, "requestModel": { "attributes": ["ClaimStatus", "errorCount", "fatalCount", "totalCount", "submissionCount", "Payee.MemberName", "Payee.GroupFullname", "PayeeAddress", "ClaimNum", "LineCount", "TotalDistrRebateAmount", "TotalApprRebateAmount", "TotalDiscrepancyAmount", "DiscrepancyPercentage", "PaymentMethod", "PaymentDocId", "PaymentRequestedDate", "PaidDate", "PaymentAmount", "Currency", "ReversalDate", "ReversalId", "ReversalAmount", "Owner.MemberName", "DebitMemoId", "DateCreated", "DateUpdated", "OrgUnit.DisplayName", "PublishFlag", "PurgeImpacted", "IsSubmissionStatusPendingClose"], "relsOneToOne": [{ "attributes": ["RefId", "ChargebackClaimId"], "relName": "SalesSubmission", "relsOneToOne": [{ "attributes": ["ClaimNum"], "relName": "ChargebackClaim" }], "objectType": "SalesSubmission" }, { "attributes": ["PrintableName"], "relName": "MemberUpdated" }, { "attributes": ["PrintableName"], "relName": "MemberCreated" }, { "attributes": ["PrintableName"], "relName": "AdjustedBy" }], "relsOneToN": [{ "attributes": ["CreatedBy", "Comments", "DateCreated", "CommentType", "DateUpdated", "MemberName", "MgrId", "CommentPk", "CollabId", "TaskIdNum", "LineRefNum", "collaborator"], "relName": "SaleLineComment" }, { "attributes": ["DocName", "DocLength", "DocDescription", "DateCreated"], "relName": "DocStore" }, { "attributes": ["status", "validCount", "errorCount", "fatalCount", "warningCount", "totalCount", "submissionCount", "acceptLinesCount", "rejectedLinesCount"], "relName": "FetchLineStat" }, { "attributes": ["Comment", "DateCreated", "CommentType"], "relName": "ClaimComment", "relsOneToOne": [{ "attributes": ["PrintableName", "MemberName"], "relName": "MemberCreated" }] }] } };
  const resposeData = await fetch(BASE_SERVICE_URL + "/rest/data/DistRebatesClaim/769", {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then((response: any) => {
    console.log(response.headers);
    return response.json();
  });

  return resposeData;
}