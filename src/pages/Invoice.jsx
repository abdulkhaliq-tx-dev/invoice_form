import React from "react";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceForms from "../components/InvoiceForms";

export default function Invoice() {
  return (
    <>
      <div className="invoice w-full container mx-auto mt-24">
        <div className="flex flex-col gap-10">
          <div className="invoice-header w-full">
            <InvoiceHeader/>
          </div>
          <div className="invoice-form w-full">
            <InvoiceForms/>
          </div>
        </div>
      </div>
    </>
  );
}
