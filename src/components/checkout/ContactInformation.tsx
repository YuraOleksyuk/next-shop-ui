'use client'

import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {
  incrementCurrentCheckoutStep,
  setAccountData
} from "@/store/slices/checkoutSlice";
import Link from "next/link";
import {RootState} from "@/store";
import PhoneInput, { isValidPhoneNumber, isPossiblePhoneNumber } from "react-phone-number-input";

const ContactInformation = () => {
  const dispatch = useDispatch();

  const accountData = useSelector((state: RootState) => {
    return state.checkout.accountData
  });

  const {
    control,
    register,
    handleSubmit,
    formState: {errors, isDirty, isValid},
  } = useForm({
    values: accountData
  });

  const handleFormSubmit = handleSubmit((data) => {
    dispatch(setAccountData(data))
    dispatch(incrementCurrentCheckoutStep())
  })

  return (
    <div className="auth-user">
      <h2 className="text--md text--mb-30">Account details</h2>
      <form onSubmit={handleFormSubmit} action="#" className="form">
        <div className="form__main">
          <div className="form__group">
            <label htmlFor="phone">Phone</label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
                validate: (value) => isPossiblePhoneNumber(value)
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  country="UA"
                  defaultCountry="UA"
                  value={value}
                  name="phone"
                  international={false}
                  countryCallingCodeEditable={false}
                  aria-invalid={errors.phone ? "true" : "false"}
                  onChange={onChange}
                  smartCaret={true}
                />
              )}
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email address</label>
            <input
              {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                }
              )}
              type="email"
              id="email"
              autoComplete="on"
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>
          <div className="form__row form__row--50">
            <div className="form__group">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", {required: "First name is required"})}
                type="text"
                id="firstName"
                autoComplete="on"
                aria-invalid={errors.firstName ? "true" : "false"}
              />
            </div>
            <div className="form__group">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {required: "Last name is required"})}
                type="text"
                id="lastName"
                autoComplete="on"
                aria-invalid={errors.lastName ? "true" : "false"}
              />
            </div>
          </div>
        </div>

        <div className="form__actions">
          <Link href="/" className="cd-btn">Cancel</Link>
          <button
            className="cd-btn cd-btn--primary"
            type="submit"
          >Shipping details
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactInformation
