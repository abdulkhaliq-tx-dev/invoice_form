import React from "react";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceForms from "../components/InvoiceForms";
import { ToastContainer } from "react-toastify";

export default function Invoice() {
  return (
    <>
      <div className="invoice w-full container mx-auto mt-24">
        <ToastContainer />
        <div className="invoice-form w-full">
          <InvoiceForms />
        </div>
      </div>
    </>
  );
}
