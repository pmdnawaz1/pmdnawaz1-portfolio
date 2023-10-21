import React from "react";
import { Meteors } from "./Meteros";

interface MeteorCardProps {
  projectName: string;
  projectDescription: string;
}

export const MeteorCard: React.FC<MeteorCardProps> = ({ projectName, projectDescription }) => {
  return (
    <div className="p-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-custom-card-gradient border border-gray-800 px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-0 mt-4 relative z-50">
            {projectName}
          </h1>

          <p className="font-normal text-sm text-slate-500 mb-4 relative z-50">
            {projectDescription}
          </p>

          <button className="border px-4 py-1 rounded-lg !text-sm border-gray-500 text-gray-300">
            Explore &rarr;
          </button>

          <Meteors number={10} />
        </div>
      </div>
    </div>
  );
};

export default MeteorCard;