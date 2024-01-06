import React, { useState } from 'react';

export const ContactForm = () => {
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className='shold'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Nombre Completo:</label> <br />
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="Inputsbb" required /> <br />

        <label htmlFor="age">Cargo:</label><br />
        <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} className="Inputsbb" required /><br />

        <label htmlFor="email">Correo Electronico:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="Inputsbb" required /><br />

        <label htmlFor="reason">Motivo:</label><br />
        <textarea id="reason" name="reason" value={formData.reason} onChange={handleInputChange} rows="4" className="Inputsbb" required></textarea><br />

        <label htmlFor="recipient">Area a comunicarse:</label><br />
        <select id="recipient" name="recipient" value={formData.recipient} onChange={handleInputChange} className="Inputsbb" required>
          <option value="" disabled>Selecciona Area</option>
          <option value="fakeemail1@example.com">Fake Email 1</option>
          <option value="fakeemail2@example.com">Fake Email 2</option>
          <option value="fakeemail3@example.com">Fake Email 3</option>
        </select> <br />

        <button type="submit" className='btype2'>Submit</button>
      </form>
    </div>
  );
};

