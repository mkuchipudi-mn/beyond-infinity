import { BASE_SERVICE_URL } from '../config';

export default class SearchService {
    constructor() { }

    public async search(obj: string, body: object) {
        body = { "moduleName": "mco", "orgFilter": { "onlyOrgSearch": false, "orgList": [], "directOrgAssociation": true }, "startRowIndex": 1, "searchName": "Formulary", "selectList": ["Pk", "MgrId", "VerNumber", "ExtFormularyId", "FormularyName", "Pbm.MemberName", "Pbm.GroupFullname", "EffectiveStartDate", "EffectiveEndDate", "LifecycleStatus", "WasFormularyPublished"], "sortTermList": [], "resultLimit": 11, "searchTermList": [{ "operator": "startsWith", "attribute": { "name": "FormularyName", "value": "pavan" } }] };
        /* const resposeData = await fetch(BASE_SERVICE_URL + '/rest/data/Formulary/search', {
             //const resposeData = await fetch(BASE_SERVICE_URL + '/rest/data/' + obj + '/search', {
             method: 'post',
             body: JSON.stringify(body),
             headers: { 'Content-Type': 'application/json' },
         }).then((response: any) => {
             console.log(response.headers);
             return response.json();
         });*/
        //const resposeData = { "data": [[{ "name": "objectIdentifier", "value": { "objectType": "CFStrategy", "mgrId": 10960, "verNum": 62921, "dateUpdated": 1640489574198, "uniqueObjIdString": "10960-881", "pk": 881 }, "type": null }, { "name": "CalcObjId", "value": "100120", "type": "STRING" }, { "name": "Name", "value": "demo", "type": "STRING" }, { "name": "CalcObjStatus", "value": { "name": "DRAFT", "className": "com.modeln.bp.cf.impl.enums.CMnCFCalcObjStatus", "displayName": "Draft", "code": 10 }, "type": "ENUM" }, { "name": "Type", "value": "FFSMulti-Tier", "type": "STRING" }, { "name": "ModuleType", "value": { "name": "INCENTV", "className": "com.modeln.bp.cf.module.CMnCFModuleType", "displayName": "Incentives", "code": 1 }, "type": "ENUM" }, { "name": "OrgUnit.DisplayName", "value": "Root Organization", "type": "STRING" }, { "name": "Description", "value": "FFSMulti-Tier Strategy Type", "type": "STRING" }]] };
        const resposeData = {
            "data": [[{ "name": "objectIdentifier", "value": { "objectType": "CFStrategy", "mgrId": 10960, "verNum": 62921, "dateUpdated": 1640489574198, "uniqueObjIdString": "10960-881", "pk": 881 }, "type": null }, { "name": "CalcObjId", "value": "100120", "type": "STRING" }, { "name": "Name", "value": "demo", "type": "STRING" }, { "name": "CalcObjStatus", "value": { "name": "DRAFT", "className": "com.modeln.bp.cf.impl.enums.CMnCFCalcObjStatus", "displayName": "Draft", "code": 10 }, "type": "ENUM" }, { "name": "Type", "value": "FFSMulti-Tier", "type": "STRING" }, { "name": "ModuleType", "value": { "name": "INCENTV", "className": "com.modeln.bp.cf.module.CMnCFModuleType", "displayName": "Incentives", "code": 1 }, "type": "ENUM" }, { "name": "OrgUnit.DisplayName", "value": "Root Organization", "type": "STRING" }, { "name": "Description", "value": "FFSMulti-Tier Strategy Type", "type": "STRING" }],
            [{ "name": "objectIdentifier", "value": { "objectType": "CFStrategy", "mgrId": 10960, "verNum": 62921, "dateUpdated": 1640489574198, "uniqueObjIdString": "10960-881", "pk": 881 }, "type": null }, { "name": "CalcObjId", "value": "100120", "type": "STRING" }, { "name": "Name", "value": "demo123", "type": "STRING" }, { "name": "CalcObjStatus", "value": { "name": "DRAFT", "className": "com.modeln.bp.cf.impl.enums.CMnCFCalcObjStatus", "displayName": "Draft", "code": 10 }, "type": "ENUM" }, { "name": "Type", "value": "FFSMulti-Tier", "type": "STRING" }, { "name": "ModuleType", "value": { "name": "INCENTV", "className": "com.modeln.bp.cf.module.CMnCFModuleType", "displayName": "Incentives", "code": 1 }, "type": "ENUM" }, { "name": "OrgUnit.DisplayName", "value": "Root Organization", "type": "STRING" }, { "name": "Description", "value": "FFSMulti-Tier Strategy Type", "type": "STRING" }]
            ]
        };
        return resposeData;
    }
}