import React, { Component } from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { getSubject } from "_src/api";
import { Back } from "_assets/img";
import Stats from "./Stats";
import Syllabus from "./Syllabus";
import { Text, Loader, NotFound } from "_components";
import { colors } from "_constants";
class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      subject: "",
      loading: false,
      notFound: false,
      absencesWidget: {},
      gradesWidget: {},
      monthlyAverage: {
        labels: ["", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      syllabus: {},
      routes: [
        { key: "stats", title: "Stats" },
        { key: "syllabus", title: "Syllabus" }
      ]
    };
  }

  componentDidMount() {
    const { id, subject, strings } = this.props.navigation.state.params;
    this.setState({
      subject,
      loading: true,
      routes: [
        { key: "stats", title: strings().schedule.stats },
        { key: "syllabus", title: strings().schedule.syllabus }
      ]
    });
    getSubject({
      subject_id: id,
      student_id: true
    })
      .then(response => {
        const {
          absencesWidget,
          gradesWidget,
          monthlyAverage,
          syllabus
        } = response;
        const monthNames = Object.keys(monthlyAverage).map(key => {
          return strings().months[new Date(key).getMonth()];
        });
        const monthsData = Object.values(monthlyAverage);
        const lineChartData = {
          labels: monthNames,
          datasets: [
            {
              data: monthsData
            }
          ]
        };

        this.setState({
          loading: false,
          notFound: false,
          absencesWidget,
          gradesWidget,
          monthlyAverage: lineChartData,
          syllabus
        });
      })
      .catch(error => {
        this.setState({ loading: false, notFound: true });
      });
  }

  handleIndexChange = index => this.setState({ index });

  renderTabBarLabel = ({ route }) => {
    return (
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: colors.PRIMARY_TEXT
        }}
      >
        {route.title}
      </Text>
    );
  };

  renderScene = ({ route }) => {
    const { strings } = this.props.navigation.state.params;
    const {
      absencesWidget,
      gradesWidget,
      monthlyAverage,
      syllabus
    } = this.state;
    switch (route.key) {
      case "stats":
        return (
          <Stats
            strings={strings}
            absencesWidget={absencesWidget}
            gradesWidget={gradesWidget}
            monthlyAverage={monthlyAverage}
          />
        );
      case "syllabus":
        return (
          <Syllabus
            syllabus={syllabus}
            strings={strings}
            onChapterPress={this.onChapterPress}
          />
        );
    }
  };

  onChapterPress = ({ subChapters, chapterTitle }) => {
    const { strings } = this.props.navigation.state.params;
    this.props.navigation.navigate("SubChapters", {
      subChapters,
      strings,
      chapterTitle
    });
  };

  renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={this.renderTabBarLabel}
      indicatorStyle={{ backgroundColor: colors.PRIMARY_TEXT, height: 3 }}
      style={{ backgroundColor: colors.PRIMARY }}
    />
  );

  render() {
    const { subject, loading, notFound } = this.state;
    const { goBack, state } = this.props.navigation;
    const { strings } = state.params;

    return notFound ? (
      <NotFound
        strings={strings}
        refreshing={refreshing}
        onRefresh={this.getData}
      />
    ) : (
      <SafeAreaView style={{ flex: 1 }}>
        <Loader visible={loading} />
        <View style={{ backgroundColor: colors.PRIMARY }}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 8,
              marginTop: 8,
              marginBottom: 16,
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}
            >
              <Back width={20} height={20} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 16, fontSize: 16 }}>{subject}</Text>
          </View>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
        />
      </SafeAreaView>
    );
  }
}

export default Subject;
