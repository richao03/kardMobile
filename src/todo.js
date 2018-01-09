/**
 * Sample React Native Todo
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Switch
} from "react-native";
import TabView from "react-native-scrollable-tab-view";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1, 2, 3],
      newTodo: ""
    };
  }

  handleChange(text) {
    this.setState({ newTodo: text.toString() });
  }

  handlePress() {
    if (this.state.newTodo.length > 0) {
      const todos = [...this.state.todos, this.state.newTodo];
      this.setState({
        todos,
        newTodo: ""
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handlePress.bind(this)}
        >
          <Text>tap me NOW! </Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    height: height
  },
  textInput: {
    borderColor: "yellow",
    borderWidth: 1,
    width: width
  },
  button: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    width: 200,
    alignItems: "center"
  }
});
