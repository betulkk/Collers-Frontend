import React from 'react';

const HomeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-[80px] gap-[80px]  ">
      <div className="w-full lg:w-1/2 text-left gap-[48px] z-10 ">
        <h1 className="text-[#0F172A] font-[800] text-[72px] leading-[79.2px] font-roboto gap-[8px] ">Collectible Sneakers</h1>
        <p className="font-[400] text-[18px] leading-[28.8px] text-[#0F172A] gap-[8px]">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
        <div className="space-x-4 font-roboto font-[500]  leading-[24px] cursor-pointer text-[#78350F] gap-[16px] flex">
          <button className="px-6 py-2 text-[20px]  border-2 border-[#78350F] rounded-[8px] hover:bg-[#78350F] hover:text-white">Sign up</button>
          <button  className="px-6 py-2 text-[16px] flex flex-items-center">
            <img src="/play-circle.png" alt="Watch Demo Icon" className="mr-2" />Watch Demo</button>
        </div>
      </div>
      <div className="relative p-[80px] gap-[80px]">
      <img src="/Picture_yellow.png" alt="Yellow Rectangle" className="w-full"/>
        <img src="/PexelsPhoto.png" alt="Sneaker" className="animated-image w-full absolute z-2 top-0 left-0"/>
      </div>
    </section>
  );
}

export default HomeSection;
