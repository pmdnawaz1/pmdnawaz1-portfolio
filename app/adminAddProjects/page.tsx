'use client';
import React from 'react';

export default function AdminPage() {
  const handleAddProject = (event :React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const projectName = (event.target as HTMLFormElement).projectName.value;
    const projectDescription = (event.target as HTMLFormElement).projectDescription.value;
    const projectLink = (event.target as HTMLFormElement).projectLink.value;
    const adminSecret = (event.target as HTMLFormElement).adminSecret.value;
    fetch('/api/projectDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `LOL ${adminSecret}`,
      },
      body: JSON.stringify({
        projectName,
         projectDescription,
        projectLink,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to post project details');
        }
        console.log('Project details posted successfully');
      })
      .catch((error) => { 
        console.error(error);
        alert('Failed to post project details');
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleAddProject}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Sarfaraz Nawaz&apos;s Projects</h5>
          <div>
            <label htmlFor="projectName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
            <input type="text" name="projectName" id="projectName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Add Project Name of Sarfaraz" required />
          </div>
          <div>
            <label htmlFor="projectDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
            <input type="text" name="projectDescription" id="projectDescription" placeholder="Add Project Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="projectLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Link</label>
            <input type="text" name="projectLink" id="projectLink" placeholder="Add Project Link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="adminSecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sarfaraz&apos;s Secret</label>
            <input type="text" name="adminSecret" id="adminSecret" placeholder="Secret code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Project</button>
        </form>
      </div>
    </div>
  );
}