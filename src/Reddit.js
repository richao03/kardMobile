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

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    fetch("https://www.reddit.com/.json", {
      Accept: "application/json"
    })
      .then(res => res.json())
      .then(data => {
        console.log("this is data", data);
        return data;
      })
      .then(data => this.setState({ post: data.data.children }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          {this.state.post.map((post, i) => (
            <Text key={i}>{post.data.author}</Text>
          ))}
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
  box: {
    alignItems: "center",
    backgroundColor: "yellow",
    width: width
  },
  text: {
    color: "red",
    fontSize: 20
  }
});
