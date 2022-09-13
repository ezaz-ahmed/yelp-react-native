import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import RestaurantItem from './RestaurantItem';

export default function Restaurants({ data, loading }) {

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>

      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", { id: item.id })}
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
