import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OneSignal from "react-native-onesignal";

import { login } from "_src/api";
import { ls } from "_utils";
import { Input, Button, Alert, Loader } from "_components";
import { container, button, buttonText } from "./styles";
import { Logo, Avatar, Lock } from "_assets/img";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registryNumber: "",
      password: "",
      userId: "",
      loading: false
    };
  }

  onLoginPress = () => {
    const { strings } = this.props.screenProps;
    const { registryNumber, password, userId = "" } = this.state;
    if (registryNumber === "") {
      Alert({
        title: strings().notifications.emptyField,
        message: strings().notifications.emptyRegNumber
      });
      return;
    }
    if (password === "") {
      Alert({
        title: strings().notifications.emptyField,
        message: strings().notifications.emptyPassword
      });
      return;
    }
    this.setState({ loading: true });
    OneSignal.getPermissionSubscriptionState(status => {
      this.setState({ userId: status.userId });
      login({
        registryNumber,
        password,
        userId: status.userId
      })
        .then(data => {
          const {
            id,
            firstname: firstName,
            lastname: lastName,
            profilepicture: profilePicture,
            api_token: token
          } = data;
          OneSignal.setSubscription(true);
          const saveToken = ls.set("TOKEN", token);
          const saveUser = ls.set("USER", {
            id,
            firstName,
            lastName,
            profilePicture,
            oneSignalId: status.userId
          });

          Promise.all([saveUser, saveToken]).then(() => {
            this.props.navigation.navigate("TabNav");
          });
        })
        .catch(error => {
          this.setState({ loading: false }, () => {
            setTimeout(function() {
              Alert({
                title: strings().notifications.error,
                message:
                  !!error && !!error.data && !!error.data.error
                    ? error.data.error
                    : strings().notifications.checkCredentials
              });
            }, 0.0001);
          });
        });
    });
  };

  handleLoginErrorMessage(error) {
    if (error && error.data && error.data.error) {
      return error.data.error;
    } else {
      return null;
    }
  }

  render() {
    const { registryNumber, password, loading } = this.state;
    const { strings } = this.props.screenProps;
    return (
      <SafeAreaView style={container}>
        <Loader visible={loading} />
        <KeyboardAwareScrollView
          style={{ alignSelf: "stretch" }}
          contentContainerStyle={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 30
          }}
        >
          <Logo style={{ width: 40, height: 40 }} />
          <Input
            style={{ alignSelf: "stretch" }}
            placeholder={strings().login.registry}
            onChange={value => {
              this.setState({ registryNumber: value });
            }}
            value={registryNumber}
            Icon={Avatar}
          />
          <Input
            style={{ marginTop: 20, alignSelf: "stretch" }}
            placeholder={strings().login.password}
            secureTextEntry={true}
            onChange={value => {
              this.setState({ password: value });
            }}
            value={password}
            Icon={Lock}
          />
          <Button
            style={[button, { alignSelf: "stretch" }]}
            textStyle={buttonText}
            text={strings().login.title.toUpperCase()}
            onPress={this.onLoginPress}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
