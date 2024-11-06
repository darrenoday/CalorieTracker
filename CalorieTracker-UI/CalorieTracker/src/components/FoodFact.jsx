import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FoodFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchRandomFact();
  }, []);

  const fetchRandomFact = () => {
    axios.get('http://localhost:8080/api/randomFact')
      .then(response => {
        setFact(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the fact!", error);
      });
  };

  return (
    <div className="food-fact">
      <h3>Did You Know?</h3>
      <p>{fact}</p>
      <button onClick={fetchRandomFact}>Get Another Fact</button>
    </div>
  );
}

export default FoodFact;
