import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getSeriesData } from "helpers/helpers";

class Chart extends React.Component {
  state = {
    series: []
  };
  componentDidMount = async () => {
    // TODO : Call getSeries data to fetch the series
    const series = [];
    this.setState({
      series
    });
  };
  render() {
    const options = {
      credits: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      rangeSelector: {
        enabled: false
      },
      legend: {
        enabled: true
      },
      series: this.state.series
    };
    return (
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    );
  }
}

export default Chart;
