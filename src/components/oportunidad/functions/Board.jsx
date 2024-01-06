import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHZXFSkWZyuFDOdXk4em5E69U42gcEfcQ",
  authDomain: "aprominc-oportunidades.firebaseapp.com",
  projectId: "aprominc-oportunidades",
  storageBucket: "aprominc-oportunidades.appspot.com",
  messagingSenderId: "1081489803329",
  appId: "1:1081489803329:web:04f35d165093537126dec0",
  measurementId: "G-YRZ2Q6NTPK"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const Board = () => {
  const initialContent = [
    { small: 1, values: [1, 1, 1] },
    { small: 2, values: [1, 2, 2] },
    { small: 3, values: [1, 3, 3] },
    { small: 4, values: [1, 1, 1] },
  ];

  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardRef = doc(firestore, 'boards', 'board1');
        const boardSnapshot = await getDoc(boardRef);

        if (boardSnapshot.exists()) {
          const retrievedContent = boardSnapshot.data().content;
          console.log('Retrieved Content:', retrievedContent);
          setContent(retrievedContent);
        } else {
          console.log('Document does not exist. Setting initial content.');
          await setDoc(boardRef, { content: initialContent });
          setContent(initialContent);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleCellChange = async (rowIndex, cellType, newValue) => {
    const newContent = [...content];

    if (cellType === 'small') {
      newContent[rowIndex].small = newValue;
    } else {
      newContent[rowIndex].values[cellType] = newValue;
    }

    setContent(newContent);

    const boardRef = doc(firestore, 'boards', 'board1');
    await setDoc(boardRef, { content: newContent });
  };

  return (
    <>
      <button onClick={handleEditToggle}>
        {editable ? 'Disable Edit' : 'Enable Edit'}
      </button>
      {content.map((row, rowIndex) => (
        <div key={rowIndex}>
          <small>
            {editable ? (
              <input
                type="text"
                value={row.small}
                onChange={(e) => handleCellChange(rowIndex, 'small', e.target.value)}
              />
            ) : (
              row.small
            )}
          </small>
          <ul>
            {row.values.map((cell, columnIndex) => (
              <li key={columnIndex}>
                {editable ? (
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                  />
                ) : (
                  cell
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

