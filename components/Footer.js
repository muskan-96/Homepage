import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return(
        <div className="bg-white  ">
            <div className="py-8 text-center md:text-left">
                <p className="text-gray-500 text-lg font-medium">Trusted by companies</p>
            </div>
            <div className="px-4 md:px-8">
                <ul className="flex flex-wrap justify-centerc  items-center   md:justify-start space-x-8">
                    <li>
                        <Image src="/images/image9.png" alt="My Logo" width={30} height={100}   />
                    </li>
                    <li>
                        <Image src="/images/logo.png" alt="My Logo" width={120} height={100}  />
                    </li>
                    <li>
                        <Image src="/images/image10.png" alt="My Logo" width={100} height={100}  />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
