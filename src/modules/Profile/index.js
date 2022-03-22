import React, { Component } from "react";
import { SafeAreaView, View, Image } from "react-native";
import OneSignal from "react-native-onesignal";
import { ls } from "_utils";

import {
  logOut,
  getProfilePic,
  setLanguage as setLanguageCall
} from "_src/api";
import { LogOut } from "_assets/img";
import { Text, RadioButton, Button, Loader } from "_components";
import {
  container,
  topContainer,
  profileContainer,
  nameText,
  bottomContainer
} from "./styles";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: this.props.screenProps.strings().getLanguage(),
      user: {},
      loading: false,
      profilePic: ""
    };
  }

  componentDidMount() {
    this.getProfilePicture();
    ls.get("USER").then(user => {
      this.setState({ user });
    });
    ls.get("LANGUAGE").then(language => {
      this.setState({ selectedLanguage: language });
    });
  }

  getProfilePicture() {
    getProfilePic()
      .then(response => {
        this.setState({ profilePic: response.profile_pic });
      })
      .catch(error => {});
  }

  render() {
    const { strings, setLanguage } = this.props.screenProps;
    const { selectedLanguage, user, loading, profilePic } = this.state;
    return (
      <SafeAreaView style={container}>
        <View style={topContainer}>
          <Image
            style={profileContainer}
            source={{ uri: `data:image/gif;base64,${profilePic}` }}
          />
          <Text style={nameText}>{`${user.firstName} ${user.lastName}`}</Text>
        </View>
        <View style={bottomContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginRight: 30, minWidth: 80 }}>
              {strings().profile.language}
            </Text>
            <RadioButton
              selected={selectedLanguage === "sq"}
              onRadioSelect={() => {
                this.setState({ selectedLanguage: "sq" });
                setLanguage("sq");
                ls.set("LANGUAGE", "sq");
                setLanguageCall("sq");
              }}
            >
              <Text>Shqip</Text>
            </RadioButton>
            <RadioButton
              selected={selectedLanguage === "en"}
              style={{ marginLeft: 10 }}
              onRadioSelect={() => {
                this.setState({ selectedLanguage: "en" });
                setLanguage("en");
                ls.set("LANGUAGE", "en");
                setLanguageCall("en").then(response => {});
              }}
            >
              <Text>English</Text>
            </RadioButton>
          </View>

          <Loader visible={loading} />
          <Button
            Icon={() => <LogOut width={20} height={20} />}
            style={{
              position: "absolute",
              bottom: 30,
              left: 0,
              right: 0
            }}
            textStyle={{ fontWeight: "bold", fontSize: 20 }}
            text={strings().profile.logout}
            onPress={() => {
              const { oneSignalId } = user;
              this.setState({ loading: true });
              logOut(oneSignalId)
                .then(() => {
                  OneSignal.setSubscription(false);
                  const removeToken = ls.remove("TOKEN");
                  const removeUser = ls.remove("USER");
                  Promise.all([removeToken, removeUser]).then(() => {
                    this.props.navigation.navigate("Login");
                  });
                })
                .catch(() => {
                  this.setState({ loading: false });
                });
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Profile;
