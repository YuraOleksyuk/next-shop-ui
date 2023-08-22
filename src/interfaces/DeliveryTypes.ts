interface City {
    Ref: string,
    SettlementType: string,
    Latitude: string,
    Longitude: string,
    Description: string,
    DescriptionTranslit: string,
    SettlementTypeDescription: string,
    SettlementTypeDescriptionTranslit: string,
    Region: string,
    RegionsDescription: string,
    AreaDescription: string,
}

interface Warehouse {
    WarehouseIndex: string,
    Description: string,
    Delivery: object,
    Latitude: string,
    Longitude: string
}

type ShippingData = {
  city: City | null,
  warehouse: Warehouse | null
}
