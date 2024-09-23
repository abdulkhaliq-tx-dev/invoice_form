import * as yup from 'yup';

export const InvoiceValidation = yup.object().shape({
  billFrom: yup.object().shape({
    name: yup.string().required('Company Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    postal: yup.string().required('Postal Code is required'),
    address: yup.string().required('Street Address is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
  }),
  billTo: yup.object().shape({
    name: yup.string().required('Client Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    postal: yup.string().required('Postal Code is required'),
    address: yup.string().required('Street Address is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
  }),
  date: yup.date().required('Invoice Date is required'),
  paymentTerms: yup.string().required('Payment Terms are required'),
  description: yup.string().required('Project Description is required'),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Item Name is required'),
      quantity: yup.number().positive().integer().required('Quantity is required'),
      price: yup.number().positive().required('Price is required'),
      total: yup.number().required('Total is required'), 
    })
  ),
});
