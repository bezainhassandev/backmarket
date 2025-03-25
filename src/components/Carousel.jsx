'use client'
import {  XIcon } from 'lucide-react';
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="overflow-hidden rounded-lg">
        <div className="w-full mb-4">
          <img
            src={images[currentIndex]}
            alt={`carousel ${currentIndex}`}
            className="w-full aspect-[1/1] object-cover rounded-lg cursor-pointer"
            onClick={openModal}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-black text-white py-2 px-4 rounded-full opacity-75 hover:opacity-75 transition"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer border border-black ${index === currentIndex ? 'opacity-100' : 'opacity-65'} rounded-lg p-1 transition duration-200`}
                onClick={() => selectImage(index)}
              >
                <img
                  src={image}
                  alt={`preview ${index}`}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            className="bg-black text-white py-2 px-4 rounded-full opacity-75 hover:opacity-70 transition"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-screen-2xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2  text-gray-700 py-1 px-3 rounded-full"
            >
              <XIcon className='h-8 w-8' />
            </button>
            <div className="w-full mb-4">
              <img
                src={images[currentIndex]}
                alt={`modal ${currentIndex}`}
                className="w-full aspect-[8/4] object-contain rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                className="bg-black text-white py-2 px-4 rounded-full opacity-75 hover:opacity-75 transition"
                onClick={prevImage}
              >
                &#10094;
              </button>
              <div className="flex gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border border-black ${index === currentIndex ? 'opacity-100' : 'opacity-65'} rounded-lg p-1 transition duration-200`}
                    onClick={() => selectImage(index)}
                  >
                    <img
                      src={image}
                      alt={`preview ${index}`}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <button
                className="bg-black text-white py-2 px-4 rounded-full opacity-75 hover:opacity-70 transition"
                onClick={nextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
