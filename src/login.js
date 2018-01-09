import React, { Component } from "react";
import axios from "axios";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import t from "tcomb-form-native";
import bcrypt from "react-native-bcrypt";

const Form = t.form.Form;
const User = t.struct({
  email: t.String,
  password: t.String
  // rememberMe: t.Boolean
});
const options = {
  fields: {
    password: {
      type: "password",
      placeholder: "Password",
      autoCapitalize: "none",
      secureTextEntry: true
    },
    email: {
      placeholder: "e.g: abc@gmail.com",
      autoCapitalize: "none",
      error: "Insert a valid email"
    }
  }
};

const encryptFormData = formData => {
  const { password, passwordConfirmation, email } = formData;
  const encryptFormData = {};
  let salt = "$2a$08$6nuyDWUr0rd3M4hpeMZSw.";
  encryptFormData.email = email;
  encryptFormData.password = bcrypt.hashSync(password, salt);
  if (passwordConfirmation) {
    encryptFormData.passwordConfirmation = bcrypt.hashSync(password, salt);
  }
  return encryptFormData;
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    console.log("we monting");
    // return axios
    //   .get(`http://local.getkard.com:3000/auth/mobile/start`)
    //   .then(res => {
    //     console.log("res",res)
    //   })
    //   .catch((err)=>{console.log("err,", err)});
    fetch("http://local.getkard.com:3000/auth/mobile/start", {
      Accept: "application/json"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data })
        console.log("this.state", this.state)
      });
  }

  onPress() {
    // call getValue() to get the values of the form
        console.log(this.state.user.res);
    var value = this.refs.form.getValue();
    let secret = encryptFormData(value);
    if (secret) {
      // if validation fails, value will be null
      console.log(secret); // value here is an instance of Person
    }
    return axios
      .post(`http://local.getkard.com:3000/auth/local/login`, secret, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-XSRF-TOKEN": this.state.user.res,
          "X-CSRF-TOKEN": this.state.user.res // Trying this as well
        }
      })
      .then(res => {
        console.log("this is res", res);
        this.setState({ user: res.data.user });
      })
      .catch(err => console.log("err", err));
  }

  onPressGet() {
    console.log("on press");

    // call getValue() to get the values of the form
    console.log(this.state.user.res);
  }

  render() {
    return (
      <View style={styles.container}>
        <Form ref="form" type={User} options={options}>
          <input type="hidden" name="csrf-token" value={this.state.user.res} />
        </Form>
        <Text>{this.state.user.email}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress.bind(this)}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPressGet.bind(this)}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>getButton</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
