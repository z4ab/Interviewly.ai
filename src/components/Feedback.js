'use client'
const Feedback = ({ text }) => {

  return (
    <div className="w-4/5 text-3xl mx-auto my-10 p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
      <textarea
        id="Feedback"
        name="Feedback"
        rows="20"
        className="mt-1 block text-xl w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        readOnly
        value={text}
      ></textarea>
    </div>
    
  );
};

export default Feedback;
