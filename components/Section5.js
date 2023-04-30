import React from 'react';

const TwoDivsWithBorder = () => {
  return (
    <div className="flex flex-col bg-white md:flex-row mx-auto">


      <div className="flex-1 text-left md:p-4">


        <div className="flex flex-col items-center justify-center">
          <span className="my-3 mr-60 text-center font-semibold text-gray-600">
            Our product
          </span>
          <h1 className="my-3 text-4xl font-bold text-gray-800">
            Carbon Management
          </h1>





          <div className="flex justify-center items-center h-full">
            <p className="text-left   ml-4  leading-tight mb-0 md:mt-2" style={{ lineHeight: '1.5em' }}>
              Measure carbon emissions and the supply chain of<br /> your business<br />
              Develop de-carbonization projects<br />
              Offset your carbon emissions through offset projects<br />
            </p>
          </div>


          <button className="h-14 cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl  w-full md:w-auto md:mr-60 mt-6">
            Book a demo
          </button>

        </div>
      </div>
      <div className="flex-1 md:p-4">

        <div className="flex flex-col items-center justify-center ">
          <h1 className="my-3 text-5xl font-bold text-gray-800 mr-12 md:mr-20 mt-14">
            ESG Strategy
          </h1>
          <div className="flex justify-center items-center h-full">
            <p className="text-left  ml-4 leading-tight mb-0 md:mt-1" style={{ lineHeight: '1.5em' }}>
              Integrate ESG strategies and governance frameworks<br />
              Identify ESG risks and opportunities<br />
              ESG dashboards & reports<br />
              Generate a yearly ESG report<br />
            </p>
          </div>


          <button className="h-14 cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl block w-full md:w-auto   md:hidden  mt-12">
            Book a demo
          </button>

          <button className="h-14 cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl   hidden md:block md:ml- md:mr-60 mt-8 mb-4">
            Action
          </button>

        </div>
      </div>
    </div>
  );
};

export default TwoDivsWithBorder;
