import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import 'tailwindcss/tailwind.css';
import InvoiceHeader from './InvoiceHeader';

// Validation schema using Yup
const validationSchema = Yup.object({
  billFrom: Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  }),
  billTo: Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  }),
  date: Yup.date().required('Required'),
  paymentTerms: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Required'),
      quantity: Yup.number().required('Required').min(1, 'Must be at least 1'),
      price: Yup.number().required('Required').min(1, 'Must be at least 1'),
    })
  ).required('Must have at least one item'),
});

// Initial values for the form
const initialValues = {
  billFrom: { name: '', email: '' },
  billTo: { name: '', email: '' },
  date: '',
  paymentTerms: '',
  description: '',
  items: [{ name: '', quantity: 1, price: 0 }],
};

// Payment terms options
const paymentTermsOptions = [
  { value: 'NET_10_DAYS', label: 'Net 10 Days' },
  { value: 'NET_20_DAYS', label: 'Net 20 Days' },
  { value: 'NET_30_DAYS', label: 'Net 30 Days' },
];

// Main component
const InvoiceForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert('Invoice created successfully!');
    resetForm();
  };

  return (
    <div className="p-8 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Invoice</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm }) => (
          <Form>
            <InvoiceHeader resetForm={resetForm} />
            {/* Bill From Section */}
            <div className="mb-4">
              <label htmlFor="billFrom.name" className="block text-sm font-medium text-gray-700">Bill From Name</label>
              <Field name="billFrom.name" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="billFrom.name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="billFrom.email" className="block text-sm font-medium text-gray-700">Bill From Email</label>
              <Field name="billFrom.email" type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="billFrom.email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Bill To Section */}
            <div className="mb-4">
              <label htmlFor="billTo.name" className="block text-sm font-medium text-gray-700">Bill To Name</label>
              <Field name="billTo.name" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="billTo.name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="billTo.email" className="block text-sm font-medium text-gray-700">Bill To Email</label>
              <Field name="billTo.email" type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="billTo.email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Invoice Date */}
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Invoice Date</label>
              <Field name="date" type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Payment Terms */}
            <div className="mb-4">
              <label htmlFor="paymentTerms" className="block text-sm font-medium text-gray-700">Payment Terms</label>
              <Field as="select" name="paymentTerms" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                {paymentTermsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="paymentTerms" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Field as="textarea" name="description" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Items List */}
            <FieldArray name="items">
              {({ remove, push }) => (
                <>
                  {values.items.map((item, index) => (
                    <div key={index} className="mb-4 border p-4 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">Item {index + 1}</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label htmlFor={`items.${index}.name`} className="block text-sm font-medium text-gray-700">Item Name</label>
                          <Field name={`items.${index}.name`} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                          <ErrorMessage name={`items.${index}.name`} component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                          <label htmlFor={`items.${index}.quantity`} className="block text-sm font-medium text-gray-700">Quantity</label>
                          <Field name={`items.${index}.quantity`} type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                          <ErrorMessage name={`items.${index}.quantity`} component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                          <label htmlFor={`items.${index}.price`} className="block text-sm font-medium text-gray-700">Price</label>
                          <Field name={`items.${index}.price`} type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                          <ErrorMessage name={`items.${index}.price`} component="div" className="text-red-500 text-sm" />
                        </div>
                      </div>
                      <button type="button" className="text-red-600 mt-2" onClick={() => remove(index)}>Remove Item</button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mb-4 text-indigo-600"
                    onClick={() => push({ name: '', quantity: 1, price: 0 })}
                  >
                    Add Item
                  </button>
                </>
              )}
            </FieldArray>

            {/* Total Calculation */}
            <div className="mb-4">
              <h3 className="text-xl font-bold">Total (after 10% tax deduction):</h3>
              <p>
                ${values.items.reduce((acc, item) => acc + item.quantity * item.price, 0) * 0.9}
              </p>
            </div>

            {/* Form Buttons */}
            <div className="flex justify-between">
              <button type="reset" className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={resetForm}>Reset</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Create Invoice</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
