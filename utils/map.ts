export const mapSearchCard = (response: any) => {
  return response.map((item: any) => {
    const searchXML = item.find((item: any) => item.name === 'SearchXML');
    const result = JSON.parse(searchXML.value);
    return {
      title: result.name,
      content: result.amount,
      lines: result.lines,
    };
  });
};

export const mapNotifications = (data: any) => {
  const result: any = [];
  data.forEach((item: any, index: number) => {
    if (item) {
      const childResult: any = {};
      item.forEach((child: any) => {
        childResult[`${child['name']}`] = child['value'];
      });
      result.push(mapNotification(childResult, index));
    }
  });
  return result;
};

export const mapNotification = (item: any, index: number) => {
  return {
    key: `${index}`,
    title: item['Resource.Description'] + ' for ' + JSON.parse(item['NotifInfo']).idAttrPath,
    details: item['dateCreated'].date,
    unread: item['Unread'],
    objectIdentifier: item['objectIdentifier'].uniqueObjIdString,
    pk: item['objectIdentifier'].pk,
    claimPk: JSON.parse(item['NotifInfo']).objectIdentifier.pk,
  };
};

export const mapDummyNotifications = () => {
  return [
    {
      key: 1,
      title: 'text',
      details: 'text',
      unread: true,
      objectIdentifier: 12345,
      pk: 123,
    },
  ];
};

export const mapClaimDetails = (response: any) => {
  const displayfields = require('../config/resources/Notifications/DetailsPage/index.json')
  const attributes = response.attributes.map((attribute: any) => {
    return {
      label: attribute.name,
      value: attribute.type == 'MONEY' ? '$' + (attribute.value.money < 0 ? `(${-1 * attribute.value.money})` : attribute.value.money) : (attribute.type == 'ENUM' ? attribute.value.displayName : attribute.value),
    };
  });
  return displayfields.map((item: any) => {
    return {
      label: item.name,
      value: attributes.find(obj => obj.label === item.field).value,
    };
  })

};
