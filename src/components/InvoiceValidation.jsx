import * as Yup from "yup";

export const InvoiceValidation = Yup.object({
  billFrom: Yup.object({
    name: Yup.string().required("Company Name is required"),
    email: Yup.string().required("Company Email is required"),
    postal: Yup.string().required("Postal Code is required"), 
    address: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  }),
  billTo: Yup.object({
    name: Yup.string().required("Client's Name is required"),
    email: Yup.string().email("Invalid email format").required("Client's Email is required"),
    postal: Yup.string().required("Postal Code is required"), 
    address: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  }),
  date: Yup.date().required("Date is required"),
  paymentTerms: Yup.string().required("Payment Terms is required"),
  description: Yup.string().required("Description is required"),
  items: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Item Name is required"),
      quantity: Yup.number().positive("Quantity must be positive").required("Quantity is required"),
      price: Yup.number().positive("Price must be positive").required("Price is required"),
      total: Yup.number().positive("Total must be positive").required("Total is required"),
    })
  ),
});
