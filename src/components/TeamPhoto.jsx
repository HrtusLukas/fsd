import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import team5 from "../images/team5.jpg";
import team6 from "../images/team6.jpg";
import team7 from "../images/team7.jpg";
import team8 from "../images/team8.jpg";

const TeamPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Using your imported team images
  const teamMembers = [
    { image: team1, name: "Team Member 1" },
    { image: team2, name: "Team Member 2" },
    { image: team3, name: "Team Member 3" },
    { image: team4, name: "Team Member 4" },
    { image: team5, name: "Team Member 5" },
    { image: team6, name: "Team Member 6" },
    { image: team7, name: "Team Member 7" },
    { image: team8, name: "Team Member 8" },
  ];

  const totalSlides = teamMembers.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get the visible slides with wrap-around
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalSlides) % totalSlides;
      slides.push({ ...teamMembers[index], position: i });
    }
    return slides;
  };

  // Auto-advance slides every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel container */}
      <div className="relative flex justify-center items-center gap-4 h-96">
        {getVisibleSlides().map((member, idx) => {
          const isCenter = member.position === 0;
          
          return (
            <div
              key={idx}
              className={`transition-all duration-500 ease-in-out ${
                isCenter 
                  ? 'w-80 h-88 z-20' 
                  : 'w-56 h-64 opacity-50'
              }`}
            >
              <div className="relative h-full w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className={`
                  absolute bottom-0 left-0 right-0 
                  bg-gradient-to-t from-black/70 to-transparent
                  p-4 rounded-b-lg
                  ${isCenter ? 'opacity-100' : 'opacity-0'}
                  transition-opacity duration-500
                `}>
                  <h3 className="text-white text-center font-semibold">
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {teamMembers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPhoto;