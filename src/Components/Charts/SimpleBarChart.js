import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const SimpleBarChart = () => {
  return (
    <VictoryChart  theme={VictoryTheme.material}
    domainPadding={20}>
              <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
    <VictoryBar
    data={data}
    // data accessor for x values
    x="quarter"
    // data accessor for y values
    y="earnings"
  />
  </VictoryChart>
  );
};

export default SimpleBarChart;
