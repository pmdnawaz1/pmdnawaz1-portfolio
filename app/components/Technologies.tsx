import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { GrDeploy } from 'react-icons/gr';

const Technologies = () => (
  <section id="tech" className="p-5">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Technologies</h2>
      <p className="mt-4 text-center">
        I&apos;ve worked with many web development technologies as a freelancer! Here are some.
      </p>
      <div className="grid grid-rows-2 gap-5 mt-10 sm:grid-cols-2 lg:grid-row-3">
        <div className=" relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className=" bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:rounded-md flex flex-col items-center relative z-10">
            <div className="flex justify-center items-center">
              <DiReact className="text-4xl py-0 text-blue-500" />
              <h3 className="text-lg font-semibold ml-2">Frontend</h3>
            </div>
            <ul className="m-4 text-sm">
              <li className="bg-red-500 text-white px-2 py-1 rounded mb-1">React</li>
              <li className="bg-blue-500 text-white px-2 py-1 rounded mb-1">Next 13,</li>
              <li className="bg-green-500 text-white px-2 py-1 rounded mb-1">Angular</li>
              <li className="bg-yellow-500 text-white px-2 py-1 rounded mb-1">Nuxt</li>
              <li className="bg-purple-500 text-white px-2 py-1 rounded mb-1">Tailwind CSS</li>
              <li className="bg-pink-500 text-white px-2 py-1 rounded mb-1">Styled components</li>
              <li className="bg-pink-500 text-white px-2 py-1 rounded mb-1">Html and CSS</li>
            </ul>
          </div>
        </div>
        <div className=" relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className=" bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:rounded-md flex flex-col items-center relative z-10">
            <div className="flex items-center">
              <DiFirebase className="text-4xl py-0 text-blue-500" />
              <h3 className="text-lg font-semibold ml-2">Back-End</h3>
            </div>
            <ul className="m-4 text-sm">
              <li className="bg-red-500 text-white px-2 py-1 rounded mb-1">Node.js</li>
              <li className="bg-blue-500 text-white px-2 py-1 rounded mb-1">Express.js</li>
              <li className="bg-green-500 text-white px-2 py-1 rounded mb-1">Azure serverless functions</li>
              <li className="bg-yellow-500 text-white px-2 py-1 rounded mb-1">MongoDB</li>
              <li className="bg-purple-500 text-white px-2 py-1 rounded mb-1">Mongoose</li>
              <li className="bg-pink-500 text-white px-2 py-1 rounded mb-1">CosmosDB</li>
              <li className="bg-indigo-500 text-white px-2 py-1 rounded mb-1">SQL</li>
              <li className="bg-orange-500 text-white px-2 py-1 rounded mb-1">Java</li>
              <li className="bg-teal-500 text-white px-2 py-1 rounded">PHP</li>
            </ul>
          </div>
        </div>
        <div className=" relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className=" bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:rounded-md flex flex-col items-center relative z-10">
            <div className="flex justify-center items-center">
              <GrDeploy className="text-2xl py-0 text-blue-500" />
              <h3 className="text-lg font-semibold ml-2">Deployment</h3>
            </div>
            <ul className="m-4 text-sm">
              <li className="bg-red-500 text-white px-2 py-1 rounded mb-1">AWS</li>
              <li className="bg-blue-500 text-white px-2 py-1 rounded mb-1">Azure</li>
              <li className="bg-green-500 text-white px-2 py-1 rounded mb-1">cPanel</li>
              <li className="bg-yellow-500 text-white px-2 py-1 rounded mb-1">Hostinger</li>
              <li className="bg-purple-500 text-white px-2 py-1 rounded mb-1">Render</li>
              <li className="bg-pink-500 text-white px-2 py-1 rounded mb-1">Heroku</li>
              <li className="bg-indigo-500 text-white px-2 py-1 rounded mb-1">Vercel</li>
              <li className="bg-orange-500 text-white px-2 py-1 rounded mb-1">Netlify</li>
              <li className="bg-teal-500 text-white px-2 py-1 rounded">PHP</li>
            </ul>
          </div>
        </div>
        <div className=" relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className=" bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:rounded-md flex flex-col items-center relative z-10">
            <div className="flex justify-center items-center">
              <DiZend className="text-4xl py-0 text-blue-500" />
              <h3 className="text-lg font-semibold ml-2">Languages and concepts</h3>
            </div>
            <ul className="m-4 text-sm">
              <li className="bg-red-500 text-white px-2 py-1 rounded mb-1">JavaScript</li>
              <li className="bg-teal-500 text-white px-2 py-1 rounded">TypeScript</li>
              <li className="bg-blue-500 text-white px-2 py-1 rounded mb-1">Express.js</li>
              <li className="bg-green-500 text-white px-2 py-1 rounded mb-1"> C fundamentals</li>
              <li className="bg-yellow-500 text-white px-2 py-1 rounded mb-1">Python</li>
              <li className="bg-purple-500 text-white px-2 py-1 rounded mb-1">Oops</li>
              <li className="bg-pink-500 text-white px-2 py-1 rounded mb-1">Dsa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;