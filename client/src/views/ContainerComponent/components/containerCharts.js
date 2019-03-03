import React, { Component } from 'react'
// Import fusioncharts.js files from fusioncharts module
import FusionCharts from 'fusioncharts'
// Import the timeseries file from fusioncharts module
import TimeSeries from 'fusioncharts/fusioncharts.timeseries'
// Import ReactFusioncharts from react-fusioncharts module
// import ReactFC from 'react-fusioncharts';
import ReactFC from 'react-fusioncharts'
import moment from 'moment'
// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries)

// const jsonify = res => res.json()
// This is the remote url to fetch the data.
// const dataFetch = fetch(
//   'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
// ).then(jsonify)
// // This is the remote url to fetch the schema.
// const schemaFetch = fetch(
//   'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
// ).then(jsonify)

class ColumnChartTimeAxis extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '600',
        height: '400',
        dataSource: {
          chart: {

          },
          caption: {
            text: 'Smart Jar',
          },
          yAxis: [
            {
              plot: {
                value: 'Jar Quantity Value',
                type: 'column',
              },
              title: 'Jar Quantity Value (in thousand)',
            },
          ],
          data: {},
        },
      },
    }

    // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema. Check the method definition to get more info.
    this.createDataTable = this.createDataTable.bind(this)
  }

  createDataTable (jarData) {
    const data = jarData.reverse().map(d => {
      return [
        moment(d.timestamp).format('DD-MMM-YY'),
        d.quantity,
      ]
    })
    const schema = [
      {
        'name': 'Time',
        'type': 'date',
        'format': '%d-%b-%y',
      },
      {
        'name': 'Jar Quantity Value',
        'type': 'number',
      },
    ]
    // First we are creating a DataStore
    const fusionDataStore = new FusionCharts.DataStore()
    // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(data, schema)
    // After that we simply mutated our timeseries datasource by attaching the above
    // DataTable into its data property.
    const timeseriesDs = Object.assign({}, this.state.timeseriesDs)
    timeseriesDs.dataSource.data = fusionTable
    this.setState({
      timeseriesDs,
    })
  }

  // We are creating the DataTable immidietly after the component is mounted
  componentDidMount () {
    this.createDataTable(this.props.data)
  }

  render () {
    return (
      <div className='App'>
        <ReactFC {...this.state.timeseriesDs} />
      </div>
    )
  }
}

export default ColumnChartTimeAxis
