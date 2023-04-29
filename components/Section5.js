import React from 'react';

const TwoDivsWithBorder = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="border flex-1 md:border-r md:p-4">
        <div className="text-center">
          <h1 className="my-5 text-4xl md:text-6xl font-bold text-gray-800 text-lg">
            Carbon Management
          </h1> 
        
          <div className="flex justify-center items-center h-full">
            <p className="text-left leading-tight mb-0 md:mt-2" style={{ lineHeight: '1.5em' }}>
              Measure carbon emissions and the supply chain of<br/> your business<br />
              Develop de-carbonization projects<br />
              Offset your carbon emissions through offset projects<br />
            </p>
          </div>
          
            <button className="h-14 cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl md:mr-60 mt-10">
              Book a demo
            </button>
          
        </div>
      </div>
      <div className="border flex-1 md:p-4">
        <div className="text-center">
          <h1 className="my-5 text-4xl md:text-6xl font-bold text-gray-800 text-lg">
            ESG Strategy 
          </h1> 
          <div className="flex justify-center items-center h-full">
            <p className="text-left leading-tight mb-0 md:mt-1" style={{ lineHeight: '1.5em' }}>
              Integrate ESG strategies and governance frameworks<br />
              Identify ESG risks and opportunities<br />
              ESG dashboards & reports<br />
              Generate a yearly ESG report<br />
            </p>
          </div>
          
            <button className="h-14  cursor-pointer rectangle-xl bg-green-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl md:mr-60 mt-10">
              Action
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default TwoDivsWithBorder;
