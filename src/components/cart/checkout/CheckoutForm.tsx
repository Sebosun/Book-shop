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
      first_name: "",
      last_name: "",
      city: "",
      zip_code: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(4, "Imie musi byc dluzsze niz 4 litery")
        .max(15, "Imie nie moze byc dluzsze niz 15 znakow")
        .required("Wymagane"),
      last_name: Yup.string()
        .min(5, "nazwisko musi miec przynajmniej 5 znakow")
        .max(25, "Nazwisko nie moze byc dluzsze niz 25 znakow")
        .required("Wymagane"),
      city: Yup.string()
        .required("Wymagane")
        .min(3, "Nazwa miejscowosci musi miec przynajmniej 3 litery"),
      zip_code: Yup.string()
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
      <label htmlFor="first_name">Imie</label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.first_name}
      />
      {formik.touched.first_name && formik.errors.first_name ? (
        <div>{formik.errors.first_name}</div>
      ) : null}

      <label htmlFor="last_name">Nazwisko</label>
      <input
        id="last_name"
        name="last_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
      />
      {formik.touched.last_name && formik.errors.last_name ? (
        <div>{formik.errors.last_name}</div>
      ) : null}

      <label htmlFor="city">Miasto</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />
      {formik.touched.city && formik.errors.city ? (
        <div>{formik.errors.city}</div>
      ) : null}

      <label htmlFor="zip_code">Kod pocztowy</label>
      <input
        id="zip_code"
        name="zip_code"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.zip_code}
      />
      {formik.touched.zip_code && formik.errors.zip_code ? (
        <div>{formik.errors.zip_code}</div>
      ) : null}

      <button
        className="btn-primary uppercase self-center my-4"
        type="submit"
      ></button>
    </form>
  );
}
