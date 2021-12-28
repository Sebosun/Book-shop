import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { customerData } from "./Checkout";

interface checkoutFormTypes {
  handleOrderConfirm: (data: customerData) => void;
}

export default function CheckoutForm({
  handleOrderConfirm,
}: checkoutFormTypes) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      town: "",
      postcode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Wymagane"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Wymagane"),
      town: Yup.string().required("Wymagane"),
      postcode: Yup.string()
        .matches(/^\d{2}-\d{3}$|^\d{5}$/, "Invalid post code")
        .min(5, "Must be at least 5 digits")
        .max(6, "Must be at most 6 digits"),
    }),
    onSubmit: (values) => {
      handleOrderConfirm(values);
    },
  });

  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Imie</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Nazwisko</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="town">Miasto</label>
      <input
        id="town"
        name="town"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.town}
      />
      {formik.touched.town && formik.errors.town ? (
        <div>{formik.errors.town}</div>
      ) : null}

      <label htmlFor="postcode">Kod pocztowy</label>
      <input
        id="postcode"
        name="postcode"
        type="text"
        inputMode="numeric"
        pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postcode}
      />
      {formik.touched.postcode && formik.errors.postcode ? (
        <div>{formik.errors.postcode}</div>
      ) : null}

      <button className="btn-primary uppercase self-center my-4" type="submit">
        Zamawiam i place
      </button>
    </form>
  );
}
