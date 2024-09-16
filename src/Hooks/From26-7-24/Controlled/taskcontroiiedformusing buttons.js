import React, { useState } from 'react';

const FormComponent1 = () => {
  // Initial state for form fields
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    date: '',
    postalCode: '',
    policyNumber: '',
    agreeTerms: false,
    gender: '',
    country: 'US',
  });

  // State to hold error messages
  const [errors, setErrors] = useState({});

  // Handler to update form state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/; // Adjust as needed
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    const policyNumberRegex = /^[A-Z0-9]{6,12}$/;

    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!phoneNumberRegex.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!dateRegex.test(formData.date)) newErrors.date = 'Invalid date format';
    if (!postalCodeRegex.test(formData.postalCode)) newErrors.postalCode = 'Invalid postal code';
    if (!policyNumberRegex.test(formData.policyNumber)) newErrors.policyNumber = 'Invalid policy number';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    if (!formData.gender) newErrors.gender = 'Please select a gender';
    if (!formData.country) newErrors.country = 'Country is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span>{errors.date}</span>}
      </div>

      <div>
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
        {errors.postalCode && <span>{errors.postalCode}</span>}
      </div>

      <div>
        <label>Policy Number:</label>
        <input
          type="text"
          name="policyNumber"
          value={formData.policyNumber}
          onChange={handleChange}
        />
        {errors.policyNumber && <span>{errors.policyNumber}</span>}
      </div>

      <div>
        <label>Agree to Terms:</label>
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
        />
        {errors.agreeTerms && <span>{errors.agreeTerms}</span>}
      </div>

      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        {errors.gender && <span>{errors.gender}</span>}
      </div>

      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
          {/* Add more options as needed */}
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent1;
