import { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { elevation } from '../common/styles';

export default function Search({ setTerm }) {

  const [input, setInput] = useState("")

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome5 name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder='Restaurants, food'
        value={input}
        onChangeText={text => setInput(text)}
        onEndEditing={() => {
          if (input) setTerm(input);
          setInput("");
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10
  }
})