const apiKey: string = '89f3cb73bf4926af63229e4df685cb78';

export const getCitiesByName = async (cityName: string): Promise<City[]> => {
  const npSettings = {
    apiKey: apiKey,
    modelName: "Address",
    calledMethod: "getSettlements",
    methodProperties: {
      FindByString: cityName,
      Limit: 50,
      Warehouse: 1
    }
  }

  const cities = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    body: JSON.stringify(npSettings)
  });

  const citiesJson = await cities.json();

  return citiesJson.data;
}

export const getWarehouseByCityId = async (cityId: string) => {
  const npSettings = {
    apiKey: apiKey,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      SettlementRef: cityId,
      Limit: 50,
      Language: "ua"
    }
  }

  const warehouses = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    body: JSON.stringify(npSettings)
  });

  const warehousesJson = await warehouses.json();

  return warehousesJson.data;
}

export const formatCityName = (city: City) => {
  return `${city.SettlementTypeDescription.split(' ')
    .map((word: string) => word[0]).join('')}. ${city.Description} (${city.RegionsDescription}, ${city.AreaDescription})`;
}
