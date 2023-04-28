import React from 'react'
import Image from 'next/image'

function MainPage() {
  return (
    <div className=" border border-blue-900 w-screen flex flex-col md:flex-row justify-center items-center">
      <div className=" border border-red-900 md:w-1/2 px-8  md:px-0  "  >
        <h4 className="my-5 text-3xl font-bold text-gray-6800 md:text-7xl">
          Let us Transform your sustainbility journey
        </h4>
        <p className="text-base text-gray-500 md:text-xl">
        Reduce your environmental impact by using a scientific data-driven approach and restore damage.
        </p>
        <div className="mt-12 flex items-start justify-start gap-5 text-center ">
          <button className="h-14 cursor-pointer  rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
            Contact us
          </button>
        

        </div>
      </div>
      <div className="md:w-1/2 px-8 md:px-0 border border-red-900 m-0"  style={{width: "40rem", height: "40rem"}}>
  {/* your content here */}
  <div className="flex  md:flex-row">
    <div className=" flex-col   md:flex-col">
      <Image src="/images/image.png" width={200} height={250}  className="m-4" style={{ width: '400px', height: '400px' }}/>
      <Image src="/images/image 7.png" width={200} height={550} className='mt-3 ' style={{ width: '400px', height: '200px' }} />
    


    </div>
   
    <Image src="/images/image 5.png"  className="m-4"  width={400} height={100} style={{ width: '360px', height: '600px' }}/>
 
  </div>



</div>


    


   
    </div>
  )
}

export default MainPage
