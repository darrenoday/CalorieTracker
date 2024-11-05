import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api";

class ApiService {
  // Fetch all foods
  getAllFoods() {
    return axios.get(`${API_BASE_URL}/foods`);
  }

  // Add a new food
  addFood(food) {
    return axios.post(`${API_BASE_URL}/foods`, food);
  }

  // Get food entries by user and date
  getEntriesByDate(userId, date) {
    return axios.get(`${API_BASE_URL}/entries/${userId}/${date}`);
  }
}

export default new ApiService();
