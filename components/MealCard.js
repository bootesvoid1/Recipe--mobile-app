// components/MealCard.js
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MealCard = ({ meal, onPress }) => {
  // Extracting main ingredients from the meal object
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`); // Combine measure and ingredient
    }
  }
  
  const ingredientList = ingredients.join(', '); // Join ingredients into a single string

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.description}>{ingredientList || 'No ingredients available'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default MealCard;
