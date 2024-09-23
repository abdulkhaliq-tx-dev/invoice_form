import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import InvoiceHeader from "./InvoiceHeader";
import TrashIcon from "../assets/trash-2.svg"

// Validation schema using Yup

const validationSchema = Yup.object({
  billFrom: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postal: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  }),
  billTo: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postal: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  }),
  date: Yup.string().required("Required"),
  paymentTerms: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  items: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Required"),
      quantity: Yup.number().required("Required").min(1),
      price: Yup.number().required("Required").min(0),
    })
  ),
});
// Initial values for the form
const initialValues = {
  billFrom: {
    name: "",
    email: "",
    postal: "",
    address: "",
    city: "",
    country: "",
  },
  billTo: {
    name: "",
    email: "",
    postal: "",
    address: "",
    city: "",
    country: "",
  },
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
    <div className="container mx-auto 4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm }) => (
          <Form className="flex flex-col gap-10">
            <InvoiceHeader resetForm={resetForm} />
            <div className="grid grid-cols-2  gap-6">
              <div className=" w-full border border-[#D0D5DD] rounded-3xl p-6 flex flex-col gap-8">
                <h3 className="text-[#101828] text-2xl font-semibold">
                  Bill From
                </h3>
                <div className="billFrom-section flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billFrom.name"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Company Name
                      </label>
                      <Field
                        name="billFrom.name"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billFrom.name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billFrom.email"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Company Email
                      </label>
                      <Field
                        name="billFrom.email"
                        type="email"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billFrom.email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billFrom.country"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Country
                      </label>
                      <Field
                        name="billFrom.country"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billFrom.country"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billFrom.city"
                        className="text-[#344054] font-medium text-sm"
                      >
                        City
                      </label>
                      <Field
                        name="billFrom.city"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billFrom.city"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billFrom.postal"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Postal Code
                      </label>
                      <Field
                        name="billFrom.postal"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billFrom.postal"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>{" "}
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billFrom.address"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Street Address
                      </label>
                      <Field
                        name="billFrom.address"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billFrom.address"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-[#101828] text-2xl font-semibold">
                  Bill To
                </h3>
                <div className="billTo-section flex flex-col gap-4">
                  {/* Bill To Section */}
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billTo.name"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Bill To Name
                      </label>
                      <Field
                        name="billTo.name"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <ErrorMessage
                        name="billTo.name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billTo.email"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Bill To Email
                      </label>
                      <Field
                        name="billTo.email"
                        type="email"
                        className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <ErrorMessage
                        name="billTo.email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billTo.country"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Country
                      </label>
                      <Field
                        name="billTo.country"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billTo.country"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billTo.city"
                        className="text-[#344054] font-medium text-sm"
                      >
                        City
                      </label>
                      <Field
                        name="billTo.city"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billTo.city"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billTo.postal"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Postal Code
                      </label>
                      <Field
                        name="billTo.postal"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billTo.postal"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>{" "}
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <label
                        htmlFor="billTo.address"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Street Address
                      </label>
                      <Field
                        name="billTo.address"
                        type="text"
                        className=" block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        name="billTo.address"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="invoice-date flex gap-4">
                  {/* Invoice Date */}
                  <div className="flex flex-col w-full gap-1.5">
                    <label
                      htmlFor="date"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Invoice Date
                    </label>
                    <Field
                      name="date"
                      type="date"
                      className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {/* Payment Terms */}
                  <div className="flex flex-col w-full gap-1.5">
                    <label
                      htmlFor="paymentTerms"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Payment Terms
                    </label>
                    <Field
                      as="select"
                      name="paymentTerms"
                      className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                </div>
                {/* Description */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="description"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Project Description
                  </label>
                  <Field
                    as="text"
                    name="description"
                    className="  block w-full p-4 border border-gray-300 rounded-md "
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
                        <div key={index} className=" ">
                          <h4 className="text-lg font-bold ">Items List</h4>
                          <div className="grid grid-cols-5 gap-3">
                            <div className="col-span-2 ">
                              <label
                                htmlFor={`items.${index}.name`}
                                className="text-[#344054] font-medium text-sm"
                              >
                                Item Name
                              </label>
                              <Field
                                name={`items.${index}.name`}
                                type="text"
                                className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <ErrorMessage
                                name={`items.${index}.name`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div className="col-span-1 ">
                              <label
                                htmlFor={`items.${index}.quantity`}
                                className="text-[#344054] font-medium text-sm"
                              >
                                Qty.
                              </label>
                              <Field
                                name={`items.${index}.quantity`}
                                type="number"
                                className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <ErrorMessage
                                name={`items.${index}.quantity`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div className="col-span-1  ">
                              <label
                                htmlFor={`items.${index}.price`}
                                className="text-[#344054] font-medium text-sm"
                              >
                                Price
                              </label>
                              <Field
                                name={`items.${index}.price`}
                                type="number"
                                className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <ErrorMessage
                                name={`items.${index}.price`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            {/* Total */}
                            <div className="col-span-1  ">
                              <label>Total</label>
                              <div className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                {/* Calculate total for each item by multiplying quantity and price */}
                                {(
                                  values.items[index].quantity *
                                  values.items[index].price
                                ).toFixed(2)}
                              </div>
                            </div>
                            <div className="col-span-1  ">
                            <button
                            type="button"
                            className="text-red-600 mt-8 "
                            onClick={() => remove(index)}
                          >
                            <img src={TrashIcon} alt="" />
                          </button>
                            </div>
                          </div>
                         
                        </div>
                      ))}
                      <button
                        type="button"
                        className=" text-indigo-600"
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
              <div className="">sdnkvnslkdmskndvlknj</div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
