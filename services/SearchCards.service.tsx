import { BASE_SERVICE_URL } from '../config';

export default class SearchCardsService {
  constructor() {}

  public async getSearchCards() {
    const body = {
      resultLimit: 15,
      searchName: 'SalesPersistedSearch',
      moduleName: 'admin',
      selectList: ['SearchXML', 'UserModel', 'Name', 'SavedFromFolder', 'TYPE'],
      searchTermList: [],
      sortTermList: [],
      includeRowCount: true,
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
