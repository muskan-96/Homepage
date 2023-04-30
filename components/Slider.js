import Image from 'next/image';
function ThreeDivs() {
  return (
    <div className="flex w-full py-40 pt-40 bg-white">
      <div className="w-1/3 flex flex-col justify-center">
        <div className="flex justify-start">
          <button className=" ml-20 hover:bg-gray-300 p-2 mr-2 hidden md:block" style={{fontSize: "2.5rem"}}>
            <p classn>&lt;</p>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center text-center my-8 md:font-bold">
        <h3 className="md:text-2xl text-xl font-semibold md:font-bold mb:text-md">
          "Globally, 85 percent of people indicate <br />
          that they have shifted their purchase <br /> 
          behavior towards being more sustainable <br />
          in the past five years"<br />
        </h3>
        <p className='font-semibold mt-5 text-gray-1900 '>Read more   &gt;</p>
        <div className="flex justify-center items-center h-40 md:hidden">
  <Image src="/images/Pagination.png" alt="My Logo" width={50} height={50} />
</div>







      </div>
      <div className="w-1/3 bg-black-200 flex flex-col justify-center">
        <div className="flex justify-end">
          <button className="hover:bg-gray-300  mr-20 p-2 ml-2 hidden md:block" style={{fontSize: "2.5rem"}} >
            <p>&gt;</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreeDivs;

