import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import ItemCategory from './src/components/ItemCategory';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <ItemCategory />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});