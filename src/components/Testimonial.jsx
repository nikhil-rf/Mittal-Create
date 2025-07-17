import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Clay Boykin",
      title: "Author | Thought Partner | Guide",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "CEO | Innovation Leader | Strategist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "This platform has transformed how we approach business challenges. The insights and guidance provided are invaluable for any organization."
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "CTO | Tech Visionary | Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "The level of expertise and thoughtful partnership we've received has been exceptional. Highly recommend to any leader seeking growth."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      title: "Founder | Creative Director | Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "Working with this team has been a game-changer. Their approach to problem-solving and strategic thinking is world-class."
    },
    {
      id: 5,
      name: "David Thompson",
      title: "VP Operations | Process Expert | Leader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "The results speak for themselves. Our organization has seen tremendous growth and improvement in efficiency across all departments."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen flex flex-col justify-center font-[Montserrat]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">TESTIMONIALS</h2>
          <div className="w-90 h-2 bg-[#D0A151] mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 font-normal">
            Trusted By Leaders Across<br />Industries
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
          {/* Profile Card */}
          <div className="relative">
            <div className="bg-[#D0A151] p-8 pt-16 rounded-lg shadow-lg text-center text-white min-w-80">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{testimonials[currentSlide].name}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {testimonials[currentSlide].title}
                </p>
              </div>
            </div>
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-24 h-24 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 object-cover border-4 border-white"
            />
          </div>

          {/* Quote */}
          <div className="flex-1 max-w-2xl relative">
            <div className="text-8xl text-black font-serif leading-none absolute -top-4 -left-6 select-none"> ‘‘</div>
            <p className="text-lg text-gray-800 leading-relaxed pl-8 pr-8">
              {testimonials[currentSlide].quote}
            </p>
            <div className="text-8xl text-black font-serif leading-none absolute -bottom-8 -right-6 select-none">„</div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-400' : 'bg-black hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* More Testimonials Button */}
        <div className="text-center">
          <button className="bg-black cursor-pointer text-white px-18 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
            More Testimonials
          </button>
        </div>
      </div>

    </div>
  );
};

export default TestimonialsSection;