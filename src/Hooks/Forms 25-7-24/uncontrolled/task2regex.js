import React, { useState } from 'react';

const FormComponent = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/; // Assuming a 10-digit phone number without country code
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const postalCodeRegex = /^\d{5}(-\d{4})?$/; // For 5-digit or 5+4 ZIP codes
    const policyNumberRegex = /^[A-Z0-9]{6,12}$/; // Example format: alphanumeric, 6-12 characters


  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    date: '',
    postalCode: '',
    policyNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!phoneNumberRegex.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!dateRegex.test(formData.date)) newErrors.date = 'Invalid date format';
    if (!postalCodeRegex.test(formData.postalCode)) newErrors.postalCode = 'Invalid postal code';
    if (!policyNumberRegex.test(formData.policyNumber)) newErrors.policyNumber = 'Invalid policy number';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

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
          type="text"
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
          type="text"
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
