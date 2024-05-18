'use client'
import { useState } from 'react';
import { getQuestions } from "@/app/getInterviewQns"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';


const MyForm = () => {
  const [formData, setFormData] = useState({
    text: ''
  });
  const [questions, setQuestions] = useState({
    response: ''
  });


  const [status, setStatus] = useState(null);

  const router = useRouter();


  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      text: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    let questions = await getQuestions(JSON.stringify(formData));
    router.push(`/mainPage?questions=${JSON.stringify(questions)}`);
  };


  return (
    <div className="max-w-5xl mx-auto my-10 p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Job Title:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description:</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows="12"  // Increased the number of rows for taller text area
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="Paste the job description here..."
          ></textarea>
        </div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
          Submit
        </button>
        {status === 'loading' && <p className="text-center text-sm text-blue-500">Submitting...</p>}
        {status === 'success' && <p className="text-center text-sm text-green-500">Form submitted successfully!</p>}
        {status === 'error' && <p className="text-center text-sm text-red-500">There was an error submitting the form.</p>}
      </form>
    </div>
  );  

};



export default MyForm;
