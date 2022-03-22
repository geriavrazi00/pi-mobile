import React, { Component } from "react";
import OneSignal from "react-native-onesignal";
import NavigationService from "./NavigationService";
import * as Sentry from "@sentry/react-native";
import DeviceInfo from "react-native-device-info";

import strings from "../locales";
import { ls } from "_utils";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Text } from "../src/components";

const tabTextStyle = {
  textAlign: "center",
  fontSize: 12
};

import {
  Login,
  SplashScreen,
  Dashboard,
  Today,
  Calendar,
  Schedule,
  Subject,
  SubChapters,
  Profile
} from "./modules";

import {
  CalendarImg,
  ProfileImg,
  ScheduleImg,
  TodayImg,
  DashboardImg
} from "_assets/img";

console.reportErrorsAsExceptions = false;

Sentry.init({
  dsn: "https://def693084ae54902a08f6019cc8b76ba@sentry.io/1832429"
});

Sentry.setTags({
  buildNumber: DeviceInfo.getBuildNumber(),
  deviceInfo: {
    systemName: DeviceInfo.getSystemName(),
    systemVersion: DeviceInfo.getSystemVersion(),
    deviceName: DeviceInfo.getDeviceName()
  }
});

const Splash = createStackNavigator(
  {
    SplashScreen,
    Login
  },
  {
    headerMode: "none"
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule,
    Subject,
    SubChapters
  },
  {
    headerMode: "none"
  }
);

const TabNav = createBottomTabNavigator(
  {
    Dashboard,
    Calendar,
    Today,
    Schedule: ScheduleStack,
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case "Profile":
            return (
              <Text style={{ ...tabTextStyle, color: tintColor }}>
                {strings.bottomNav.profile}
              </Text>
            );
          case "Dashboard":
            return (
              <Text style={{ ...tabTextStyle, color: tintColor }}>
                {strings.bottomNav.dashboard}
              </Text>
            );
          case "Calendar":
            return (
              <Text style={{ ...tabTextStyle, color: tintColor }}>
                {strings.bottomNav.calendar}
              </Text>
            );
          case "Today":
            return (
              <Text style={{ ...tabTextStyle, color: tintColor }}>
                {strings.bottomNav.today}
              </Text>
            );
          case "Schedule":
            return (
              <Text style={{ ...tabTextStyle, color: tintColor }}>
                {strings.bottomNav.schedule}
              </Text>
            );

          default:
            break;
        }
      },
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case "Profile":
            return <ProfileImg width={20} height={20} fill={tintColor} />;
          case "Dashboard":
            return <DashboardImg width={20} height={20} fill={tintColor} />;
          case "Calendar":
            return <CalendarImg width={20} height={20} fill={tintColor} />;
          case "Today":
            return <TodayImg width={20} height={20} fill={tintColor} />;
          case "Schedule":
            return <ScheduleImg width={20} height={20} fill={tintColor} />;
          default:
            break;
        }
      }
    })
  }
);

const AppConainer = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Splash,
      TabNav
    },
    {
      initialRouteName: "Splash"
    }
  )
);

export default class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("8548bf94-c364-45fa-a802-9f254de10de7");
    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
    OneSignal.getPermissionSubscriptionState(status => {});
    this.state = {
      language: strings.getLanguage()
    };
  }

  componentDidMount() {
    ls.get("LANGUAGE")
      .then(language => {
        console.log("language at APP: ", language);
        if (!!language) {
          strings.setLanguage(language);
          this.setState({ language });
        } else {
          ls.set("LANGUAGE", strings.getLanguage());
        }
      })
      .catch(e => {
        ls.set("LANGUAGE", strings.getLanguage());
      });
  }
  componentWillUnmount() {
    // OneSignal.removeEventListener('received', this.onReceived);
    // OneSignal.removeEventListener('opened', this.onOpened);
    // OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    // console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    // NavigationService.navigate('Splash', {
    //   notificationData: openResult.notification.payload.additionalData
    // });
  }

  onIds(device) {
    // console.log('Device info: ', device);
  }

  setLanguage = language => {
    this.setState({ language });
  };

  strings = () => {
    strings.setLanguage(this.state.language);
    return strings;
  };

  render() {
    return (
      <AppConainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        screenProps={{
          strings: this.strings,
          setLanguage: this.setLanguage
        }}
      />
    );
  }
}
