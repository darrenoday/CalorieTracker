import React, { useState } from 'react';
import ApiService from '../services/ApiService';

function DailyTracker() {
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState('');
  const [totalCalories, setTotalCalories] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.getEntriesByDate(userId, date)
      .then(response => {
        setTotalCalories(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the entries!", error);
      });
  };

  return (
    <div>
      <h2>Daily Calorie Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Get Total Calories</button>
      </form>
      {totalCalories && <p>Total Calories: {totalCalories}</p>}
    </div>
  );
}

export default DailyTracker;
