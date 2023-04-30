import React from "react";

const CenteredList = () => {
  return (
    <div className="flex flex-col mt-4  mb-8 md:flex-row items-center justify-center">
      <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left text-gray-500">
      
      <li className="mt-4 md:mt-0 hidden md:block">© 2020 Beyond Sustainability. All rights reserved</li>

        <li className="mt-4 md:mt-0">Privacy Policy</li>
        <li className="mt-4 md:mt-0">Terms of Service</li>
        {/** Render "Contact us" list item only in mobile view */}
        <li className="mt-4 md:hidden">Site Map </li>
        <li className="mt-8 md:hidden text-center">© 2020 Beyond Sustainability.<br/> All rights reserved.</li>

       
       
      </ul>
    </div>
  );
};

export default CenteredList;




