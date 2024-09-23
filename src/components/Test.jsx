import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import InvoiceHeader from "./InvoiceHeader";

// Validation schema using Yup
const validationSchema = Yup.object({
  billFrom: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  }),
  billTo: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  }),
  date: Yup.date().required("Required"),
  paymentTerms: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Required"),
        quantity: Yup.number()
          .required("Required")
          .min(1, "Must be at least 1"),
        price: Yup.number().required("Required").min(1, "Must be at least 1"),
      })
    )
    .required("Must have at least one item"),
});

// Initial values for the form
const initialValues = {
  billFrom: { name: "", email: "" },
  billTo: { name: "", email: "" },
  date: "",
  paymentTerms: "",
  description: "",
  items: [{ name: "", quantity: 1, price: 0 }],
};

// Payment terms options
const paymentTermsOptions = [
  { value: "NET_10_DAYS", label: "Net 10 Days" },
  { value: "NET_20_DAYS", label: "Net 20 Days" },
  { value: "NET_30_DAYS", label: "Net 30 Days" },
];

// Main component
const InvoiceForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Invoice created successfully!");
    resetForm();
    // store in localstorage
    localStorage.setItem("invoice", JSON.stringify(values));
    // send to backend
  };

  return (
    <div className="container mx-auto mt-24">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm }) => (
          <Form className="flex flex-col gap-10">
            <InvoiceHeader resetForm={resetForm} />
            <div className="flex items-center flex-gap-6">
              <div className="flex-1 h-[1076px] w-full border border-[#D0D5DD] rounded-3xl p-6 flex flex-col gap-8">
                
               <div className="flex gap-4">
               <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="billFrom.name"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Bill From Name
                  </label>
                  <Field
                    name="billFrom.name"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="billFrom.name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="billFrom.email"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Bill From Email
                  </label>
                  <Field
                    name="billFrom.email"
                    type="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="billFrom.email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
               </div>
                {/* Bill To Section */}
                <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="billTo.name"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Bill To Name
                  </label>
                  <Field
                    name="billTo.name"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="billTo.name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="billTo.email"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Bill To Email
                  </label>
                  <Field
                    name="billTo.email"
                    type="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="billTo.email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Invoice Date */}
                <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="date"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Invoice Date
                  </label>
                  <Field
                    name="date"
                    type="date"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Payment Terms */}
                <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="paymentTerms"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Payment Terms
                  </label>
                  <Field
                    as="select"
                    name="paymentTerms"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {paymentTermsOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="paymentTerms"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Description */}
                <div className="flex flex-col gap-1.5">
                  <label
                  
                    htmlFor="description"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Items List */}
                <FieldArray name="items">
                  {({ remove, push }) => (
                    <>
                      {values.items.map((item, index) => (
                        <div key={index} className="mb-4 border p-4 rounded-lg">
                          <h4 className="text-lg font-bold mb-2">
                            Item {index + 1}
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label
                              
                                htmlFor={`items.${index}.name`}
                                className="text-[#344054] font-medium text-sm"
                              >
                                Item Name
                              </label>
                              <Field
                                name={`items.${index}.name`}
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <ErrorMessage
                                name={`items.${index}.name`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div>
                              <label
                              
                                htmlFor={`items.${index}.quantity`}
                                className="text-[#344054] font-medium text-sm"
                              >
                                Quantity
                              </label>
                              <Field
                                name={`items.${index}.quantity`}
                                type="number"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <ErrorMessage
                                name={`items.${index}.quantity`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div>
                              <label
                              
                                htmlFor={`items.${index}.price`}
                                className="text-[#344054] font-medium text-sm"
                              >
                                Price
                              </label>
                              <Field
                                name={`items.${index}.price`}
                                type="number"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <ErrorMessage
                                name={`items.${index}.price`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="text-red-600 mt-2"
                            onClick={() => remove(index)}
                          >
                            Remove Item
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mb-4 text-indigo-600"
                        onClick={() =>
                          push({ name: "", quantity: 1, price: 0 })
                        }
                      >
                        Add Item
                      </button>
                    </>
                  )}
                </FieldArray>
                {/* Total Calculation */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold">
                    Total (after 10% tax deduction):
                  </h3>
                  <p>
                    $
                    {values.items.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    ) * 0.9}
                  </p>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
