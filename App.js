/**
 * Sample React Native App
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
import { Fancy } from "./src/fancy.js";
import { Reddit } from "./src/Reddit.js";
import { Todo } from "./src/todo.js";
import { Main } from "./src/Main.js";
import { Welcome } from "./src/welcome/welcome.js";
import TabView from "react-native-scrollable-tab-view";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
  }

  startUsing = () => {
    this.setState({ started: true });
  };

  renderRoot(ComponentToRender) {
    return <ComponentToRender startUsing={this.startUsing} />;
  }

  render() {
    const { started } = this.state;
    return started ? this.renderRoot(Main) : this.renderRoot(Welcome);
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
