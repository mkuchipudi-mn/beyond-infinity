import { BASE_SERVICE_URL } from '../config';

export default class SearchCardsService {
  constructor() {}

  public async getSearchCards() {
    const body = {
      moduleName: 'admin',
      orgFilter: {
        directOrgAssociation: true,
        onlyOrgSearch: false,
        orgList: [],
      },
      startRowIndex: '0',
      select: [
        'UserModel',
        'SearchXML',
        'ManagedSearch',
        'LinkToHomepage',
        'SearchCard',
        'DateUpdated',
        'RefreshCardDate',
      ],
      searchTermList: [
        {
          attribute: {
            name: 'SavedFromFolder',
            value: 'IndirectSaleOpen',
          },
          operator: 'eq',
        },
      ],
      resultLimit: 100,
      sortTermList: [
        {
          fullName: 'priorityOrder',
          descending: 'false',
        },
      ],
      searchName: 'PersistedSearch',
    };
    const responseData = await fetch(BASE_SERVICE_URL + '/rest/data/PersistedSearch/search', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      console.log(response.headers);
      return response.json();
    });

    return responseData;
  }
}
