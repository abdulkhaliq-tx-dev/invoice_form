import { useEffect, useState } from "react";
import TrashIcon from "../assets/trash-2.svg";
import { useFormik } from "formik";
import { InvoiceValidation } from "./InvoiceValidation";
import InvoiceHeader from "./InvoiceHeader";
import { toast } from "react-toastify";
// import { object, string, number, date, InferType } from 'yup';

export default function InvoiceForms() {
  const [tax, setTax] = useState(10);
  const [total, setTotal] = useState(0);

  const [subTotal, setSubTotal] = useState(0);

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
    items: [
      {
        name: "",
        quantity: "",
        price: "",
        total: "",
      },
    ],
  };

  const { values, handleChange, handleSubmit, handleBlur, errors, resetForm } =
    useFormik({
      initialValues,
      validationSchema: InvoiceValidation,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  const [items, setItems] = useState([initialValues.items]);

  const handleAddItem = () => {
    setItems([...items, { name: "", quantity: "", price: "", total: "" }]);
  };

  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const updatedItems = [...items];

    updatedItems[index] = {
      ...updatedItems[index],
      [name]: value,
      total:
        updatedItems[index].price && updatedItems[index].quantity
          ? (
              parseFloat(updatedItems[index].price) *
              parseFloat(updatedItems[index].quantity)
            ).toFixed(2)
          : "",
    };

    setItems(updatedItems);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  useEffect(() => {
    const calculateSubTotal = () => {
      let subtotal = 0;
      items.forEach((item) => {
        if (item.price && item.quantity) {
          subtotal += parseFloat(item.price) * parseFloat(item.quantity); // Keep subtotal as a number
        }
      });
      return subtotal;
    };

    const calculatedSubTotal = calculateSubTotal();
    setSubTotal(calculatedSubTotal);

    // Calculate tax as a percentage of subtotal
    const taxAmount = (calculatedSubTotal * tax) / 100;
    const calculatedTotal = calculatedSubTotal + taxAmount;

    setTotal(calculatedTotal);
  }, [items, tax]); // Add tax to dependencies

  const handleReset = () => {
    resetForm();
    toast.info("Reset Successfully");
  };
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="invoice-header w-full">
          <InvoiceHeader handleReset={handleReset} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center jutify-center gap-6"
        >
          <button type="submit" className="p-6 bg-purple-500">
            Submit
          </button>

          <div className="flex-1 ">
            <div className="w-full border border-[#D0D5DD] rounded-3xl p-6 flex flex-col gap-8">
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
                                           {errors.billFrom?.name && <small className="text-red-500">{errors.billFrom.name}</small>}

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
                     {errors.billFrom?.email && <small className="text-red-500">{errors.billFrom.email}</small>}
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
                                           {errors.billFrom?.country && <small className="text-red-500">{errors.billFrom.country}</small>}

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
                                           {errors.billFrom?.city && <small className="text-red-500">{errors.billFrom.city}</small>}

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
                                           {errors.billFrom?.postal && <small className="text-red-500">{errors.billFrom.postal}</small>}

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
                                           {errors.billFrom?.address && <small className="text-red-500">{errors.billFrom.address}</small>}

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#101828] text-2xl font-semibold">
                  Bill To
                </h3>
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
                                           {errors.billTo?.name && <small className="text-red-500">{errors.billTo.name}</small>}

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
                                                                 {errors.billTo?.email && <small className="text-red-500">{errors.billTo.email}</small>}

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
                                                                 {errors.billTo?.country && <small className="text-red-500">{errors.billTo.country}</small>}

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
                                                                 {errors.billTo?.city && <small className="text-red-500">{errors.billTo.city}</small>}

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
                                                                 {errors.billTo?.postal && <small className="text-red-500">{errors.billTo.postal}</small>}

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
                      {errors.billTo?.address && <small className="text-red-500">{errors.billTo.address}</small>}
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
                    {errors.date && <small className="text-red-500">{errors.date}</small>}
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
                    {errors.paymentTerms && <small className="text-red-500">{errors.paymentTerms}</small>}
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
                    {errors.description && <small className="text-red-500">{errors.description}</small>}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#101828] text-2xl font-semibold">
                  Items List
                </h3>
                <div className="flex flex-col gap-4">
                 {items.map((item, index) => (
                  <div key={index} className="items-list flex gap-4 items-center">
                    {/* Item Name */}
                    <div className="flex flex-col gap-1.5 ">
                      <label htmlFor={`items.${index}.name`} className="text-[#344054] font-medium text-sm">Item Name</label>
                      <input
                        type="text"
                        className="w-[210px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                        onBlur={handleBlur}
                        onChange={(e) => handleItemChange(index, e)}
                        value={item.name}
                        name={`items.${index}.name`}
                      />
                      {errors.items?.[index]?.name && <small className="text-red-500">{errors.items[index].name}</small>}
                    </div>
                    {/* Quantity */}
                    <div className="flex flex-col gap-1.5 ">
                      <label htmlFor={`items.${index}.quantity`} className="text-[#344054] font-medium text-sm">Qty.</label>
                      <input
                        type="number"
                        className="w-[110px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                        onBlur={handleBlur}
                        onChange={(e) => handleItemChange(index, e)}
                        value={item.quantity}
                        name={`items.${index}.quantity`}
                      />
                      {errors.items?.[index]?.quantity && <small className="text-red-500">{errors.items[index].quantity}</small>}
                    </div>
                    {/* Price */}
                    <div className="flex flex-col gap-1.5 ">
                      <label htmlFor={`items.${index}.price`} className="text-[#344054] font-medium text-sm">Price</label>
                      <input
                        type="number"
                        className="w-[110px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                        onBlur={handleBlur}
                        onChange={(e) => handleItemChange(index, e)}
                        value={item.price}
                        name={`items.${index}.price`}
                      />
                      {errors.items?.[index]?.price && <small className="text-red-500">{errors.items[index].price}</small>}
                    </div>
                    <div className="flex flex-col gap-1.5 ">
                      <label className="text-[#344054] font-medium text-sm">Total</label>
                      <input
                        type="text"
                        className="w-[110px] h-[44px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg"
                        value={item.total}
                        readOnly
                      />
                    </div>
                    <button type="button" onClick={() => handleDelete(index)} className="w-10 h-10">
                      <img src={TrashIcon} alt="Delete Item" />
                    </button>
                  </div>
                ))}

                  <div className="add-items-btn">
                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="w-[628px] h-[44px] text-white bg-[#7F56D9] border-none rounded-lg"
                    >
                      + Add New Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
