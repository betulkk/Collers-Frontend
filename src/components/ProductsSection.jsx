import React from 'react';

const products = [
  { title: "Title", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", image: "/Product1.png" },
  { title: "Title", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", image: "/Product2.png" },
  { title: "Title", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", image: "/Product3.png" },
];

const ProductsSection = () => {
  return (
    <section className="border-b border-solid border-[#E2E8F0] space-y-[50px] bg-[#0f172a] flex flex-col z-10 h-auto py-10">
      <div className='flex justify-between text-[#ffffff] font-roboto gap-[80px] h-[64px] mt-[50px] mr-[50px] ml-[50px]'>
                <h2 className="text-[56px] font-[800] leading-[61.6px] p-5  ">The best of the best</h2>  
                <button className="w-[233px] h-[64px] p-5 pl-6 pr-6 gap-0 text-[24px] font-[700px] leading-[24px] rounded-[8px] border-2 border-opacity-0 space-x-4 hover:bg-white hover:text-[#0f172a] ">Sign up now</button>
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-[50px] z-20 relative">
        {products.map((product, idx) => (
          <div key={idx} className="bg-[#0f172a] text-white p-4 rounded-[10px] z-20 shadow-[0px_25px_50px_-12px_#FFFFFF40]">
            <img src={product.image} alt={product.title} className="w-full mb-4"/>
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-white">{product.description}</p>
            <button 
                className="w-full h-[56px] border-2 border-white rounded-lg text-white px-4 py-2 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <img src="/shopping-cart.png" alt="Buy Icon" className="mr-2" />
              Buy Now
            </button>
          </div>
        ))}
        <img src="/Backlights.png" alt="Backlight" className=" absolute z-10  w-full h-[450px] justify-center mt-10 ml-[-30px] mb-[30px] right-[-30px] left-5 top-[-50px] " />
      </div>

      
    </section>
  );
}

export default ProductsSection;
