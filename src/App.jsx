import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import FeatureSection from './components/FeatureSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import WhyJoinUsSection from './components/WhyJoinUsSection';
import CommentSection from './components/CommentSection';
import GrowCollectionSection from './components/GrowCollectionSection';
import LastSection from './components/LastSection';

function App() {
  return (
    <div className='bg-gradient-to-b from-[#fffbeb] to-[#ffffff]'>
        
        <Header />
        <div className='relative'>
            <div className="lg:mt-0  lg:w-1/2 lg:order-2 ">
                <img src="/Rectangle1.png" alt="Triangle" className="w-full h-screen absolute z-1 bottom-0 " />
            </div>
        <HomeSection />
        <FeatureSection />
        </div>
        <div className=''>
        <ProductsSection />
        </div>

        <WhyJoinUsSection />
        <CommentSection />
        <GrowCollectionSection />
        <LastSection />

      
      <Footer />
    </div>
  );
}

export default App;
