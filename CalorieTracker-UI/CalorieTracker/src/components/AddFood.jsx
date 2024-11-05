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
      <input type="text" name="name" value={food.name} onChange={handleChange} placeholder="Food Name" required />
      <input type="number" name="calories" value={food.calories} onChange={handleChange} placeholder="Calories" required />
      <input type="number" name="protein" value={food.protein} onChange={handleChange} placeholder="Protein (g)" />
      <input type="number" name="carbs" value={food.carbs} onChange={handleChange} placeholder="Carbs (g)" />
      <input type="number" name="fats" value={food.fats} onChange={handleChange} placeholder="Fats (g)" />
      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFood;
