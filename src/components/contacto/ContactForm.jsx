import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    reason: '',
    recipient: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='shold'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label> <br />
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required /> <br />

        <label htmlFor="age">Age:</label><br />
        <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} required /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br />

        <label htmlFor="reason">Reason for Texting:</label><br />
        <textarea id="reason" name="reason" value={formData.reason} onChange={handleInputChange} rows="4" required></textarea><br />

        <label htmlFor="recipient">Recipient:</label><br />
        <select id="recipient" name="recipient" value={formData.recipient} onChange={handleInputChange} required> <br />
          <option value="" disabled>Select recipient</option><br />
          <option value="fakeemail1@example.com">Fake Email 1</option><br />
          <option value="fakeemail2@example.com">Fake Email 2</option><br />
          <option value="fakeemail3@example.com">Fake Email 3</option><br />
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
