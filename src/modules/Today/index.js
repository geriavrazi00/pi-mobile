import React, { Component } from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';

import { Subject, SubjectDetail, Modal, NotFound } from '_components';
import { colors } from '_constants';
import { getDailyData } from '_src/api';
class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedSubjectIndex: 0,
      dailyInfo: [],
      refreshing: false,
      notFound: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ refreshing: true, notFound: false });
    getDailyData()
      .then(dailyInfo => {
        this.setState({ dailyInfo, refreshing: false });
      })
      .catch(error => {
        this.setState({ refreshing: false, notFound: true });
      });
  };

  renderSubjects = subjects =>
    subjects.map(({ subject }, index) => (
      <Subject
        strings={this.props.screenProps.strings}
        key={index}
        index={index}
        subject={subject == '-' ? this.props.screenProps.strings().modal.noLesson : subject}
        disabled={subject == '-'}
        onSubjectPress={this.onSubjectClick}
      />
    ));

  onSubjectClick = ({ index }) => {
    this.setState({ selectedSubjectIndex: index, modalVisible: true });
  };

  renderModal = () => {
    const { dailyInfo, selectedSubjectIndex } = this.state;
    const { strings } = this.props.screenProps;
    if (!dailyInfo[selectedSubjectIndex]) {
      return null;
    }
    const { absence, grade, subject, comment } = dailyInfo[selectedSubjectIndex];
    return (
      <Modal
        visible={this.state.modalVisible}
        title={subject}
        onClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <SubjectDetail
          title={strings().modal.grade}
          subtitle={grade ? strings().modal.gradeAction(grade) : strings().modal.noAssessment}
          color={colors.BLUE}
        />
        <SubjectDetail
          title={strings().modal.status}
          subtitle={absence ? strings().modal.statusMissing : strings().modal.statusPresent}
          color={colors.GREEN}
        />
        <SubjectDetail
          title={strings().modal.comment}
          subtitle={comment ? comment : strings().modal.noComment}
        />
      </Modal>
    );
  };

  renderSubjectDetail = (title, subtitle, color) => (
    <SubjectDetail title={title} subtitle={subtitle} color={color} />
  );

  render() {
    const { dailyInfo, refreshing, notFound } = this.state;
    const { strings } = this.props.screenProps;
    return notFound ? (
      <NotFound strings={strings} refreshing={refreshing} onRefresh={this.getData} />
    ) : (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.getData} />}
        >
          {this.renderSubjects(dailyInfo)}
        </ScrollView>
        {this.renderModal()}
      </SafeAreaView>
    );
  }
}

export default Today;
