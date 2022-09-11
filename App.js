import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';

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


  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />

      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />

      <StatusBar />
    </View>
  )
}

