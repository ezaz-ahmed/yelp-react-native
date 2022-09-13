import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RestaurantItem from './RestaurantItem';

function Restaurants({ data, loading, error }) {

  const navigation = useNavigation();

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>

      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate({ name: "Restaurant", params: { id: item.id }, merge: true, })}
          >
            <RestaurantItem restaurant={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default Restaurants