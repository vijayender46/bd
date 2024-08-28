import { useState } from "react";

export default function CurrencyDropdown(props) {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // State to manage the selected currency
  const [selectedCurrency, setSelectedCurrency] = useState("GBP £");

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle currency selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false); // Close the dropdown after selecting a currency
  };

  return (
    <div className={`${props.styles} relative`}>
      {/* Display the selected currency */}
      <div onClick={toggleDropdown} className="cursor-pointer flex items-center">
        {selectedCurrency}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      <div
        id="dropdown"
        className={`z-10 ${
          isDropdownOpen ? "" : "hidden"
        } bg-light text-gray absolute mt-2 w-20 border rounded-lg shadow-md`}
      >
        <ul className="py-1">
          <li
            onClick={() => handleCurrencySelect("GBP £")}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            GBP £
          </li>
          <li
            onClick={() => handleCurrencySelect("USD $")}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            USD $
          </li>
          <li
            onClick={() => handleCurrencySelect("INR ₹")}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            INR ₹
          </li>
        </ul>
      </div>
    </div>
  );
}
