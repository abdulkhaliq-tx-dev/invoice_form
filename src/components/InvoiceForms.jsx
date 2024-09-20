import React from "react";
import TrashIcon from "../assets/trash-2.svg";
import { useFormik } from "formik";
import { InvoiceValidation } from "./InvoiceValidation";
// import { object, string, number, date, InferType } from 'yup';

export default function InvoiceForms() {
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
    items: {
      name: "",
      quantity: "",
      price: "",
      total: "",
    },
  };

  const { values, handleChange, handleSubmit, handleBlur, errors } = useFormik({
    initialValues,
    validationSchema: InvoiceValidation,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center jutify-center gap-6"
      >
        <div className="flex-1 ">
          <div className="w-full h-[1076px] border border-[#D0D5DD] rounded-3xl p-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#101828] text-2xl font-semibold">
                Bill From
              </h3>
              <div className="flex flex-col gap-4">
                <div className=" company-info flex gap-4">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-[306px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billFrom.name}
                      name="billFrom.name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Company Email
                    </label>
                    <input
                      type="email"
                      className="w-[306px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billFrom.email}
                      name="billFrom.email"
                    />
                    {errors.billFrom.email && <small>{errors.billFrom.email}</small>}
                  </div>
                </div>
                <div className="loaction-info flex gap-4">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-[202.5px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billFrom.country}
                      name="billFrom.country"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="w-[202.5px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billFrom.city}
                      name="billFrom.city"
                    />
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Postal Code
                    </label>
                    <input
                      type="number"
                      className="w-[191px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billFrom.postal}
                      name="billFrom.postal"
                    />
                  </div>
                </div>
                <div className="address">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-[628px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billFrom.address}
                      name="billFrom.address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#101828] text-2xl font-semibold">Bill To</h3>
              <div className="flex flex-col gap-4">
                <div className=" company-info flex gap-4">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Client Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Client's Name
                    </label>
                    <input
                      type="text"
                      className="w-[306px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billTo.name}
                      name="billTo.name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Client Email"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Client's Email
                    </label>
                    <input
                      type="email"
                      className="w-[306px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billTo.email}
                      name="billTo.email"
                    />
                  </div>
                </div>
                <div className="loaction-info flex gap-4">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="country"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-[202.5px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billTo.country}
                      name="billTo.country"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Client City"
                      className="text-[#344054] font-medium text-sm"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="w-[202.5px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billTo.city}
                      name="billTo.city"
                    />
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Postal Code
                    </label>
                    <input
                      type="number"
                      className="w-[191px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      value={values.billTo.postal}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="billTo.postal"
                    />
                  </div>
                </div>
                <div className="address">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Company Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-[628px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.billTo.address}
                      name="billTo.address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" invoice-date flex gap-4">
                <div className="flex flex-col gap-1.5 ">
                  <label
                    htmlFor="invoice date"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Invoice Date
                  </label>
                  {/* calendar input */}
                  {/* date picker */}
                  <input
                    type="date"
                    name="date"
                    className="w-[306px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.date}
                  />
                </div>
                <div className="flex flex-col gap-1.5 ">
                  <label
                    htmlFor="Payment Terms"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Payment Terms
                  </label>

                  {/* dropdown to select payment terms*/}
                  {/* dropdown */}
                  <select
                    className="w-[306px] h-[44px] py-2.5 px-3.5 border bg-white border-[#D0D5DD] rounded-lg"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.paymentTerms} // Correct usage here
                    name="paymentTerms"
                  >
                    <option value="" disabled>
                      Select Term
                    </option>

                    <option value="net 10 days">Net 10 Days</option>
                    <option value="net 20 days">Net 20 Days</option>
                    <option value="net 30 days">Net 30 Days</option>
                  </select>
                </div>
              </div>
              <div className="project-description">
                <div className="flex flex-col gap-1.5 ">
                  <label
                    htmlFor="Project Description"
                    className="text-[#344054] font-medium text-sm"
                  >
                    Project Description
                  </label>
                  <input
                    type="text"
                    className="w-[628px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#101828] text-2xl font-semibold">
                Items List
              </h3>
              <div className="flex flex-col gap-4">
                <div className="items-list flex gap-4 items-center">
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Item Name"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Item Name
                    </label>
                    <input
                      type="text"
                      className="w-[210px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.items.name}
                      name="items.name"
                    />
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Quantity"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Qty.
                    </label>
                    <input
                      type="number"
                      className="w-[110px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.items.quantity}
                      name="items.quantity"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Price"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      className="w-[110px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.items.price}
                      name="items.price"
                    />
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 ">
                    <label
                      htmlFor="Total"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Total
                    </label>
                    <input
                      type="number"
                      className="w-[110px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.items.total}
                      name="items.total"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 my-auto justify-center">
                    <img src={TrashIcon} alt="" />
                  </div>
                </div>
                <div className="add-items-btn">
                  <button className="w-[628px] h-[44px] text-white bg-[#7F56D9] border-none rounded-lg">
                    + Add New Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-[1076px]  rounded-3xl p-6 flex flex-col gap-8 bg-[#F5F5F5]">
            <h2 className="text-[#101828] text-2xl font-semibold">Preview</h2>
            <div className="preview-invoice flex flex-col gap-8      rounded-2xl bg-white drop-shadow-2xl p-6">
              <h4 className="font-semibold text-lg text-[#101828] border-b border-b-[#EAECF0] h-[47px]">
                New Invoice
              </h4>
              <div className=" flex items-center gap-4 ">
                <div className="flex flex-col gap-4 w-6/12">
                  <label
                    htmlFor="invoice date"
                    className="text-[#76787D] text-base font-normal"
                  >
                    Invoice Date
                  </label>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.date}
                  </h4>
                </div>{" "}
                <div className="flex flex-col gap-4 w-6/12 ">
                  <label
                    htmlFor="invoice date"
                    className="text-[#76787D] text-base font-normal"
                  >
                    Payment Terms
                  </label>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.paymentTerms}
                  </h4>
                </div>
              </div>{" "}
              <div className=" flex items-center gap-4 ">
                <div className="flex flex-col gap-4 w-6/12">
                  <label
                    htmlFor="invoice date"
                    className="text-[#76787D] text-base font-normal"
                  >
                    Bill From
                  </label>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billFrom.name}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billFrom.email}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billFrom.address}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billFrom.city}, {values.billFrom.postal}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billFrom.country}
                  </h4>
                </div>{" "}
                <div className="flex flex-col gap-4 w-6/12 ">
                  <label
                    htmlFor="invoice date"
                    className="text-[#76787D] text-base font-normal"
                  >
                    Bill To
                  </label>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billTo.name}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billTo.email}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billTo.address}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billTo.city}, {values.billTo.postal}
                  </h4>
                  <h4 className="font-medium text-base text-[#101828]">
                    {values.billTo.country}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="invoice date"
                  className="text-[#76787D] text-base font-normal"
                >
                  Project Description
                </label>
                <h4 className="font-medium text-base text-[#101828]">
                  {values.description}
                </h4>

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

                  <tbody className="">
                    <tr>
                      <td className="p-2 text-[#101828] text-start test-base font-medium">
                        {values.items.name}
                      </td>
                      <td className="p-2 text-[#101828] text-start test-base font-medium">
                        {values.items.quantity}
                      </td>
                      <td className="p-2 text-[#101828] text-start test-base font-medium">
                        {values.items.price}
                      </td>
                      <td className="p-2 text-[#101828] text-end test-base   font-medium">
                        {values.items.total}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
              </div>
              <div className="flex flex-col gap-4 items-end w-full ">
                <div className="flex justify-between items-center w-6/12 ">
                  <h4 className="text-base font-semibold">Subtotal</h4>
                  <h4 className="text-base font-semibold">
                    {" "}
                    $<span className="ml-2">4:00</span>
                  </h4>
                </div>
                <div className="flex justify-between items-center w-6/12 ">
                  <h4 className="text-base font-semibold">Tax</h4>
                  <h4 className="text-base font-semibold">10%</h4>
                </div>
                <div className="flex justify-between items-center w-6/12 ">
                  <h4 className="text-xl font-semibold">Total</h4>
                  <h4 className="text-xl font-semibold">
                    {" "}
                    $<span className="ml-2">4:00</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
