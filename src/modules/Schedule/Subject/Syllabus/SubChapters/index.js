import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';

import { SubjectDetail, Text } from '_components';
import { Back } from '_assets/img';
import { colors } from '_constants';

class SubChapters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubChapters = subChapters => {
    const { strings } = this.props.navigation.state.params;
    return subChapters.map(
      (
        {
          subchapter_description: description = '',
          subchapter_homework: homework = '',
          subchapter_is_complete: completed = 0,
          subchapter_number: number = 0
        },
        index
      ) => (
        <SubjectDetail
          key={index}
          title={`${number}. ${description}`}
          bottomTextLabel={strings().modal.homework}
          bottomText={homework}
          rightText={
            completed === 1
              ? strings().modal.subChapterCompleted
              : strings().modal.subChapterInProgress
          }
          color={completed === 1 ? colors.GREEN : colors.BLUE}
        />
      )
    );
  };

  render() {
    const { state, goBack } = this.props.navigation;
    const { subChapters, chapterTitle } = state.params;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 8,
            marginTop: 8,
            marginBottom: 26,
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Back width={20} height={20} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 16, fontSize: 16 }}>{chapterTitle}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
          {this.renderSubChapters(subChapters)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SubChapters;
