import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import DailyTracker from './components/DailyTracker';
import FoodFact from './components/FoodFact';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // New state for toggling login/register forms

  return (
    <div className="App">
      <h1>Nutrition Tracker</h1>
      {authenticated ? (
        <Dashboard />
      ) : (
        <>
          {isRegistering ? (
            <Register />
          ) : (
            <LoginForm setAuthenticated={setAuthenticated} />
          )}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Already have an account? Log In' : 'Create an account'}
          </button>
        </>
      )}
      {authenticated && (
        <>
          <FoodFact />
          <AddFood />
          <FoodList />
          <DailyTracker />
        </>
      )}
    </div>
  );
}

export default App;
