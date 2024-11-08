import React, { useState } from 'react';
import ApiService from '../services/ApiService';

function AddFood() {
  const [food, setFood] = useState({ name: '', calories: 0, protein: 0, carbs: 0, fats: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.addFood(food)
      .then(() => {
        alert("Food added successfully!");
        setFood({ name: '', calories: 0, protein: 0, carbs: 0, fats: 0 });
      })
      .catch(error => {
        console.error("There was an error adding the food!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Add Food</h2>

    <label htmlFor="name">Food Name</label>
    <input
      type="text"
      id="name"
      name="name"
      value={food.name}
      onChange={handleChange}
      placeholder="Food Name"
      required
    />

    <label htmlFor="calories">Calories</label>
    <input
      type="number"
      id="calories"
      name="calories"
      value={food.calories}
      onChange={handleChange}
      placeholder="Calories"
      required
    />

    <label htmlFor="protein">Protein (g)</label>
    <input
      type="number"
      id="protein"
      name="protein"
      value={food.protein}
      onChange={handleChange}
      placeholder="Protein (g)"
    />

    <label htmlFor="carbs">Carbs (g)</label>
    <input
      type="number"
      id="carbs"
      name="carbs"
      value={food.carbs}
      onChange={handleChange}
      placeholder="Carbs (g)"
    />

    <label htmlFor="fats">Fats (g)</label>
    <input
      type="number"
      id="fats"
      name="fats"
      value={food.fats}
      onChange={handleChange}
      placeholder="Fats (g)"
    />

    <button type="submit">Add Food</button>
  </form>
  );
}

export default AddFood;
