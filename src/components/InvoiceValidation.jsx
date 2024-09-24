import * as Yup from "yup";
export const InvoiceValidation = Yup.object({
  billFrom: Yup.object({
    name: Yup.string().required("Company Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    postal: Yup.string().required("Postal Code is required"),
    address: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  }),
  billTo: Yup.object({
    name: Yup.string().required("Client Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    postal: Yup.string().required("Postal Code is required"),
    address: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  }),
  date: Yup.date().required("Invoice Date is required"),
  paymentTerms: Yup.string().required("Payment Terms are required"),
  description: Yup.string().required("Project Description is required"),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Item Name is required"),
      quantity: Yup.number().positive().integer().required("Qty is required"),
      price: Yup.number().positive().required("Price is required"),
    })
  ),
});
