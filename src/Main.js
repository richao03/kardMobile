/**
 * Sample React Native Main
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
import { Fancy } from "./fancy.js";
import { Reddit } from "./Reddit.js";
import { Todo } from "./todo.js";
import { Login } from './login.js';
import TabView from "react-native-scrollable-tab-view";

export const Main = props => (
  <TabView tabBarPosition="bottom">
    <Todo tabLabel="Todos" />
    <Reddit tabLabel="Reddit"/>
    <Fancy tabLabel="Fancy" />
    <Todo tabLabel="todo2" />
    <Login tabLabel="Login"/>
  </TabView>
);

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
