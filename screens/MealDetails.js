import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';

const MealDetails = ({ route }) => {
  const { meal } = route.params;

  const instructions = meal?.strInstructions ? meal.strInstructions : 'Instructions not available';

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal?.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal?.strMeal ?? 'Meal name not available'}</Text>
      <Text style={styles.description}>{instructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default MealDetails;
