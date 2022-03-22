import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { PercentChartTotal, BezierLineChart } from '_components';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { absencesWidget, gradesWidget, monthlyAverage, strings } = this.props;
    const { absences = 0, hours = 0, absencePercentage = 0 } = absencesWidget;
    const { average = 0, gradeNumber = 0, averagePercentage = 0 } = gradesWidget;

    return (
      <ScrollView>
        <PercentChartTotal
          chartData={null}
          style={{ backgroundColor: 'white', marginTop: 30 }}
          dataTitle={strings().dashboard.absences(absences)}
          dataDescription={strings().schedule.totalHours(hours)}
          percent={absencePercentage}
        />
        <PercentChartTotal
          chartData={null}
          style={{ backgroundColor: 'white' }}
          dataTitle={strings().dashboard.average(average)}
          dataDescription={strings().schedule.totalGrades(gradeNumber)}
          percent={averagePercentage}
        />

        <BezierLineChart data={monthlyAverage} />
      </ScrollView>
    );
  }
}

export default Stats;
