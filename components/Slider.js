// function Slider() {
//     return (
//       <div className="flex items-center">
        // <div className="flex justify-start">
        //   <button className="bg-gray-200 hover:bg-gray-300 p-2 mr-2">
        //     <p>&lt;</p>
        //   </button>
        // </div>
//         <div className="text-center flex justify-center">
        //   <h3>
        //     "Globally, 85 percent of people indicate <br />
        //     that they have shifted their purchase <br /> 
        //     behavior towards being more sustainable <br />
        //     in the past five years"<br />
        //   </h3>
//         </div>
        // <div className="flex justify-end">
        //   <button className="bg-gray-200 hover:bg-gray-300 p-2 ml-2">
        //     <p>&gt;</p>
        //   </button>
        // </div>
//       </div>
//     );
//   }
  
//   export default Slider;

function ThreeDivs() {
    return (
      <div className="flex w-full mt-10">
        <div className="w-1/3 ">
          <div className="flex justify-start">
            <button className="bg-gray-200 hover:bg-gray-300 p-2 mr-2">
              <p>&lt;</p>
            </button>
          </div>
        </div>
        <div className="w-1/3 text-center my-8  font-bold">
          <h3 className="text-2xl">
            "Globally, 85 percent of people indicate <br />
            that they have shifted their purchase <br /> 
            behavior towards being more sustainable <br />
            in the past five years"<br />
          </h3>
        </div>
        <div className="w-1/3 bg-black-200">
          <div className="flex justify-end">
            <button className="hover:bg-gray-300 p-2 ml-2">
              <p>&gt;</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ThreeDivs;
  
  
  
  
  