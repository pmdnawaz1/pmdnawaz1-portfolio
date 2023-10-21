"use client"
import React, { useState } from 'react';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const TimeLineData = [
    {
      year: '2020',
      text: 'Event 1',
    },
    {
      year: '2021',
      text: 'Event 2',
    },
  ];

  const handleHover = (index: number |  null) => {
    setActiveItem(index);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      <div className="w-full relative flex">
        {TimeLineData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            className={`w-48 h-24 rounded-lg bg-custom-gradient text-gray-600 cursor-pointer transition-transform transform ${
              activeItem === index ? 'scale-110' : 'scale-100'
            }`}
          >
            <div className="p-4">
              <div className="text-lg font-bold">{item.year}</div>
              {activeItem === index && <div className="mt-2">{item.text}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
