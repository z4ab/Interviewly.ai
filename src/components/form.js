'use client'
import { useState } from 'react';
import { getQuestions } from "@/app/getInterviewQns"


const MyForm = () => {
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
    <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
            <label htmlFor="name" className="form-label">Job:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
            />
        </div>
        <button type="submit" className="form-button">Submit</button>
        {status === 'loading' && <p className="status-message">Submitting...</p>}
        {status === 'success' && <p className="status-message success">Form submitted successfully!</p>}
        {status === 'error' && <p className="status-message error">There was an error submitting the form.</p>}
    </form>


   
  );
};


export default MyForm;
