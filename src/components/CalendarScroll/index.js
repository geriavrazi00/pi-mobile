import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Title from './Title';
import { scrollViewStyle } from './styles';

class CalendarScroll extends Component {
  constructor(props) {
    super(props);
    const { titleData } = this.props;
    this.state = {
      selectedTitle: titleData[0].id
    };
  }

  renderTitles = titleData => {
    const { onTitleSelect = () => {} } = this.props;
    return titleData.map(({ title, id }) => (
      <Title
        key={id}
        title={title}
        selected={id === this.state.selectedTitle}
        id={id}
        onPress={id => {
          this.setState({ selectedTitle: id });
          onTitleSelect(id);
        }}
      />
    ));
  };

  render() {
    const {
      titleData = [],
      style = {},
      contentContainerStyle = {}
    } = this.props;
    return (
      <ScrollView
        style={style}
        contentContainerStyle={[scrollViewStyle]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.renderTitles(titleData)}
      </ScrollView>
    );
  }
}

export default CalendarScroll;
