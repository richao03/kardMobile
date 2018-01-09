import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";

export class Fancy extends Component {
  render() {
    return <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}> Sup Doe</Text>
        </View>
      </View>;
  }
}
const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems:"center",
    height:height,
  },
  box:{
    alignItems:"center",
    backgroundColor:"yellow",
    width:width,
  },
  text:{
    color:"red",
    fontSize:20,

  }
});
