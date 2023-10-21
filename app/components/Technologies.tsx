import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const Technologies = () => (
  <section id="tech" className="py-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Technologies</h2>
      <p className="mt-4 text-center">
        I've worked with many web development technologies as a freelancer! Here are some.
      </p>
      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md">
          <DiReact className="text-4xl text-blue-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Front-End</h3>
            <p className="mt-2">
              Experience with React.js, HTML5, CSS3, jQuery, and Wordpress
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md">
          <DiFirebase className="text-4xl text-orange-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Back-End</h3>
            <p className="mt-2">
              Experience with Node.js, Express.js, MongoDB, Mongoose, Java, and PHP
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md">
          <DiZend className="text-4xl text-purple-500" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Programming Languages</h3>
            <p className="mt-2">
              Experience with Java, JavaScript, C, fundamentals in Python, OOPS, and DSA
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;