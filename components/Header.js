import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      {/* code for the header */}
      <nav >
        <div className="justify-between px-4 mx-auto bg-white  md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              <div className="flex justify-end md:justify-start">

                <Link href="/">
                  <div className="flex items-center px-4 cursor-pointer">
                    <Image src="/images/main-logo.png" alt="My Logo" width={200} height={100} />
                  </div>
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <ul className="items-center  space-y-8 md:flex md:space-x-6 md:space-y-0  text-2xl">
                <li >
                  <Link href="/">
                    Our Services
                  </Link>
                </li>
                <li >
                  <Link href="/">
                    About us
                  </Link>
                </li>
                <li >
                  <Link href="/blogs">
                    Careers
                  </Link>
                </li>
                <li >
                  <Link href="/about">
                    About US
                  </Link>
                </li>
                <li >
                <button className="h-14  cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white  hover:shadow-xl">
                  <Link href="/Contact" className='s'>
                    Contact us
                  </Link>
                  </button>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* end of the header  */}

    </div>
  );
}
export default Header;             