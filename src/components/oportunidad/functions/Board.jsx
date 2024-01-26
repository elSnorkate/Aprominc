import React, { useState } from 'react';

export const Board = () => {
  const [inputs1, setInputs1] = useState({
    input1: '',
    input2: '',
  });

  const [inputs2, setInputs2] = useState({
    input1: '',
    input2: '',
  });

  const [inputs3, setInputs3] = useState({
    input1: '',
    input2: '',
  });

  const [inputs4, setInputs4] = useState({
    input1: '',
    input2: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (setInputs, inputName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };

  const handleEnterPress = (setInputs, inputName, value) => {
    if (value && value.trim() !== '') {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [inputName]: prevInputs[inputName] + value + '\n',
      }));
      // Clear the input field
      setInputs((prevInputs) => ({
        ...prevInputs,
        [inputName]: '',
      }));
    }
  };

  const handleButtonToggle = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Input 1"
          value={inputs1.input1}
          onChange={(e) => handleInputChange(setInputs1, 'input1', e.target.value)}
          disabled={!isEditing}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={inputs1.input2}
          onChange={(e) => handleInputChange(setInputs1, 'input2', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleEnterPress(setInputs1, 'input2', e.target.value);
            }
          }}
          disabled={!isEditing}
        />
        <p className="class1">{inputs1.input1}</p>
        <ul>
          {inputs1.input2.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Input 1"
          value={inputs2.input1}
          onChange={(e) => handleInputChange(setInputs2, 'input1', e.target.value)}
          disabled={!isEditing}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={inputs2.input2}
          onChange={(e) => handleInputChange(setInputs2, 'input2', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleEnterPress(setInputs2, 'input2', e.target.value);
            }
          }}
          disabled={!isEditing}
        />
        <p className="class1">{inputs2.input1}</p>
        <ul>
          {inputs2.input2.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Input 1"
          value={inputs3.input1}
          onChange={(e) => handleInputChange(setInputs3, 'input1', e.target.value)}
          disabled={!isEditing}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={inputs3.input2}
          onChange={(e) => handleInputChange(setInputs3, 'input2', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleEnterPress(setInputs3, 'input2', e.target.value);
            }
          }}
          disabled={!isEditing}
        />
        <p className="class1">{inputs3.input1}</p>
        <ul>
          {inputs3.input2.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Input 1"
          value={inputs4.input1}
          onChange={(e) => handleInputChange(setInputs4, 'input1', e.target.value)}
          disabled={!isEditing}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={inputs4.input2}
          onChange={(e) => handleInputChange(setInputs4, 'input2', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleEnterPress(setInputs4, 'input2', e.target.value);
            }
          }}
          disabled={!isEditing}
        />
        <p className="class1">{inputs4.input1}</p>
        <ul>
          {inputs4.input2.split('\n').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleButtonToggle}>{isEditing ? 'Save Edits' : 'Enable Edit'}</button>
    </div>
  );
};
