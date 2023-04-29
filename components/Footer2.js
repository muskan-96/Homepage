import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row md:justify-between items-center px-4 md:px-8 py-4">
      <div className="flex items-center">
        <Link href="/">
          
            <Image src="/images/main-logo.png" alt="My Logo" width={200} height={100} />
          
        </Link>
      </div>

      <div className="flex items-center justify-center md:justify-start  l">
      <ul className="flex flex-wrap md:flex-row space-x-8 text-center md:text-left flex-col">
  <li>
    Products
  </li>
  <li>
    About Us 
  </li>
  <li>
    Careers
  </li>
  <li>
    Blogs 
  </li>
</ul>

      </div>

      <div className="">
        <Image src="/images/Social.png" alt="My Logo" width={150} height={100} />
      </div>
      

    </div>
  );
};

export default Footer2;
