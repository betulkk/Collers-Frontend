import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-[#fffbeb] pb-[24px] pt-[24px] pl-[80px] pr-[80px] ">
      <h5 className="text-[#78350F] font-roboto font-[700] text-[32px] leading-[35.2px] w-[102px] h-[35px] cursor-pointer">
      Collers
    </h5>
      <nav className="space-x-4 text-[#78350F] font-roboto font-[500] text-[16px] leading-[24px] cursor-pointer">
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Solutions</a>
        <a href="#" className="hover:underline">Pricing</a>
        <a href="#" className="hover:underline">Resources</a>
        <button className="cursor-pointer ml-4 px-4 py-2  text-[#78350F] rounded-[8px] border-2 border-[#78350F] hover:bg-[#78350F] hover:text-white">Sign up now</button>
      </nav>
    </header>
  );
}

export default Header;
