import React, { useState } from 'react';

const Carrousel: React.FC = (): JSX.Element => {  

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: string[] = [
    'https://via.placeholder.com/150/771796',
    'https://via.placeholder.com/150/32a852',
    'https://via.placeholder.com/150/fd4d4d', 
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex:number) => (prevIndex + 1) % images.length);
  }


  const prevSlide = () => {
    setCurrentIndex((prevIndex:number) => (prevIndex - 1 + images.length) % images.length);
  };

    return (
 
<div className= "max-w-screen-lg mx-auto mt-5">
  <div className="relative">
    <div className="carousel">
    <img
        className="w-full h-64 object-cover"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white">
            Prev
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white">
            Next
          </button>
    </div>
  </div>
</div>

  )
}

export default Carrousel;