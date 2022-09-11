import { Text, View, StyleSheet, Image } from 'react-native';
import { elevation } from '../common/styles'

export default function ItemCategory() {
  return (
    <View style={[styles.container, styles.elevation]}>

      <View>
        <Image source={require('../assets/burger.png')} style={styles.image} />
      </View>

      <Text style={styles.header}>
        Burger
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    marginHorizontal: 25
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
})