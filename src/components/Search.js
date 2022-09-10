import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Search() {
  return (
    <View>
      <FontAwesome name="search" size="25" />
      <TextInput placeholder='Restaurants, food' />
    </View>
  )
}