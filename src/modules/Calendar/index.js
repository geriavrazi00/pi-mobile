import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
  TouchableOpacity
} from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { withNavigation } from "react-navigation";

import moment from "moment";
import { ls } from "_utils";
import { getAttendance, getGrades } from "_src/api";
import { colors } from "_constants";
import {
  Text,
  Modal,
  SubjectDetail,
  SegmentedControl,
  Button,
  NotFound
} from "_components";
import {
  segmentControl,
  infoButton,
  infoButtonContainer,
  infoButtonText,
  infoRow,
  infoRoundIcon,
  infoSquareIcon,
  buttonsContainer,
  todayButton,
  todayButtonText
} from "./styles";

const selectedDataType = {
  0: "grades",
  1: "attendance"
};

class CalendarView extends Component {
  constructor(props) {
    super(props);
    const { strings } = this.props.screenProps;
    this.state = {
      today: moment().format("YYYY-MM-DD"),
      selectedType: "grades",
      language: strings().getLanguage(),
      selectedDate: "",
      markedDates: null,
      grades: {},
      attendance: {},
      modalVisible: false,
      infoModalVisible: false,
      refreshing: false,
      notFound: false
    };
  }

  componentDidMount() {
    this.getData();
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.configLocale();
    });
    ls.get("LANGUAGE").then(language => this.setState({ language }));
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  configLocale() {
    LocaleConfig.locales.en = LocaleConfig.locales[""];
    LocaleConfig.locales.sq = {
      monthNames: [
        "Janar",
        "Shkurt",
        "Mars",
        "Prill",
        "Maj",
        "Qershor",
        "Korrik",
        "Gusht",
        "Shtator",
        "Tetor",
        "Nëntor",
        "Dhjetor"
      ],
      monthNamesShort: [
        "Jan.",
        "Shk.",
        "Mar",
        "Pri.",
        "Maj",
        "Qer.",
        "Kor.",
        "Gus.",
        "Sht.",
        "Tet.",
        "Nën.",
        "Dhj."
      ],
      dayNames: [
        "E Hënë",
        "E Martë",
        "E Mërkurë",
        "E Enjte",
        "E Premte",
        "E Shtunë",
        "E Dielë"
      ],
      dayNamesShort: ["Hën.", "Mar.", "Mër.", "Enj.", "Pre.", "Sht.", "Die."]
    };

    LocaleConfig.defaultLocale = this.state.language;
  }

  getData = () => {
    this.setState({ refreshing: true });
    Promise.all([getAttendance(), getGrades()])
      .then(values => {
        const attendance = values[0];
        const grades = values[1];
        this.setState({
          attendance,
          grades,
          refreshing: false,
          notFound: false
        });
        this.setMarkedDates(this.state.selectedType);
      })
      .catch(error => {
        this.setState({ refreshing: false, notFound: true });
      });
  };

  setMarkedDates = selectedType => {
    const { [selectedType]: data, today } = this.state;
    const dates = Object.keys(data);
    const color = selectedType === "grades" ? "green" : "red";
    const markedDates = dates.reduce(
      (c, v) =>
        Object.assign(c, {
          [v]: {
            customStyles: {
              container: {
                shadowColor: color,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 1,
                backgroundColor: color
              },
              text: {
                color: "white"
              }
            }
          }
        }),
      {}
    );
    const allMarkedDates = {
      ...markedDates,
      [today]: {
        customStyles: {
          container: {
            borderWidth: 2,
            borderRadius: 0,
            borderColor: colors.PRIMARY
          }
        }
      }
    };
    this.setState({ markedDates: allMarkedDates });
  };

  renderModalContent = () => {
    const {
      selectedType,
      grades = {},
      attendance = {},
      selectedDate
    } = this.state;

    const { strings } = this.props.screenProps;

    if (selectedType === "grades") {
      if (!grades[selectedDate]) {
        return null;
      }
      return grades[selectedDate].map(
        ({ grade, subject, comment, behavior, evaluation }, index) => {
          let color;
          if (grade >= 4 && grade <= 6) {
            color = colors.RED;
          } else if (grade >= 7 && grade < 9) {
            color = colors.BLUE;
          } else if (grade >= 9) {
            color = colors.GREEN;
          }
          return (
            <SubjectDetail
              key={index}
              title={subject}
              subtitle={strings().modal.gradeAction(grade)}
              bottomTextLabel={strings().modal.comment}
              behaviorLabel={strings().modal.behavior}
              behavior={behavior}
              evaluationLabel={strings().modal.evaluation}
              evaluation={evaluation}
              bottomText={comment}
              color={color}
            />
          );
        }
      );
    } else {
      if (!attendance[selectedDate] || !attendance[selectedDate].subjects) {
        return null;
      }
      const subjects = attendance[selectedDate].subjects;
      const absenceInfo = Object.keys(subjects).map(key => ({
        hour: key,
        subjectTitle: subjects[key]
      }));
      return absenceInfo.map(({ hour, subjectTitle }, index) => {
        return (
          <SubjectDetail
            key={index}
            color={colors.RED}
            title={subjectTitle}
            subtitle={strings().modal.absenceAction(
              strings().hoursNumber2[hour]
            )}
            rightText={strings().hoursNumber[hour]}
          />
        );
      });
    }
  };

  renderDetailsModal = () => {
    const { modalVisible, selectedDate } = this.state;
    return (
      <Modal
        visible={modalVisible}
        title={selectedDate}
        onClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        {this.renderModalContent()}
      </Modal>
    );
  };

  renderInfoModal = () => {
    const { infoModalVisible } = this.state;
    const { strings } = this.props.screenProps;
    return (
      <Modal
        visible={infoModalVisible}
        title={strings().calendar.info}
        onClose={() => {
          this.setState({ infoModalVisible: false });
        }}
      >
        <View style={infoRow}>
          <View style={infoSquareIcon}>
            <Text style={{ color: "rgba(98, 186, 241, 1.0)" }}>1</Text>
          </View>
          <Text style={{ marginLeft: 20 }}>{strings().calendar.todayDate}</Text>
        </View>
        <View style={infoRow}>
          <View style={[infoRoundIcon, { backgroundColor: "green" }]}>
            <Text style={{ color: "white" }}>1</Text>
          </View>
          <Text style={{ marginLeft: 20 }}>
            {strings().calendar.dateWithGrades}
          </Text>
        </View>
        <View style={infoRow}>
          <View style={[infoRoundIcon, { backgroundColor: "red" }]}>
            <Text style={{ color: "white" }}>1</Text>
          </View>
          <Text style={{ marginLeft: 20 }}>
            {strings().calendar.dateWithAbsences}
          </Text>
        </View>

        <View style={infoRow}>
          <Text>{strings().calendar.noMarkDates}</Text>
        </View>
      </Modal>
    );
  };

  segmentedControlButtons = () => {
    const { strings } = this.props.screenProps;
    return [
      {
        id: 0,
        text: strings().calendar.grades
      },
      {
        id: 1,
        text: strings().calendar.attendance
      }
    ];
  };

  render() {
    const { markedDates, today, refreshing, notFound } = this.state;
    const { strings } = this.props.screenProps;
    return notFound ? (
      <NotFound
        strings={strings}
        refreshing={refreshing}
        onRefresh={this.getData}
      />
    ) : (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.getData}
              style={{ backgroundColor: "transparent" }}
            />
          }
        >
          <SegmentedControl
            style={segmentControl}
            buttons={this.segmentedControlButtons()}
            onControlSelect={id => {
              this.setState({ selectedType: selectedDataType[id] });
              this.setMarkedDates(selectedDataType[id]);
            }}
          />
          <CalendarList
            scrollEnabled={true}
            horizontal={true}
            pagingEnabled={true}
            current={today}
            minDate={"2019-01-10"}
            maxDate={"2020-01-01"}
            markingType={"custom"}
            markedDates={markedDates}
            onDayPress={day => {
              const { selectedType, attendance, grades } = this.state;
              if (
                (selectedType === "grades" && !grades[day.dateString]) ||
                (selectedType === "attendance" &&
                  !attendance[day.dateString]) ||
                (selectedType === "attendance" &&
                  !attendance[day.dateString].subjects) ||
                (selectedType === "attendance" &&
                  attendance[day.dateString].subjects.length === 0)
              ) {
                return;
              }
              this.setState({
                selectedDate: day.dateString,
                modalVisible: true
              });
            }}
            onDayLongPress={day => {}}
            monthFormat={"MMMM"}
            onMonthChange={month => {}}
            hideArrows={false}
            hideExtraDays={false}
            disableMonthChange={false}
            firstDay={1}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
          />

          <View style={buttonsContainer}>
            <TouchableOpacity
              style={infoButtonContainer}
              onPress={() => {
                this.setState({ infoModalVisible: true });
              }}
            >
              <View style={infoButton}>
                <Text style={infoButtonText}>i</Text>
              </View>
            </TouchableOpacity>
            <Button
              style={todayButton}
              textStyle={todayButtonText}
              text={strings().calendar.today}
              onPress={() => {
                const todayDate = this.state.today;
                this.setState({ today: "" }, () => {
                  this.setState({ today: todayDate });
                });
              }}
            />
          </View>

          {this.renderDetailsModal()}
          {this.renderInfoModal()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default withNavigation(CalendarView);
