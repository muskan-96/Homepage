import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function MainPage() {
  return (
    <section className=' bg-white'>
      <div className='container mx-auto'>
        <div className='min-h-[560px] px-0 pb-12 flex flex-col text-center '>
          <div className=" flex flex-col md:flex-row mt-6 justify-center items-center">
            <div className="md:w-1/2 px-8 md:px-0 flex flex-col justify-center items-center order-2 md:order-1 mr-8">
            <h4 className="my-5 whitespace-pre-wrap md:ml-10 text-left text-3xl font-bold text-gray-6800 md:text-6xl">
  Let us Transform your sustainability journey.
</h4>



              <p className="text-base text-left text-gray-500 md:text-2xl">
                Reduce your environmental impact by using a <br/> scientific data-driven approach and restore damage.
              </p>
              <div className=" flex items-start justify-start gap-5 text-center md:text-right">
                <button className="h-14 w-full mt-4 cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white  hover:shadow-xl md:mr-80">
                  <Link href="/Contact" className='s'>
                    Contact us
                  </Link>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1  pl-8 mr-10  ml-2 md:order-2">
              <Image src="/images/Group4.png" alt="My Logo" width={700} height={600} layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;

