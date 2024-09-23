import React from "react";

// export default function InvoiceHeader({handleReset, handleSubmit}) {
export default function InvoiceHeader({resetForm}) {




  return (
    <>
      <div className="w-full h-[66px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-medium text-[#101828]">New Invoice</h2>
            <p className="text-base font-normal text-[#667085]	">
              Create new invoice for your customers
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-[8px] h-[44px] w-[80px] py-2.5 px-[18px] text-base font-medium text-[#344054] border border-[#D0D5DD]" type="button" onClick={resetForm} >
              Reset
            </button>
            <button
              type="submit" // Ensure this button submits the form
              className="rounded-[8px] h-[44px] w-[77px] py-2.5 px-[18px] text-base font-medium text-white bg-[#7F56D9]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
