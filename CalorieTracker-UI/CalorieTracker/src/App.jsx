
import React from 'react';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import DailyTracker from './components/DailyTracker';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Nutrition Tracker</h1>
      <AddFood />
      <FoodList />
      <DailyTracker />
    </div>
  );
}

export default App
