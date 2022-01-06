import { BASE_SERVICE_URL } from '../config';

export default class SearchService {
    constructor() { }

    public async search(obj: string, body: object) {
        //body = { "moduleName": "mco", "orgFilter": { "onlyOrgSearch": false, "orgList": [], "directOrgAssociation": true }, "startRowIndex": 1, "searchName": "Formulary", "selectList": ["Pk", "MgrId", "VerNumber", "ExtFormularyId", "FormularyName", "Pbm.MemberName", "Pbm.GroupFullname", "EffectiveStartDate", "EffectiveEndDate", "LifecycleStatus", "WasFormularyPublished"], "sortTermList": [], "resultLimit": 11, "searchTermList": [{ "operator": "startsWith", "attribute": { "name": "FormularyName", "value": "pavan" } }] };
        //const resposeData = await fetch(BASE_SERVICE_URL + '/rest/data/Formulary/search', {
        const resposeData = await fetch(BASE_SERVICE_URL + '/rest/data/' + obj + '/search', {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then((response: any) => {
            console.log(response.headers);
            return response.json();
        });
        return resposeData;
        //const resposeData = { "data": [[{ "name": "objectIdentifier", "value": { "objectType": "CFStrategy", "mgrId": 10960, "verNum": 62921, "dateUpdated": 1640489574198, "uniqueObjIdString": "10960-881", "pk": 881 }, "type": null }, { "name": "CalcObjId", "value": "100120", "type": "STRING" }, { "name": "Name", "value": "demo", "type": "STRING" }, { "name": "CalcObjStatus", "value": { "name": "DRAFT", "className": "com.modeln.bp.cf.impl.enums.CMnCFCalcObjStatus", "displayName": "Draft", "code": 10 }, "type": "ENUM" }, { "name": "Type", "value": "FFSMulti-Tier", "type": "STRING" }, { "name": "ModuleType", "value": { "name": "INCENTV", "className": "com.modeln.bp.cf.module.CMnCFModuleType", "displayName": "Incentives", "code": 1 }, "type": "ENUM" }, { "name": "OrgUnit.DisplayName", "value": "Root Organization", "type": "STRING" }, { "name": "Description", "value": "FFSMulti-Tier Strategy Type", "type": "STRING" }]] };
        /*if (obj === 'Formulary') {
            const resposeData = { "data": [[{ "name": "objectIdentifier", "value": { "objectType": "Formulary", "mgrId": 10163, "verNum": 62942, "dateUpdated": null, "uniqueObjIdString": "10163-1", "pk": 1 }, "type": null }, { "name": "ExtFormularyId", "value": "pavan", "type": "STRING" }, { "name": "FormularyName", "value": "pavan", "type": "STRING" }, { "name": "Pbm.MemberName", "value": "M6_PBM", "type": "STRING" }, { "name": "Pbm.GroupFullname", "value": "M6_PBM_DEMO", "type": "STRING" }, { "name": "EffectiveStartDate", "value": { "date": "2021-12-20T00:00:00", "type": "EVENT_DATE", "timezone": "America/Los_Angeles" }, "type": "EVENT_DATE" }, { "name": "EffectiveEndDate", "value": { "date": "2021-12-21T23:59:59", "type": "EVENT_DATE", "timezone": "America/Los_Angeles" }, "type": "EVENT_DATE" }, { "name": "LifecycleStatus", "value": { "name": "INPROCESS", "className": "com.modeln.bp.mco.utilization.enums.CMnFormularyStatus", "displayName": "In Process", "code": 20 }, "type": "ENUM" }, { "name": "WasFormularyPublished", "value": false, "type": "BOOLEAN" }]] };
            return resposeData;
        }
        else if (obj == 'CFStrategy') {
            const resposeData = {
                "data": [[{ "name": "objectIdentifier", "value": { "objectType": "CFStrategy", "mgrId": 10960, "verNum": 62921, "dateUpdated": 1640489574198, "uniqueObjIdString": "10960-881", "pk": 881 }, "type": null }, { "name": "CalcObjId", "value": "100120", "type": "STRING" }, { "name": "Name", "value": "demo", "type": "STRING" }, { "name": "CalcObjStatus", "value": { "name": "DRAFT", "className": "com.modeln.bp.cf.impl.enums.CMnCFCalcObjStatus", "displayName": "Draft", "code": 10 }, "type": "ENUM" }, { "name": "Type", "value": "FFSMulti-Tier", "type": "STRING" }, { "name": "ModuleType", "value": { "name": "INCENTV", "className": "com.modeln.bp.cf.module.CMnCFModuleType", "displayName": "Incentives", "code": 1 }, "type": "ENUM" }, { "name": "OrgUnit.DisplayName", "value": "Root Organization", "type": "STRING" }, { "name": "Description", "value": "FFSMulti-Tier Strategy Type", "type": "STRING" }],
                [{ "name": "objectIdentifier", "value": { "objectType": "CFStrategy", "mgrId": 10960, "verNum": 62921, "dateUpdated": 1640489574198, "uniqueObjIdString": "10960-881", "pk": 881 }, "type": null }, { "name": "CalcObjId", "value": "100120", "type": "STRING" }, { "name": "Name", "value": "demo123", "type": "STRING" }, { "name": "CalcObjStatus", "value": { "name": "DRAFT", "className": "com.modeln.bp.cf.impl.enums.CMnCFCalcObjStatus", "displayName": "Draft", "code": 10 }, "type": "ENUM" }, { "name": "Type", "value": "FFSMulti-Tier", "type": "STRING" }, { "name": "ModuleType", "value": { "name": "INCENTV", "className": "com.modeln.bp.cf.module.CMnCFModuleType", "displayName": "Incentives", "code": 1 }, "type": "ENUM" }, { "name": "OrgUnit.DisplayName", "value": "Root Organization", "type": "STRING" }, { "name": "Description", "value": "FFSMulti-Tier Strategy Type", "type": "STRING" }]
                ]
            };
            return resposeData;

        }
        else return { "data": [] }; */

    }
}