import React from 'react';

const features = [
  { title: "Nibh viverra", description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ", icon: "/trophy.png" },
  { title: "Cursus amet", description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ", icon: "/tunnel.png" },
  { title: "Ipsum fermentum", description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ", icon: "/tv.png" },
];

const FeatureSection = () => {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-start font-roboto text-left z-10 text-[#0F172A]">
          <img src={feature.icon} alt={feature.title} className="mb-4"/>
          <h3 className="text-[20px] font-[500] leading-[22px] ">{feature.title}</h3>
          <p className="text-[18px] font-[400] leading-[28.8px]">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default FeatureSection;
