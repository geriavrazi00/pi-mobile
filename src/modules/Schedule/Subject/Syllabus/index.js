import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

import { Text } from '_components';
import { colors } from '_constants';
import { plusContainer, plusLine } from './styles';

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderChapters = chapters => {
    const { onChapterPress } = this.props;
    return chapters.map(
      (
        { chapter_number = 0, chapter_title: chapterTitle = '', subchapters: subChapters },
        index
      ) => (
        <TouchableOpacity
          key={index}
          style={{}}
          onPress={() => {
            onChapterPress({ subChapters, chapterTitle });
          }}
        >
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 15,
                minHeight: 70,
                paddingLeft: 10,
                paddingBottom: 15
              }}
            >
              <Text
                style={{
                  color: colors.PRIMARY_TEXT,
                  fontSize: 16,
                  width: 50,
                  fontWeight: 'bold'
                }}
              >
                {`${chapter_number}.`}
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: colors.PRIMARY_TEXT,
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                {chapterTitle}
              </Text>
              <View style={plusContainer}>
                <View style={plusLine} />
                <View style={[plusLine, { width: 2, height: 18, position: 'absolute' }]} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
                opacity: 0.1
              }}
            />
          </View>
        </TouchableOpacity>
      )
    );
  };

  render() {
    const { syllabus } = this.props;
    const {
      chapters = [],
      teacher_firstname: teacherFirstName = '',
      teacher_lastname: teacherLastName = ''
    } = syllabus;
    return <ScrollView>{this.renderChapters(chapters)}</ScrollView>;
  }
}

export default Syllabus;
