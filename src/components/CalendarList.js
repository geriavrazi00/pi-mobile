import { CalendarList } from 'react-native-calendars';

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class CList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {scrollEnabled= true, horizontal = true, pagingEnabled = true, minDate,maxDate,current,markedDates=null,onDayPress,}
    return <CalendarList />;
  }
}

export default CList;
