'use client'
import { useState } from 'react';



const Feedback = () => {
    const [formData, setFormData] = useState({
        text: ''
      });
      const [questions, setQuestions] = useState({
        response: ''
      });
      const [status, setStatus] = useState(null);
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
        setQuestions(getQuestions(JSON.stringify(formData)))
      };
  return (
    <div className=" w-4/5 mx-auto my-10 p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
          <textarea
            id="Feedback"
            name="Feedback"
            onChange={handleChange}
            rows="20"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            readOnly
          ></textarea>
    </div>
  );  

};



export default Feedback;
