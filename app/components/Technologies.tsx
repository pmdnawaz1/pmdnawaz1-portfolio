import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { GrDeploy } from 'react-icons/gr';

const Technologies = () => (
  <section id="tech" className="p-5">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Technologies</h2>
      <p className="mt-4 text-center">
        I've worked with many web development technologies as a freelancer! Here are some.
      </p>
      <div className="grid grid-rows-2 gap-6 mt-10 sm:grid-cols-2 lg:grid-row-3">
        <div className="flex justify-center p-4 relative">
          <div className="absolute -top-2 -right-2 -bottom-2 -left-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-0 hover:opacity-100 transition duration-1000"></div>
          <div className="bg-white border border-gray-300 rounded-md hover:bg-gray-100 flex relative z-10">
            <DiReact className="text-8xl py-0 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Front-End</h3>
              <p className="mt-2 text-sm">
                React, Next 13, Angular, Nuxt, Tailwind CSS, Styled components
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md hover:">
          <DiFirebase className="text-8xl text-orange-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Back-End</h3>
            <p className="mt-2 text-sm">
              Node.js, Express.js, Azure serverless functions, MongoDB, Mongoose, CosmosDB, SQL, Java, and PHP
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          <DiZend className="text-8xl text-purple-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Languages</h3>
            <p className="mt-2 text-sm">
              Java, JavaScript, C, fundamentals in Python, OOPS, and DSA
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          <GrDeploy className="text-5xl text-orange-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Deployment</h3>
            <p className="mt-2 text-sm">
              AWS, Azure, cPanel, Hostinger, Render, Heroku, Vercel, and Netlify
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;