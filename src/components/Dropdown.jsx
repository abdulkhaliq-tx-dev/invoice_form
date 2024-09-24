import React, { useState } from "react";

export default function Dropdown({ handleSelectCountry, country, fieldId }) {
  const [isOpen, setIsOpen] = useState(false);

  const countryList = [
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "India", label: "India" },
    { value: "China", label: "China" },
    { value: "Japan", label: "Japan" },
    { value: "Russia", label: "Russia" },
    { value: "Brazil", label: "Brazil" },
    { value: "Italy", label: "Italy" },
    { value: "Spain", label: "Spain" },
    { value: "Pakistan", label: "Pakistan" },
  ];

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative font-[sans-serif] w-full">
      <button
        type="button"
        onClick={handleToggle}
        className="py-2.5  w-full  rounded-lg text-[#667085] text-sm font-medium border-2 outline-none flex items-center justify-around hover:bg-[#F9FAFB]"
      >
        {country || "Select a Country"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-[#333] inline ml-3"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute block shadow-lg bg-white py-2 px-2 z-[1000]  w-full rounded max-h-96 overflow-auto">
          {countryList.map((option) => (
            <li
              key={option.value}
              className="py-2.5 px-4 hover:bg-[#F9FAFB] rounded text-black text-sm cursor-pointer"
              onClick={() => {
                handleSelectCountry(option.value, fieldId);
                setIsOpen(false);
              }}
            >
              <div className="flex items-center">{option.label}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
