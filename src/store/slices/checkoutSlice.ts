import {createSlice} from "@reduxjs/toolkit";

export const SUCCESS_PAGE_TIMEOUT = 5000;
export const shippingData: ShippingData = {
  city: null,
  warehouse: null
}

export const accountData: AccountData = {
  phone: '',
  email: '',
  firstName: '',
  lastName: ''
};

const initialState: any = {
  currentCheckoutStep: 0,
  checkoutSteps: [
    {
      id: 'account',
      title: 'Account',
    },
    {
      id: 'shipping',
      title: 'Shipping',
    },
    /*{
      id: 'payment',
      title: 'Payment',
    },*/
  ],
  accountData,
  shippingData,
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    incrementCurrentCheckoutStep(state) {
      state.currentCheckoutStep = state.currentCheckoutStep + 1
    },
    decrementCurrentCheckoutStep(state) {
      state.currentCheckoutStep = state.currentCheckoutStep - 1
    },
    setCurrentCheckoutStep(state, action) {
      state.currentCheckoutStep = action.payload
    },
    setCheckout(state, action) {
      return {...state, ...action.payload}
    },
    setAccountData(state, action) {
      state.accountData = action.payload
    },
    setShippingData(state, {payload}: { payload: ShippingData }) {
      state.shippingData = payload
    },
  }
})

export default checkoutSlice.reducer

export const {
  incrementCurrentCheckoutStep,
  decrementCurrentCheckoutStep,
  setCurrentCheckoutStep,
  setCheckout,
  setAccountData,
  setShippingData
} = checkoutSlice.actions
