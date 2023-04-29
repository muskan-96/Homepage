import Link from "next/link";
import Image from "next/image";

const Footer3 = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row md:justify-between items-center px-4 md:px-8 py-4">
      <div className="flex items-center justify-center md:justify-start  l">
        <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
          <li>
            @2020 Beyond Sustainability. All rights reserved 
          </li>
          <li>
            Privacy Policy 
          </li>
          <li>
            Terms of Service 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer3;
