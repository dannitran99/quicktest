import * as echarts from 'echarts';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import {
    TitleComponent,
    GraphicComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DataZoomComponent,
} from 'echarts/components';
import dataChart from './assets/data.json';
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import styles from './Question2.module.scss';
echarts.use([
    TitleComponent,
    GraphicComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DataZoomComponent,
    BarChart,
    CandlestickChart,
    LineChart,
    CanvasRenderer,
    UniversalTransition,
]);


const options = {
    animation: false,
    axisPointer: {
      link: [
        {
          xAxisIndex: [0, 1],
        },
      ],
    },
    xAxis: [
      {
        type: 'category',
        data: dataChart.dates,
        boundaryGap: false,
        axisLine: { lineStyle: { color: '#777' } },
        axisLabel: {
          formatter(value) {
            return echarts.format.formatTime('MM-dd', value);
          },
        },
        min: 'dataMin',
        max: 'dataMax',
        axisPointer: {
          show: true,
        },
      },
      {
        type: 'category',
        gridIndex: 1,
        data: dataChart.dates,
        scale: true,
        boundaryGap: false,
        splitLine: { show: true },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#777' } },
        min: 'dataMin',
        max: 'dataMax',
        // slider
        axisPointer: {
          type: 'shadow',
          label: { show: false },
          triggerTooltip: false,
          handle: {
            show: false,
            margin: 30,
            color: '#B80C00',
          },
        },
      },
    ],
    yAxis: [
      {
        scale: true,
        splitNumber: 2,
        axisLine: { lineStyle: { color: '#777' } },
        splitLine: { show: true },
        axisTick: { show: false },
        axisLabel: {
          inside: true,
          formatter: '{value}\n',
        },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: true },
        axisLine: { show: true },
        axisTick: { show: true },
        splitLine: { show: false },
      },
    ],
    grid: [
      {
        left: 20,
        right: 20,
        top: 110,
        height: 120,
      },
      {
        left: 20,
        right: 20,
        height: 40,
        top: 190,
      },
    ],
    series: [
      {
        name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: '#7fbe9e',
        },
        emphasis: {
          itemStyle: {
            color: '#140',
          },
        },
        data: dataChart.volumes,
      },
      {
        type: 'candlestick',
        data:dataChart.data,
        itemStyle: {
          color: '#ef232a',
          color0: '#14b143',
          borderColor: '#ef232a',
          borderColor0: '#14b143',
        },
        emphasis: {
          itemStyle: {
            color: 'black',
            color0: '#444',
            borderColor: 'black',
            borderColor0: '#444',
          },
        },
      },
    ],
  };


function Question2() {
  return (
    <div className={styles.chart}>
        <ReactEChartsCore
            style={{ height: 500 }}
            opts={{ height: 500 }}
            echarts={echarts}
            option={options}
            notMerge
            lazyUpdate
        />
    </div>
  );
}

export default Question2;
