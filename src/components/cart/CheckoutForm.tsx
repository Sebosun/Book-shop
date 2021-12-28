import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CheckoutForm() {
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
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      town: Yup.string().required("Required"),
      postcode: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postcode}
      />
      {formik.touched.postcode && formik.errors.postcode ? (
        <div>{formik.errors.postcode}</div>
      ) : null}

      <button className="btn-primary self-center my-4" type="submit">
        Submit
      </button>
    </form>
  );
}
