// screens/MealList.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import MealCard from '../components/MealCard';
import { fetchMeals } from '../services/MealService';

const MealList = ({ navigation }) => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const data = await fetchMeals();
      setMeals(data);
      setFilteredMeals(data);
    };
    loadMeals();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredMeals(
        meals.filter(meal =>
          meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMeals(meals);
    }
  }, [searchQuery, meals]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a meal..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onPress={() => navigation.navigate('Details', { meal: item })}
          />
        )}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  searchContainer: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
  },
});

export default MealList;
