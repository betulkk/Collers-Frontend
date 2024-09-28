import React, { useState } from "react";

// Slider bileşeni
/**
 * The `CommentSection` component is a React component that renders a section with a collection of comments. Each comment includes information about the company, the user who made the comment, and the comment text.
 * 
 * The component uses a slider to display the comments, with buttons to navigate between the comments. The slider is implemented using a state variable `currentSlide` and functions `handlePrev` and `handleNext` to update the current slide.
 * 
 * The component receives its data from the `comments` array, which contains objects with the following properties:
 * - `id`: a unique identifier for the comment
 * - `company`: an object with `name` and `image` properties
 * - `text`: the text of the comment
 * - `user`: an object with `name`, `position`, and `image` properties
 * 
 * The component also includes some styling and layout elements, such as a title, a background image, and the comment cards themselves.
 */
const CommentSection = () => {
  const comments = [
    {
      id: 1,
      company: {
        name: "Zoomerr",
        image: "/zoomer.png",
      },
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem.",
      user: {
        name: "Hellen Jummy",
        position: "Team Lead",
        image: "/User1.png",
      },
    },
    {
      id: 2,
      company: {
        name: "SHELLS",
        image: "/Shells.png",
      },
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim.",
      user: {
        name: "Hellena John",
        position: "Co-founder",
        image: "/User2.png",
      },
    },
    {
      id: 3,
      company: {
        name: "ArtVenue",
        image: "/ArtVenue.png",
      },
      text: "A eget sed posuere dui risus habitasse mauris.",
      user: {
        name: "David Oshodi",
        position: "Manager",
        image: "/User3.png",
      },
    },
    {
      id: 4,
      company: {
        name: "Waverly",
        image: "/ArtVenue.png",
      },
      text: "Magnis integer aenean, aliquet adipiscing nibh.",
      user: {
        name: "John Doe",
        position: "Founder",
        image: "/User1.png",
      },
    },
    {
      id: 5,
      company: {
        name: "Innovate",
        image: "/Shells.png",
      },
      text: "Duis nec velit tempor, ornare turpis at, dapibus nisl.",
      user: {
        name: "Emily Chen",
        position: "Designer",
        image: "/User2.png",
      },
    },
    {
      id: 6,
      company: {
        name: "TechStart",
        image: "/ArtVenue.png",
      },
      text: "Suspendisse potenti. Ut vitae nulla erat.",
      user: {
        name: "Peter Parker",
        position: "CTO",
        image: "/User3.png",
      },
    },
    {
      id: 7,
      company: {
        name: "DevUp",
        image: "/Shells.png",
      },
      text: "Curabitur convallis sapien ut erat dignissim porttitor.",
      user: {
        name: "Bruce Wayne",
        position: "CEO",
        image: "/User1.png",
      },
    },
  ];


  const slides = [...comments, comments[0], comments[1]]; 

  const [currentSlide, setCurrentSlide] = useState(2);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 3 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 2 : prevSlide + 1
    );
  };

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="flex flex-row text-[#0F172A] font-roboto items-center justify-between relative max-w-6xl mx-auto px-6 lg:px-12 mb-[150px]">
        <h2 className="font-[800] leading-[61.6px] text-[56px] gap-[8px] mb-4">
          Because they love us
        </h2>
        <div className="flex space-x-8 justify-center items-center">
          <button className="cursor-pointer" onClick={handlePrev}>
            <img src="/ButtonL.png" alt="ArrowL" className="w-10 h-10" />
          </button>
          <button className="cursor-pointer" onClick={handleNext}>
            <img src="/ButtonR.png" alt="ArrowR" className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Arka plan görüntüsü */}
      <div className="absolute inset-0 flex justify-center items-center top-[200px] z-10">
        <img
          src="/RectangleYellow.png"
          alt="Yellow Rectangle"
          className="w-[80%] h-auto"
        />
      </div>

      {/* Slider İçeriği */}
      <div className="relative overflow-hidden z-20">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentSlide - 2) * (100 / 5)}%)`, 
            width: `${slides.length * (100 / 5)}%`, 
          }}
        >
          {slides.map((comment) => (
            <div
              key={comment.id}
              className="w-[calc(12%)] flex-shrink-0 bg-white p-6 rounded-lg shadow-lg mx-2" 
            >
              <div className="flex items-center mb-4">
                <img
                  src={comment.company.image}
                  alt={comment.company.name}
                  className="mr-2"
                />
              </div>
              <p className="text-[18px] leading-[28px] text-[#475569] mb-6">
                {comment.text}
              </p>
              <div className="flex items-center">
                <img
                  src={comment.user.image}
                  alt={comment.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-[16px] font-bold">{comment.user.name}</p>
                  <p className="text-[14px] text-gray-500">
                    {comment.user.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
