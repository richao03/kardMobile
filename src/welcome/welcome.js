import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import Swiper from "react-native-swiper";
import { Login } from "../login.js";
import LinearGradient from "react-native-linear-gradient";

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  render(){
    return (
      <View style={styles.container}>
           <Swiper style={styles.wrapper} showsButtons={true}>
             <LinearGradient colors={["#1AD6FD", "#1D62F0"]} style={styles.slide1}>
               <Text style={styles.text1}>Welcome to Kard</Text>
             </LinearGradient>

             <LinearGradient colors={["#DBDDDE", "#898C90"]} style={styles.slide2}>
               <Text style={styles.text}>How Great to Kard</Text>
             </LinearGradient>

             <LinearGradient colors={["#C644FC", "#5856D6"]} style={styles.slide3}>
               <View>
                 <Text>Do you wanna start karding?</Text>
               </View>
               <TouchableOpacity onPress={this.props.startUsing} style={styles.button}>
                 <Text style={styles.text3}> start karding </Text>
               </TouchableOpacity>
             </LinearGradient>

             <LinearGradient colors={["#C644FC", "#5856D6"]} style={styles.slide3}>
           
             </LinearGradient>
           </Swiper>
         </View>
    )
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderColor: "yellow",
    borderWidth: 5,
    borderRadius: 8,
    top: 150
  },
  stripe: {
    width: 20,
    height: 1000,
    flex: 3,
    backgroundColor: "black"
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  slide5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  slide6: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  text1: {
    color: "#32526e",
    fontSize: 30,
    fontWeight: "bold"
  },
  text3: {
    padding: 10,
    color: "yellow",
    fontSize: 30,
    fontWeight: "bold"
  },
  textInput: {
    padding: 10,
    borderWidth:3,
    borderColor:"black",
    color: "yellow",
    fontSize: 30,
    fontWeight: "bold",
    width:300
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  }
});
