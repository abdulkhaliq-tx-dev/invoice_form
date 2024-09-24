import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import InvoiceHeader from "./InvoiceHeader";
import TrashIcon from "../assets/trash-2.svg";
import { toast, ToastContainer } from "react-toastify";
import { InvoiceValidation } from "./InvoiceValidation";
import Dropdown from "./Dropdown";
import PaymentDropdown from "./PaymentDropdown";

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
  items: [{ name: "", quantity: "", price: "", total: "" }],
};

const paymentTermsOptions = [
  { value: "Select Term", label: "Select Term" },
  { value: "NET 10 DAYS", label: "Net 10 Days" },
  { value: "NET 20 DAYS", label: "Net 20 Days" },
  { value: "NET 30 DAYS", label: "Net 30 Days" },
];

const InvoiceForms = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("Invoice created successfully!");
    resetForm();
    localStorage.setItem("invoice", JSON.stringify(values));
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={InvoiceValidation}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm, setFieldValue }) => {
          return (
            <Form className="flex flex-col gap-10">
              <InvoiceHeader resetForm={resetForm} />

              <div className="grid grid-cols-2  gap-6">
                <div className=" w-full border  border-[#D0D5DD] rounded-3xl p-6 flex flex-col gap-8">
                  <h3 className="text-[#101828] text-2xl font-semibold">
                    Bill From
                  </h3>
                  <div className="billFrom-section flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billFrom.name"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Company Name
                        </label>
                        <Field
                          name="billFrom.name"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billFrom.name"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billFrom.email"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Company Email
                        </label>
                        <Field
                          name="billFrom.email"
                          type="email"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billFrom.email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billFrom.country"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Country
                        </label>

                        <Dropdown
                          country={values.billFrom.country}
                          handleSelectCountry={(country) =>
                            setFieldValue("billFrom.country", country)
                          }
                          fieldId="billFrom"
                        />
                        <ErrorMessage
                          name="billFrom.country"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billFrom.city"
                          className="text-[#344054] font-medium text-sm"
                        >
                          City
                        </label>
                        <Field
                          name="billFrom.city"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billFrom.city"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billFrom.postal"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Postal Code
                        </label>
                        <Field
                          name="billFrom.postal"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billFrom.postal"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billFrom.address"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Street Address
                        </label>
                        <Field
                          name="billFrom.address"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
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
                    {/* Bill To Fields */}
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billTo.name"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Customer Name
                        </label>
                        <Field
                          name="billTo.name"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billTo.name"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billTo.email"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Customer Email
                        </label>
                        <Field
                          name="billTo.email"
                          type="email"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billTo.email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billTo.country"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Country
                        </label>

                        <Dropdown
                          country={values.billTo.country}
                          handleSelectCountry={(country) =>
                            setFieldValue("billTo.country", country)
                          }
                          fieldId="billTo"
                        />

                        <ErrorMessage
                          name="billTo.country"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billTo.city"
                          className="text-[#344054] font-medium text-sm"
                        >
                          City
                        </label>
                        <Field
                          name="billTo.city"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billTo.city"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billTo.postal"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Postal Code
                        </label>
                        <Field
                          name="billTo.postal"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="billTo.postal"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="billTo.address"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Street Address
                        </label>
                        <Field
                          name="billTo.address"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
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
                    <div className="flex flex-col w-full gap-2">
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
                    <div className="flex flex-col w-full gap-2">
                      <label
                        htmlFor="paymentTerms"
                        className="text-[#344054] font-medium text-sm"
                      >
                        Payment Terms
                      </label>
                      <PaymentDropdown
                        name="paymentTerms"
                        options={paymentTermsOptions}
                        handleSelectPay={(paymentTerms) =>
                          setFieldValue("paymentTerms", paymentTerms)
                        }
                      />

                      <ErrorMessage
                        name="paymentTerms"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="description"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Project Description
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      id="description"
                      className="block w-full p-4 border h-[44px] overflow-y-hidden border-gray-300 rounded-md"
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
                        <div className="flex flex-col gap-3 ">
                          <h4 className="text-lg font-bold ">Items List</h4>
                          {values.items.map((item, index) => (
                            <div key={index} className=" ">
                              <div className="flex gap-2 items-center">
                                <div className="md:w-[210px]   ">
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

                                <div className="md:w-[150px]  ">
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

                                <div className="md:w-[150px]  ">
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
                                <div className="md:w-[150px]  ">
                                  <label>Total</label>
                                  <div className=" block w-full bg-[#F9FAFB] h-[44px] text-[#667085] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    {values.items[index].quantity > 0 &&
                                    values.items[index].price > 0
                                      ? (
                                          values.items[index].quantity *
                                          values.items[index].price
                                        ).toFixed(2)
                                      : ""}
                                  </div>
                                </div>
                                <div className="mt-5 ">
                                  <img
                                    type="button"
                                    src={TrashIcon}
                                    alt="Delete Field"
                                    className="cursor-pointer hover:text-red-500"
                                    onClick={() => remove(index)}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className=" bg-[#7F56D9] p-2 text-white rounded-lg w-full"
                          onClick={() =>
                            push({ name: "", quantity: 1, price: 0 })
                          }
                        >
                          + Add New Item
                        </button>
                      </>
                    )}
                  </FieldArray>
                </div>
                <div className="">
                  <div className="w-full h-[1115px]  rounded-3xl p-6 flex flex-col gap-8 bg-[#F5F5F5]">
                    <h2 className="text-[#101828] text-2xl font-semibold">
                      Preview
                    </h2>
                    <div className="preview-invoice flex flex-col gap-8 rounded-2xl bg-white drop-shadow-2xl p-6">
                      <h4 className="font-semibold text-lg text-[#101828] border-b border-b-[#EAECF0] h-[47px]">
                        New Invoice
                      </h4>

                      {/* Invoice Date and Payment Terms */}
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-4 w-6/12">
                          <label className="text-[#76787D] text-base font-normal">
                            Invoice Date
                          </label>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.date}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-4 w-6/12">
                          <label className="text-[#76787D] text-base font-normal">
                            Payment Terms
                          </label>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.paymentTerms}
                          </h4>
                        </div>
                      </div>

                      {/* Bill From and Bill To */}
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-4 w-6/12">
                          <label className="text-[#76787D] text-base font-normal">
                            Bill From
                          </label>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billFrom.name}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billFrom.email}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billFrom.address}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billFrom.city} {values?.billFrom.postal}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billFrom.country}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-4 w-6/12">
                          <label className="text-[#76787D] text-base font-normal">
                            Bill To
                          </label>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billTo.name}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billTo.email}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billTo.address}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billTo.city} {values?.billTo.postal}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.billTo.country}
                          </h4>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="flex flex-col gap-4">
                        <label className="text-[#76787D] text-base font-normal">
                          Project Description
                        </label>
                        <h4 className="font-medium text-base text-[#101828]">
                          {values?.description}
                        </h4>
                      </div>

                      {/* Items Table */}
                      <table className="table">
                        <thead className="bg-[#f5f5f5] h-[38px] rounded">
                          <tr>
                            <th className="p-2 text-start text-base font-normal text-[#76787D]">
                              Item
                            </th>
                            <th className="p-2 text-start text-base font-normal text-[#76787D]">
                              Qty.
                            </th>
                            <th className="p-2 text-start text-base font-normal text-[#76787D]">
                              Price
                            </th>
                            <th className="p-2 text-base font-normal text-[#76787D] text-end">
                              Total Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {values.items.map((item, index) => (
                            <tr key={index}>
                              <td className="p-2 text-[#101828] text-start text-base font-medium">
                                {item.name}
                              </td>
                              <td className="p-2 text-[#101828] text-start text-base font-medium">
                                {item.quantity}
                              </td>
                              <td className="p-2 text-[#101828] text-start text-base font-medium">
                                {item.price}
                              </td>
                              <td className="p-2 text-[#101828] text-end text-base font-medium">
                                {" "}
                                {values.items[index].quantity > 0 &&
                                values.items[index].price > 0
                                  ? (
                                      values.items[index].quantity *
                                      values.items[index].price
                                    ).toFixed(2)
                                  : ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <hr />

                      {/* Subtotal, Tax, and Total */}
                      <div className="flex flex-col gap-4 items-end w-full">
                        <div className="flex justify-between items-center w-6/12">
                          <h4 className="text-base font-semibold">Subtotal</h4>
                          <h4 className="text-base font-semibold">
                            $
                            <span className="ml-2">
                              {" "}
                              {values.items
                                .reduce(
                                  (acc, item) =>
                                    acc + item.quantity * item.price,
                                  0
                                )
                                .toFixed(2)}
                            </span>
                          </h4>
                        </div>
                        <div className="flex justify-between items-center w-6/12">
                          <h4 className="text-base font-semibold">Tax</h4>
                          <h4 className="text-base font-semibold">10%</h4>
                        </div>
                        <div className="flex justify-between items-center w-6/12">
                          <h4 className="text-xl font-semibold">Total</h4>
                          <h4 className="text-xl font-semibold">
                            $
                            <span className="ml-2">
                              {values.items
                                .reduce(
                                  (acc, item) =>
                                    acc + item.quantity * item.price * 1.1,
                                  0
                                )
                                .toFixed(2)}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default InvoiceForms;
