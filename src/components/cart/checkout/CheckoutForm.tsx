import { error } from "console";
import { useFormik } from "formik";
import * as Yup from "yup";
import { customerData } from "../../../models/customerData";

interface checkoutFormTypes {
  handleOrderConfirm: (data: customerData) => void;
}

const errorStyles = `text-red-600 leading-7`;

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
        .min(4, "Imie musi miec przynajmniej 4 znaki")
        .max(15, "Imie nie moze byc dluzsze niz 15 znakow")
        .required("Wymagane"),
      last_name: Yup.string()
        .min(5, "Nazwisko musi miec przynajmniej 5 znakow")
        .max(25, "Nazwisko nie moze byc dluzsze niz 25 znakow")
        .required("Wymagane"),
      city: Yup.string()
        .required("Wymagane")
        .min(3, "Nazwa miejscowosci musi posiadac przynajmniej 3 znaki"),
      zip_code: Yup.string()
        .matches(/^\d{2}-\d{3}$|^\d{5}$/, "Nieprawidlowy kod pocztowy")
        .min(5, "Nieprawidlowy kod pocztowy")
        .max(6, "Nieprawidlowy kod pocztowy")
        .required("Wymagane"),
    }),
    onSubmit: (values) => {
      if (values.zip_code.length === 5) {
        const copy = { ...values };
        let transformZipCode = copy["zip_code"].split("");

        // can't join these functions once after another, since splice doesnt actually return the array
        transformZipCode.splice(2, 0, "-");
        handleOrderConfirm({ ...values, zip_code: transformZipCode.join("") });
      } else {
        handleOrderConfirm(values);
      }
    },
  });

  return (
    <form
      className="flex grow-0 flex-col p-6 border-2 border-solid shadow-md rounded-md text-lg md:text-xl text-left gap-2 border-gray-300"
      onSubmit={formik.handleSubmit}
    >
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
        <div className={errorStyles}>{formik.errors.first_name}</div>
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
        <div className={errorStyles}>{formik.errors.last_name}</div>
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
        <div className={errorStyles}>{formik.errors.city}</div>
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
        <div className={errorStyles}>{formik.errors.zip_code}</div>
      ) : null}

      <button
        className={`${
          formik.isValid ? "btn-primary" : "btn-disabled"
        } w-full md:w-auto mt-20 uppercase self-center my-4`}
        disabled={!formik.isValid}
        type="submit"
      >
        ZAMAWIAM I PŁACĘ
      </button>
    </form>
  );
}
