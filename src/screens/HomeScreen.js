import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import useRestaurants from '../hooks/useRestaurants'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Restaurants from '../components/Restaurants'
import Search from '../components/Search'

export default function HomeScreen() {
  const [term, setTerm] = useState("");
  const [commonCategories] = useState([
    {
      name: "Burger",
      img: require("../assets/burger.png"),
    },
    {
      name: "Pizza",
      img: require("../assets/pizza.png"),
    },
    {
      name: "Dessert",
      img: require("../assets/cake.png"),
    },
    {
      name: "Drinks",
      img: require("../assets/smoothies.png"),
    },
    {
      name: "Steak",
      img: require("../assets/steak.png"),
    },
    {
      name: "Pasta",
      img: require("../assets/pasta.png"),
    },
  ]);

  const [{ data, loading, error }, searchResaurants] = useRestaurants(term);

  useEffect(() => {
    searchResaurants(term);
  }, [term]);

  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />

      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />

      <Restaurants data={data} loading={loading} error={error} />

      <StatusBar />
    </View>
  )
}