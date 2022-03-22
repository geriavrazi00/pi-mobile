import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
  Image
} from "react-native";
import moment from "moment";

import "moment/locale/sq";
import { ls } from "_utils";
import { getDashboardData, getProfilePic } from "_src/api";
import {
  Text,
  PercentChartTotal,
  BezierLineChart,
  NotFound
} from "_components";
import Rank from "./Rank";
import {
  container,
  topBar,
  profile,
  dataContainer,
  nameText,
  classRoomText,
  sectionTitle,
  ranksContainer
} from "./styles";
import { network } from "_constants";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardData: {},
      chartData: {
        labels: ["", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      refreshing: true,
      profilePicAvailable: false,
      user: ls.get("USER") || {},
      profilePic: "",
      notFound: false
    };
  }

  componentDidMount() {
    this.getData();
    this.getProfilePicture();
    ls.get("USER").then(user => {
      this.setState({ user });
    });
  }

  getProfilePicture() {
    getProfilePic().then(response => {
      this.setState({ profilePic: response.profile_pic });
    });
  }

  getData = () => {
    const { user } = this.state;
    this.setState({ refreshing: true });
    const { strings } = this.props.screenProps;
    getDashboardData()
      .then(response => {
        const { monthlyAverage } = response;
        const monthNames = Object.keys(monthlyAverage).map(key => {
          return strings().months[new Date(key).getMonth()];
        });
        const monthsData = Object.values(monthlyAverage);
        const chartData = {
          labels: monthNames,
          datasets: [
            {
              data: monthsData
            }
          ]
        };
        this.setState({
          dashboardData: response,
          chartData,
          refreshing: false,
          notFound: false
        });
      })
      .catch(error => {
        this.setState({ refreshing: false, notFound: true });
      });
  };

  render() {
    const { strings } = this.props.screenProps;
    const {
      dashboardData = {},
      refreshing,
      user,
      profilePic,
      notFound
    } = this.state;
    const currentDate = moment()
      .lang(strings().getLanguage())
      .format("MMMM YYYY");
    const {
      absencesWidget: {
        absences = 0,
        subjects = 0,
        hours = 0,
        weeklyAbsences = [],
        absencePercentage = 0
      } = {},
      gradesWidget: {
        average = 0,
        averagePercentage = 0,
        commentNumber = 0,
        gradeNumber = 0,
        weeklyAverage = 0
      } = {},
      classRank: { classRanking = 0, classStudents = 0 } = {},
      schoolRank: { schoolRanking = 0, schoolStudents = 0 } = {},
      class: className = "",
      school = ""
    } = dashboardData;

    const absencesLastFiveData = Object.keys(weeklyAbsences).map(key => ({
      id: key,
      values: weeklyAbsences[key]
    }));

    const averageLastFiveData = Object.keys(weeklyAverage).map(key => ({
      id: key,
      values: weeklyAverage[key]
    }));
    return notFound ? (
      <NotFound
        strings={strings}
        refreshing={refreshing}
        onRefresh={this.getData}
      />
    ) : (
      <SafeAreaView style={container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={this.getData} />
          }
        >
          <View style={topBar}>
            <Image
              style={profile}
              source={{ uri: `data:image/gif;base64,${profilePic}` }}
            />
          </View>
          <View style={dataContainer}>
            <Text style={nameText}>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={classRoomText}>
              {school} / {strings().dashboard.class + className}
            </Text>
            <Text style={sectionTitle}>{strings().dashboard.general}</Text>
            <PercentChartTotal
              style={{ marginTop: 14 }}
              title={currentDate}
              dataTitle={strings().dashboard.absences(absences)}
              dataDescription={strings().dashboard.subjects(subjects, hours)}
              chartDescription={strings().dashboard.lastFive}
              chartData={absencesLastFiveData}
              percent={absencePercentage}
            />
            <PercentChartTotal
              style={{ marginTop: 6 }}
              title={currentDate}
              dataTitle={strings().dashboard.average(average)}
              dataDescription={strings().dashboard.grades(
                gradeNumber,
                commentNumber
              )}
              chartDescription={strings().dashboard.lastFive}
              chartData={averageLastFiveData}
              percent={averagePercentage}
            />
            <Text style={sectionTitle}>{strings().dashboard.avgTitle}</Text>
            <View
              style={{
                marginTop: 20,
                alignSelf: "stretch",
                height: 220
              }}
            >
              <BezierLineChart data={this.state.chartData} />
            </View>
            <View style={ranksContainer}>
              <Rank
                title={strings().dashboard.classRank}
                position={classRanking}
                total={classStudents}
              />
              <Rank
                title={strings().dashboard.schoolRank}
                position={schoolRanking}
                total={schoolStudents}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Dashboard;
