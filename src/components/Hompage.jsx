import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Hompage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setMessage(response.data);
      } catch (error) {
        console.error('Error fetching the message:', error);
        setMessage('Error connecting to the server');
      }
    };
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Hompage