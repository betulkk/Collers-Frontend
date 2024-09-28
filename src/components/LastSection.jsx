import React from "react";

const LastSection = () => {
  return (
    <section className="bg-[#78350F] py-[300px] relative">

            <img src="/chart.png" alt="Chart" className="absolute inset-0 w-[80%] h-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            <div className="absolute inset-0 text-[#FFFBEB] font-[800] flex flex-col items-center justify-center font-roboto text-center z-20">
                <h1 className="text-[96px]  leading-[105.6px]">
                11,658,467
                </h1>
                <p className="text-[56px] leading-[61.6px] ">Shoes Collected</p>

            </div>

            <img src="/Ellipses.png" alt="Ellipses" className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[40%] z-10" />
            
            
            <div className="absolute top-0 left-[250px] w-48 z-0 bg-[#E2E8F0] rounded-lg shadow-lg p-4">
                    <img
                    src="/toolTip.png"
                    alt="Cool Shoes"
                    className="w-full h-auto object-cover rounded-lg"
                    />
                    <div className="mt-2">
                          <p className="text-[#0F172A] text-[14px] font[400] leading-[22.4px]">
                            <span className="font-semibold">Emma Simpson</span> collected one pair
                            of <span className="text-[#0F172A] font-semibold">Cool Shoes</span>.
                        </p>
                        </div>
          <div className="absolute bottom-[-10px] left-[50%] transform -translate-x-1/2 w-4 h-4 bg-[#E2E8F0] rotate-45 shadow-lg">
          <img src="/greenEllipse.png" alt="Ellipse" /></div>

          </div>



        </section>
    )
}
export default LastSection;
