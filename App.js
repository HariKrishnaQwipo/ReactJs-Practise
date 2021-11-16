import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import SingleTodo from './Components/singleTodo';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todo) return;

    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> React Native Mobile Application</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter a Text" style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
      <view style={{ width: "100%", marginTop: 10 }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <SingleTodo
              todo={item}
              todos={todos}
              setTodos={setTodos} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </view>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(25,76,87)",
  },
  heading: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    shadowColor: "black",
    elevation: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  input1: {
    elevation: 10,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
  }

});