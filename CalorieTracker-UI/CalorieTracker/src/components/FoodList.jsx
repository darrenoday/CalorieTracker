import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    ApiService.getAllFoods()
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the foods!", error);
      });
  }, []);

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foods.map(food => (
          <li  key={food.id}>
          <strong>{food.name}</strong> <br />
          Calories: {food.calories} kcal <br />
          Protein: {food.protein} g <br />
          Carbs: {food.carbs} g <br />
          Fats: {food.fats} g</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
