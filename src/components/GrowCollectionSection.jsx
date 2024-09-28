import React from "react";

const GrowCollectionSection = () => {
  return (
    <section className=" py-20 relative overflow-hidden flex flex-col items-center">

      {/* Upper Section: Title and Paragraph */}
      <div className="text-left font-roboto max-w-7xl mx-auto text-[#0F172A] mb-8 relative z-10">
        <h2 className="font-[800] leading-[61.6px] text-[56px] gap-[8px] mb-4">
          Grow your collection
        </h2>
        <p className="text-[18px] font-normal leading-[28.8px]">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. 
          Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. 
          Et volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="container mx-auto h-full max-w-7xl relative bottom-0 justify-between">
        {/* Content: Left and Right Columns */}
        <div className="flex flex-col lg:flex-row justify-between relative ">

          {/* Left Column: Icons and Menu */}
          <div className="lg:w-1/4 w-full mb-8 lg:mb-0 z-10 ">
            <ul className="space-y-4 ">
              <li className="flex items-center space-x-2 cursor-pointer opacity-100 hover:opacity-50">
                <img src="/search.png" alt="Search" className="w-6 h-6" />
                <span>Bibendum tellus</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer opacity-100 hover:opacity-50">
                <img src="/shield-check.png" alt="Chat" className="w-6 h-6" />
                <span>Cras eget</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer opacity-100 hover:opacity-50">
                <img src="/rocket.png" alt="Pin" className="w-6 h-6" />
                <span>Dolor pharetra</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer opacity-100 hover:opacity-50">
                <img src="/screen.png" alt="Bell" className="w-6 h-6" />
                <span>Amet, fringilla</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer opacity-100 hover:opacity-50">
                <img src="/podcast.png" alt="Settings" className="w-6 h-6" />
                <span>Amet nibh</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer opacity-100 hover:opacity-50">
                <img src="/settings-alt.png" alt="Food" className="w-6 h-6" />
                <span>Sed velit</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Images */}
          <div className="lg:w-3/4 w-full mt-8 lg:mt-0 relative">
            <div className="relative flex justify-center items-center">
              <div className="relative z-30 top-[100px] left-[100px]">
                <img
                  className="shadow-lg rounded-lg w-[80%] h-[80%] object-cover"
                  src="/Desktop2.png"
                  alt="Desktop2"
                />
              </div>
              <div className="z-20 absolute top-10 ">
                <img
                  className="shadow-lg rounded-lg w-[80%] h-[80%] object-cover"
                  src="/Desktop3.png"
                  alt="Desktop3"
                />
              </div>
              <div className="z-40 absolute top-[170px] right-[10px]">
                <img
                  className="shadow-lg rounded-lg w-[80%] h-[80%] object-cover"
                  src="/Shoe.png"
                  alt="Shoe"
                />
              </div>
            </div>
          </div>
        </div>


      </div>

              {/* Wave Image pinned to the bottom */}
              <div className="absolute h-screen inset-x-0 bottom-0">
          <img
            src="/Waves.png"
            alt="Waves"
            className="w-full object-cover"
          />
        </div>
    </section>
  );
};

export default GrowCollectionSection;
