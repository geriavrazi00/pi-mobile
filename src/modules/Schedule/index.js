import React, { Component } from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';

import { getSchedule } from '_src/api';
import { Subject, CalendarScroll, NotFound } from '_components';
import { container, calendarScroll } from './styles';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklySchedule: [],
      selectedDay: 0,
      refreshing: true,
      notFound: false
    };
  }

  titleData = () => {
    const { strings } = this.props.screenProps;
    return [
      {
        id: 0,
        title: strings().days.mon
      },
      {
        id: 1,
        title: strings().days.tue
      },
      {
        id: 2,
        title: strings().days.wed
      },
      {
        id: 3,
        title: strings().days.thur
      },
      {
        id: 4,
        title: strings().days.fri
      }
    ];
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ refreshing: true });
    getSchedule()
      .then(({ schedule }) => {
        this.setState({ weeklySchedule: schedule, refreshing: false, notFound: false });
      })
      .catch(error => {
        this.setState({ refreshing: false, notFound: true });
      });
  };

  onSubjectClick = ({ id, subject }) => {
    const { navigate } = this.props.navigation;
    const { strings } = this.props.screenProps;
    navigate('Subject', { id, subject, strings });
  };

  renderSubjects = () => {
    const { strings } = this.props.screenProps;
    const { weeklySchedule, selectedDay } = this.state;
    if (!weeklySchedule[selectedDay]) {
      return;
    }
    const schedule = weeklySchedule[selectedDay].map(object => {
      const key = Object.keys(object)[0];
      return {
        id: key,
        subject: object[key]
      };
    });
    return schedule.map(({ id, subject }, index) => (
      <Subject
        strings={strings}
        key={index}
        subject={subject == '-' ? strings().modal.noLesson : subject}
        disabled={subject == '-'}
        id={id}
        index={index}
        onSubjectPress={this.onSubjectClick}
      />
    ));
  };

  render() {
    const { refreshing, notFound } = this.state;
    const { strings } = this.props.screenProps;
    return notFound ? (
      <NotFound strings={strings} refreshing={refreshing} onRefresh={this.getData} />
    ) : (
      <SafeAreaView style={container}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.getData} />}
        >
          <CalendarScroll
            style={calendarScroll}
            titleData={this.titleData()}
            onTitleSelect={id => {
              this.setState({ selectedDay: id });
            }}
          />
          {this.renderSubjects()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Schedule;
