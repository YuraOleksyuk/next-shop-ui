import {useState} from "react";
import {getCitiesByName, formatCityName, getWarehouseByCityId} from "@/utils/np-delivery";
import AsyncSelect from "react-select/async";
import Select, {SingleValue} from "react-select";

const Shipping = () => {
    const [selectedCityValue, setSelectedCityValue] = useState<City | null>(null)
    const [warehouses, setWarehouses] = useState<Warehouse[]>([])
    const [selectedWarehouseValue, setSelectedWarehouseValue] = useState<Warehouse | null>(null)

    const loadOptions = async (inputValue: string): Promise<City[]> => {
        return await getCitiesByName(inputValue)
    };
    
    const handleCityChange = (value: SingleValue<City>) => {
        setSelectedCityValue(value)
        setWarehouses([])
        setSelectedWarehouseValue(null)
        
        if (value && value.Ref) {
            getWarehouseByCityId(value.Ref).then((res) => {
                setWarehouses(res)
            })
        }
    }
    
    const handleWarehouseChange = (warehouse: SingleValue<Warehouse>) => {
        setSelectedWarehouseValue(warehouse)
    }
    
    return (
        <div className="shipping-details">
            <h2 className="text--md text--mb-30">Shipping details</h2>
            <form className="form">
                <div className="form__main">
                    <div className="form__group">
                        <label htmlFor="city">City</label>
                        
                        <AsyncSelect
                            cacheOptions 
                            loadOptions={loadOptions} 
                            getOptionLabel={(e: City) => formatCityName(e)}
                            getOptionValue={(e: City) => e.Ref}
                            value={selectedCityValue}
                            onChange={handleCityChange}
                            noOptionsMessage={({inputValue}) => inputValue ? "No options" : "Please start typing to find city"}
                        />
                        
                    </div>
                    <div className="form__group">
                        <label htmlFor="city">Warehouses</label>
                        <Select
                            isDisabled={!warehouses.length}
                            options={warehouses}
                            value={selectedWarehouseValue}
                            onChange={handleWarehouseChange}
                            getOptionLabel={(e: Warehouse) => e.Description }
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Shipping
