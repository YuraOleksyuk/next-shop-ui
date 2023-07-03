import {FormEvent, useState} from "react";
import {
  getCitiesByName,
  formatCityName,
  getWarehouseByCityId
} from "@/utils/np-delivery";
import AsyncSelect from "react-select/async";
import Select, {SingleValue} from "react-select";
import {useDispatch} from "react-redux";
import {
  incrementCurrentCheckoutStep,
  decrementCurrentCheckoutStep,
  setShippingData
} from "@/store/slices/checkoutSlice";

const Shipping = () => {
  const dispatch = useDispatch()
  const [selectedCityValue, setSelectedCityValue] = useState<City | null>(null)
  const [warehouses, setWarehouses] = useState<Warehouse[]>([])
  const [selectedWarehouseValue, setSelectedWarehouseValue] = useState<Warehouse | null>(null)
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null)

  const loadOptions = async (inputValue: string) => {
    return new Promise<City[]>((resolve) => {
      if (timer) {
        clearTimeout(timer)
      }
      let newTimer = setTimeout(() => {
        resolve(getCitiesByName(inputValue))
      }, 500)

      setTimer(newTimer)
    })
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

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setShippingData({
      city: selectedCityValue,
      warehouse: selectedWarehouseValue
    }))

    dispatch(incrementCurrentCheckoutStep())
  }

  const handleGoBackButton = () => {
    dispatch(decrementCurrentCheckoutStep())
  }

  return (
    <div className="shipping-details">
      <h2 className="text--md text--mb-30">Shipping details</h2>
      <form onSubmit={handleFormSubmit}  className="form">
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
              getOptionLabel={(e: Warehouse) => e.Description}
            />
          </div>
        </div>
        <div className="form__actions">
          <button onClick={handleGoBackButton} className="cd-btn">Back to account details</button>
          <button className="cd-btn cd-btn--primary"
                  type="submit">Payment details
          </button>
        </div>
      </form>
    </div>
  )
}

export default Shipping
