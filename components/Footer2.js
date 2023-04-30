import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div className="bg-white flex mt-20 flex-col md:flex-row md:justify-between items-center px-4 md:px-8 py-4">
      <div className="flex items-center mt-4 ">
        <Link href="/">
          <Image src="/images/main-logo.png" alt="My Logo" width={200} height={100}  />
        </Link>
      </div>

      <div className="flex items-center justify-center md:justify-start  l">
        <ul className="flex flex-wrap mt-4  md:flex-row space-x-8 text-center md:text-left text-2xl flex-col">
          <li className="font-semibold  mt-4 ">
            Products
          </li>
          <li className="font-semibold  md: mt-4 ">
            About Us 
          </li>
          <li className="font-semibold  md: mt-4">
            Careers
          </li>
          <li className="font-semibold  md: mt-4">
            Blogs 
          </li>
          <li className="font-semibold   mt-4 mb-4 ">
            Contact us 
          </li>
        </ul>
      </div>

     <div className="mt-4 md:w-auto w-full">
        <Image src="/images/Social5.png" alt="My Logo" width={350} height={100} className="w-full md:w-auto" />
      </div>
    </div>
  );
};

export default Footer2;
