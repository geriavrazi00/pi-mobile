import React, { Component } from "react";
import { SafeAreaView } from "react-native";

import { ls } from "_utils";
import { Logo, FrontWave, BackWave } from "_assets/img";
import { container, wave } from "./styles";

class SplashScreen extends Component {
  componentDidMount() {
    ls.get("TOKEN")
      .then(token => {
        if (!!token) {
          this.props.navigation.navigate("TabNav");
        } else {
          this.props.navigation.navigate("Login");
        }
      })
      .catch(error => {
        this.props.navigation.navigate("Login");
      });
  }

  render() {
    return (
      <SafeAreaView style={container}>
        <Logo />
        <FrontWave style={wave} />
        <BackWave style={[wave, { left: 50 }]} />
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
