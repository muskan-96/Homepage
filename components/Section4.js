

import React from 'react';
import Image from 'next/image';

function Section4() {
  return (
    <section className=' pt-20   pb-20 bg-white'>
      <div className='container mx-auto bg-white p-4 '>
        <div className=' px-2 flex flex-col text-left  xl:flex-row xl:items-center xl:text-right  bg-white '>
          {/* image section  */}
          <div>
            <Image src="/images/plant.png" alt="My Logo" width={600} height={600} style={{ width: "700px" }}  className='md:mr-10'/>
          </div>
          <div className="flex flex-col  text-left ml-2   md:items-start md:text-left md:ml-12">
            <h1 className="mb-8 my-5  text-xl font-bold text-gray-800 md:text-6xl">
              Why make your <br /> business sustainable?
            </h1>
            <ul class="list-disc  lg:pl-6 text-lg font-serif mr-4 ">
  <li className="flex items-center">
    <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
    </svg>
    <span className="text-black text-xl">Reduce cost</span>
  </li>
  <li className="flex items-center">
    <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
    </svg>
    <span className="text-black text-xl">Competitive advantage</span>
  </li>
  <li className="flex items-center">
    <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
    </svg>
    <span className="text-black text-xl">Transparency to customers and investors</span>
  </li>
  <li className="flex items-center xl:text-left">
    <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
    </svg>
    <span className="text-black text-xl">Be ahead of climate regulations and compliances</span>
  </li>
</ul>

<p className="text-xl md:ml-7 mt-3 text-2xl whitespace-nowrap">Read more detailed case study  &gt; </p>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;




