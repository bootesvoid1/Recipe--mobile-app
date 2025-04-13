// services/mealsService.js
import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; // Change this URL based on the API you're using

export const fetchMeals = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.meals; // Return the meals array
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
};

// Fetch meal details by ID if needed
export const fetchMealDetails = async (id) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data.meals[0]; // Return the single meal object
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
};
