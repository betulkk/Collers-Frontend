import React from "react";

const WhyJoinUsSection = () => {
  return (
    <section className="px-4 md:px-20 py-20 flex items-center justify-center gap-10 md:gap-20">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white w-full h-auto md:h-[496px] mt-[75px] mb-[75px] shadow-lg rounded-xl">
        
        <div className="p-6 md:p-10 justify-center">
          <h2 className="text-[56px] md:text-4xl font-[800] mb-6">Why join us</h2>
          <ul className="mb-6 space-y-4">
            {[
              "Est et in pharetra magna adipiscing ornare aliquam.",
              "Tellus arcu sed consequat ac velit ut eu blandit.",
              "Ullamcorper ornare in et egestas dolor orci."
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="px-6 py-3 font-[500] bg-transparent border-2 border-[#78350F] text-[#78350F] rounded-[8px] hover:bg-[#78350F] hover:text-white transition">
            Sign up now
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative flex justify-center items-center">
            <img
              src="/Deco-video.png"
              alt="Video preview"
              className="absolute w-20 md:w-auto z-10"
            />
            <img 
              src="/Desktop.png" 
              alt="Desktop" 
              className="cursor-pointer z-20 rounded-[20px] w-[80%] md:w-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
