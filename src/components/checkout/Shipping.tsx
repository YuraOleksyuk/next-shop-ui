'use client'

import {FormEvent, useEffect, useState} from "react";
import {
  getCitiesByName,
  formatCityName,
  getWarehouseByCityId
} from "@/utils/np-delivery";
import AsyncSelect from "react-select/async";
import Select, {SingleValue} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {
  decrementCurrentCheckoutStep,
  incrementCurrentCheckoutStep,
  setShippingData,
  setCurrentCheckoutStep, setAccountData, SUCCESS_PAGE_TIMEOUT
} from "@/store/slices/checkoutSlice";
import {RootState} from "@/store";
import {createOrder} from "@/utils/api";
import {clearShoppingCart} from "@/store/slices/shoppingCartSlice";

const Shipping = () => {
  const dispatch = useDispatch()
  const [selectedCityValue, setSelectedCityValue] = useState<City | null>(null)
  const [warehouses, setWarehouses] = useState<Warehouse[]>([])
  const [selectedWarehouseValue, setSelectedWarehouseValue] = useState<Warehouse | null>(null)
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null)
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [shippingData, accountData, shoppingCart] = useSelector((state: RootState) => {
    return [state.checkout.shippingData, state.checkout.accountData, state.shoppingCart]
  });

  useEffect(() => {
    setSelectedCityValue(shippingData.city);
    setSelectedWarehouseValue(shippingData.warehouse);
  }, []);

  console.log('render >')

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
    setFormSubmitted(true);

    dispatch(setShippingData({
      city: selectedCityValue,
      warehouse: selectedWarehouseValue
    }))

    const order: Order = {
      accountData: accountData,
      shippingData: shippingData,
      shoppingCart: shoppingCart
    }

    createOrder(order).then((data) => {
      setFormSubmitted(false);

      // Clear shopping cart (LS, Redux)
      // Clear shipping information (LS and Redux)
      dispatch(setShippingData(shippingData));
      dispatch(setAccountData(accountData));

      dispatch(incrementCurrentCheckoutStep());

      setTimeout(() => {
        dispatch(clearShoppingCart());
        dispatch(setCurrentCheckoutStep(0));
      }, SUCCESS_PAGE_TIMEOUT);
    });

    // dispatch(incrementCurrentCheckoutStep())
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
          <button className={`cd-btn cd-btn--primary ${isFormSubmitted ?? 'cd-btn--loading'}`}
                  type="submit">Complete Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default Shipping
