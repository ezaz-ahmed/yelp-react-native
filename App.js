import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';
import useRestaurants from './src/hooks/useRestaurants';

export default function App() {

  const [term, setTerm] = useState("Burger");
  const [commonCategories] = useState([
    {
      name: "Burger",
      img: require("./src/assets/burger.png"),
    },
    {
      name: "Pizza",
      img: require("./src/assets/pizza.png"),
    },
    {
      name: "Dessert",
      img: require("./src/assets/cake.png"),
    },
    {
      name: "Drinks",
      img: require("./src/assets/smoothies.png"),
    },
    {
      name: "Steak",
      img: require("./src/assets/steak.png"),
    },
    {
      name: "Pasta",
      img: require("./src/assets/pasta.png"),
    },
  ]);

  const [{ data, loading, error }, searchResaurants] = useRestaurants(term);

  useEffect(() => {
    searchResaurants(term);
  }, [term]);

  console.log(data)

  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />

      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />

      <Restaurants data={data} loading={loading} />

      <StatusBar />
    </View>
  )
}

