import React, { useState } from 'react';

export default function ContactUsRight() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    messageSubject: '',
    country: '',
    inquiryType: '',
    comments: '',
    agree: false
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.userName) tempErrors.userName = "User Name is required.";
    if (!formData.userEmail) {
      tempErrors.userEmail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      tempErrors.userEmail = "Email is not valid.";
    }
    if (!formData.messageSubject) tempErrors.messageSubject = "Subject is required.";
    if (!formData.country) tempErrors.country = "Country is required.";
    if (!formData.inquiryType) tempErrors.inquiryType = "Inquiry Type is required.";
    if (!formData.agree) tempErrors.agree = "You must agree to the privacy policy.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid! Submitting...');
    }
  };

  return (
    <div className="w-[50%] h-full rounded-md bg-white px-6 py-6 shadow-lg border sm:rounded-lg">
      <form onSubmit={handleSubmit} className="group">
        <div className="mt-4">
          <label htmlFor="userName" className="mb-2 block text-sm font-medium text-gray-900">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.userName ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.userName && <p className="mt-1 text-sm text-red-500">{errors.userName}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="userEmail" className="mb-2 block text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.userEmail ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.userEmail && <p className="mt-1 text-sm text-red-500">{errors.userEmail}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="messageSubject" className="mb-2 block text-sm font-medium text-gray-900">Subject</label>
          <input
            type="text"
            name="messageSubject"
            value={formData.messageSubject}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.messageSubject ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.messageSubject && <p className="mt-1 text-sm text-red-500">{errors.messageSubject}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-900">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.country ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          >
            <option value="">Select</option>
            <option value="Country 1">Country 1</option>
            <option value="Country 2">Country 2</option>
            <option value="Country 3">Country 3</option>
          </select>
          {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-gray-900">Inquiry Type</label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          >
            <option value="">Select</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Business Partnership">Business Partnership</option>
          </select>
          {errors.inquiryType && <p className="mt-1 text-sm text-red-500">{errors.inquiryType}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="comments" className="mb-2 block text-sm font-medium text-gray-900">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.comments ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          ></textarea>
          {errors.comments && <p className="mt-1 text-sm text-red-500">{errors.comments}</p>}
        </div>

        <div className="mt-4 flex flex-col items-start">
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className={`h-4 w-4 rounded border ${errors.agree ? 'border-red-500' : 'border-gray-300'} text-indigo-600 focus:ring-pink-500`}
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">I'd like to receive more information about the streaming portal; I understand and agree to the privacy policy.</label>
          </div>
          {errors.agree && <p className="mt-1 text-sm text-red-500">{errors.agree}</p>}
        </div>

        <div className="mt-4 flex items-center">
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
