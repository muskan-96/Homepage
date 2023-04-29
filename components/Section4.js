//  import Image from "next/image";
//  import Link from "next/link";


//      const Section4 = () => {
//      return(
//          <div>
//            <div className=" flex ">
//          <div className="flex h-auto  items-center justify-center p-8">
//          <div className=" md flex">
//          <Image src="/images/plant.png" alt="My Logo" width={200} height={100} />

//            </div>
//            <div className="ml-10 md:ml-20 md:w-1/2">
//              <h3 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
//              Why make your business sustainable?
//              </h3>
//              <ul className="list-disc pl-4">
//        <li className="flex items-center">
//          <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
//            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
//          </svg>
//          <span className="text-black">Reduce cost</span>
//        </li>
//        <li className="flex items-center">
//          <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
//            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
//          </svg>
//          <span className="text-black">Competitive advantage</span>
//        </li>
//        <li className="flex items-center">
//          <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
//            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
//          </svg>
//          <span className="text-black">Transparency to customers and investors</span>
//        </li>
//        <li className="flex items-center">
//          <svg className="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
//            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
//          </svg>
//          <span className="text-black">Be ahead of climate regulations and compliances</span>
//        </li>
//      </ul>
//      <p>Read more detailed case study  </p>
//              </div>
//            </div>


//          </div>

//        </div>
//      );
//  }


//  export default Section4;



import React from 'react';
import Image from 'next/image';

function Section4() {
  return (
    <section className='my-[30px]  xl:mt-[100p] bg-white '>
      <div className='container mx-auto bg-white'>
        <div className='min-h[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-center  bg-white'>
          {/* image section  */}
          <div>
            <Image src="/images/plant.png" alt="My Logo" width={700} height={600} style={{ width: "800px" }}/>
          </div>
          <div>

          <div class="flex flex-col items-center justify-center">
          <h1 className=" mb-8 my-5 text-4xl font-bold text-gray-800 md:text-6xl">
                Why make your business sustainable?
              </h1> 

  <ul class="list-disc pl-4">
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
      <span class="text-black">Reduce cost</span>
    </li>
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
      <span class="text-black">Competitive advantage</span>
    </li>
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
      <span class="text-black">Transparency to customers and investors</span>
    </li>
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 fill-current text-green-500 rounded-full" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
      <span class="text-black">Be ahead of climate regulations and compliances</span>
    </li>
  </ul>
  <p className='font-semibold text-gray-700'>Read more detailed case study &gt;</p>


</div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
{/* 



     <div className="border border-blue-900 w-screen flex flex-col md:flex-row justify-center items-center">
       <div className="border border-red-900 md:w-1/2 md:px-0 flex  items-center" style={{ width: '40vw', height: '60%' }}>
         <div className="flex flex-col justify-center items-center">


           <Image src="/images/image 5.png" className="" width={400} height={100} style={{ width: '60vw', height: '60%' }} />

         </div>
         <div className="border border-red-900 md:w-1/2 px-8 md:px-0 flex flex-col justify-center items-center">
           <h4 className="my-5 text-3xl font-bold text-gray-6800 md:text-7xl">
             Let us Transform your sustainability journey
           </h4>
           <p className="text-base text-gray-500 md:text-xl">
             Reduce your environmental impact by using a scientific data-driven approach and restore damage.
           </p>
           <div className="mt-12 flex items-start justify-start gap-5 text-center ">
             <button className="h-14 cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
               Contact us
             </button>
           </div>
         </div>

       </div>
     </div> */}


