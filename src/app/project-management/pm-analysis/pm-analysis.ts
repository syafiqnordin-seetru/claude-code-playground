import { Component, signal } from '@angular/core';
import { PmChartScatter, ScatterChartConfig } from '../pm-chart-scatter/pm-chart-scatter';
import { PmChartRadar, RadarChartConfig } from '../pm-chart-radar/pm-chart-radar';

const C = {
  MR1: '#8979ff',
  MR2: '#ff928a',
  MR3: '#3cc3df',
  MR4: '#ffae4c',
  MR5: '#537ff1',
  EXE: '#de53f1',
};

@Component({
  selector: 'app-pm-analysis',
  standalone: true,
  imports: [PmChartScatter, PmChartRadar],
  templateUrl: './pm-analysis.html',
  styleUrl: './pm-analysis.scss'
})
export class PmAnalysis {
  readonly collapsed = signal(false);

  toggleCollapse(): void {
    this.collapsed.update(v => !v);
  }

  readonly scatterCharts: readonly ScatterChartConfig[] = [
    {
      title: 'Overall duration performance',
      subtitle: 'MR1 to First Hydrocarbon',
      xLabel: 'Duration (Years)',
      yLabel: 'Volume (MMBOE)',
      xMax: 8,
      yMax: 30,
      xTickInterval: 2,
      filters: ['Dev. phase', 'Project type'],
      xConstantLine: 4,
      yConstantLine: 15,
      series: [
        {
          name: 'MR1', color: C.MR1, data: [
            { x: 1.2, y: 8 }, { x: 2.1, y: 12 }, { x: 3.4, y: 18 }, { x: 1.8, y: 5 },
            { x: 4.2, y: 22 }, { x: 2.7, y: 9 }, { x: 3.1, y: 14 }, { x: 1.5, y: 6 },
          ]
        },
        {
          name: 'MR2', color: C.MR2, data: [
            { x: 4.8, y: 20 }, { x: 5.6, y: 25 }, { x: 3.9, y: 17 }, { x: 6.1, y: 28 },
            { x: 5.2, y: 22 }, { x: 4.5, y: 19 },
          ]
        },
        {
          name: 'MR3', color: C.MR3, data: [
            { x: 2.3, y: 11 }, { x: 3.8, y: 16 }, { x: 1.9, y: 7 }, { x: 4.1, y: 21 },
            { x: 2.8, y: 13 }, { x: 3.3, y: 15 },
          ]
        },
        {
          name: 'MR4', color: C.MR4, data: [
            { x: 5.4, y: 24 }, { x: 6.8, y: 29 }, { x: 4.9, y: 20 }, { x: 7.2, y: 27 },
            { x: 5.9, y: 23 },
          ]
        },
        {
          name: 'MR5', color: C.MR5, data: [
            { x: 1.1, y: 4 }, { x: 2.5, y: 10 }, { x: 3.7, y: 16 }, { x: 1.6, y: 6 },
            { x: 2.9, y: 11 },
          ]
        },
        {
          name: 'Execution', color: C.EXE, data: [
            { x: 6.3, y: 26 }, { x: 7.5, y: 29 }, { x: 5.7, y: 23 }, { x: 6.9, y: 27 },
          ]
        },
      ]
    },
    {
      title: 'Indicative value',
      subtitle: 'NPV vs. Volume',
      xLabel: 'NPV (MMUSD)',
      yLabel: 'Volume (MMBOE)',
      xMax: 800,
      yMax: 30,
      xTickInterval: 200,
      filters: ['PAC type'],
      xConstantLine: 400,
      series: [
        {
          name: 'MR1', color: C.MR1, data: [
            { x: 120, y: 8 }, { x: 210, y: 12 }, { x: 340, y: 18 }, { x: 180, y: 5 },
            { x: 420, y: 22 }, { x: 270, y: 9 }, { x: 310, y: 14 },
          ]
        },
        {
          name: 'MR2', color: C.MR2, data: [
            { x: 480, y: 20 }, { x: 560, y: 25 }, { x: 390, y: 17 }, { x: 610, y: 28 },
            { x: 520, y: 22 },
          ]
        },
        {
          name: 'MR3', color: C.MR3, data: [
            { x: 230, y: 11 }, { x: 380, y: 16 }, { x: 190, y: 7 }, { x: 410, y: 21 },
            { x: 280, y: 13 },
          ]
        },
        {
          name: 'MR4', color: C.MR4, data: [
            { x: 540, y: 24 }, { x: 680, y: 29 }, { x: 490, y: 20 }, { x: 720, y: 27 },
          ]
        },
        {
          name: 'MR5', color: C.MR5, data: [
            { x: 110, y: 4 }, { x: 250, y: 10 }, { x: 370, y: 16 }, { x: 160, y: 6 },
          ]
        },
        {
          name: 'Execution', color: C.EXE, data: [
            { x: 630, y: 26 }, { x: 750, y: 29 }, { x: 570, y: 23 },
          ]
        },
      ]
    },
    {
      title: 'Cost performance',
      subtitle: 'UDC vs. Volume',
      xLabel: 'UDC',
      yLabel: 'Volume (MMBOE)',
      xMax: 60,
      yMax: 30,
      xTickInterval: 15,
      filters: ['Dev. phase'],
      xConstantLine: 30,
      series: [
        {
          name: 'MR1', color: C.MR1, data: [
            { x: 8, y: 8 }, { x: 15, y: 12 }, { x: 22, y: 18 }, { x: 11, y: 5 },
            { x: 28, y: 22 }, { x: 17, y: 9 }, { x: 20, y: 14 },
          ]
        },
        {
          name: 'MR2', color: C.MR2, data: [
            { x: 33, y: 20 }, { x: 42, y: 25 }, { x: 27, y: 17 }, { x: 48, y: 28 },
            { x: 38, y: 22 },
          ]
        },
        {
          name: 'MR3', color: C.MR3, data: [
            { x: 16, y: 11 }, { x: 25, y: 16 }, { x: 12, y: 7 }, { x: 29, y: 21 },
            { x: 19, y: 13 },
          ]
        },
        {
          name: 'MR4', color: C.MR4, data: [
            { x: 38, y: 24 }, { x: 50, y: 29 }, { x: 32, y: 20 }, { x: 55, y: 27 },
          ]
        },
        {
          name: 'MR5', color: C.MR5, data: [
            { x: 7, y: 4 }, { x: 18, y: 10 }, { x: 26, y: 16 }, { x: 10, y: 6 },
          ]
        },
        {
          name: 'Execution', color: C.EXE, data: [
            { x: 45, y: 26 }, { x: 57, y: 29 }, { x: 40, y: 23 },
          ]
        },
      ]
    },
    {
      title: 'Execution schedule performance',
      subtitle: 'Duration vs. Volume',
      xLabel: 'Duration (Years)',
      yLabel: 'Volume (MMBOE)',
      xMax: 8,
      yMax: 30,
      xTickInterval: 2,
      filters: ['Dev. phase'],
      xConstantLine: 4,
      yConstantLine: 15,
      series: [
        {
          name: 'MR1', color: C.MR1, data: [
            { x: 0.8, y: 6 }, { x: 1.5, y: 10 }, { x: 2.4, y: 16 }, { x: 1.1, y: 4 },
            { x: 3.2, y: 20 }, { x: 2.0, y: 8 },
          ]
        },
        {
          name: 'MR2', color: C.MR2, data: [
            { x: 4.1, y: 19 }, { x: 5.0, y: 24 }, { x: 3.6, y: 15 }, { x: 5.8, y: 27 },
            { x: 4.7, y: 21 },
          ]
        },
        {
          name: 'MR3', color: C.MR3, data: [
            { x: 2.1, y: 10 }, { x: 3.4, y: 15 }, { x: 1.7, y: 6 }, { x: 3.9, y: 19 },
            { x: 2.6, y: 12 },
          ]
        },
        {
          name: 'MR4', color: C.MR4, data: [
            { x: 5.1, y: 23 }, { x: 6.4, y: 28 }, { x: 4.6, y: 19 }, { x: 6.9, y: 26 },
          ]
        },
        {
          name: 'MR5', color: C.MR5, data: [
            { x: 0.9, y: 3 }, { x: 2.2, y: 9 }, { x: 3.3, y: 15 }, { x: 1.4, y: 5 },
          ]
        },
        {
          name: 'Execution', color: C.EXE, data: [
            { x: 5.9, y: 25 }, { x: 7.1, y: 28 }, { x: 5.3, y: 22 },
          ]
        },
      ]
    },
  ];

  readonly radarHigh: RadarChartConfig = {
    title: 'Project health: High 5',
    subtitle: 'Top performing projects',
    filter: 'Project type',
    series: [
      {
        name: 'Project A', color: C.MR1, data: [
          { axis: 'Value (NPV)', value: 85 },
          { axis: 'Duration (MR1-1st HC)', value: 72 },
          { axis: 'Cost (UDC)', value: 90 },
        ]
      },
      {
        name: 'Project B', color: C.MR2, data: [
          { axis: 'Value (NPV)', value: 78 },
          { axis: 'Duration (MR1-1st HC)', value: 88 },
          { axis: 'Cost (UDC)', value: 65 },
        ]
      },
      {
        name: 'Project C', color: C.MR3, data: [
          { axis: 'Value (NPV)', value: 92 },
          { axis: 'Duration (MR1-1st HC)', value: 80 },
          { axis: 'Cost (UDC)', value: 75 },
        ]
      },
      {
        name: 'Project D', color: C.MR4, data: [
          { axis: 'Value (NPV)', value: 70 },
          { axis: 'Duration (MR1-1st HC)', value: 95 },
          { axis: 'Cost (UDC)', value: 82 },
        ]
      },
      {
        name: 'Project E', color: C.MR5, data: [
          { axis: 'Value (NPV)', value: 88 },
          { axis: 'Duration (MR1-1st HC)', value: 76 },
          { axis: 'Cost (UDC)', value: 93 },
        ]
      },
    ]
  };

  readonly radarLow: RadarChartConfig = {
    title: 'Project health: Low 5',
    subtitle: 'Underperforming projects',
    filter: 'Project type',
    series: [
      {
        name: 'Project F', color: C.MR1, data: [
          { axis: 'Value (NPV)', value: 35 },
          { axis: 'Duration (MR1-1st HC)', value: 28 },
          { axis: 'Cost (UDC)', value: 42 },
        ]
      },
      {
        name: 'Project G', color: C.MR2, data: [
          { axis: 'Value (NPV)', value: 45 },
          { axis: 'Duration (MR1-1st HC)', value: 32 },
          { axis: 'Cost (UDC)', value: 25 },
        ]
      },
      {
        name: 'Project H', color: C.MR3, data: [
          { axis: 'Value (NPV)', value: 22 },
          { axis: 'Duration (MR1-1st HC)', value: 48 },
          { axis: 'Cost (UDC)', value: 30 },
        ]
      },
      {
        name: 'Project I', color: C.MR4, data: [
          { axis: 'Value (NPV)', value: 38 },
          { axis: 'Duration (MR1-1st HC)', value: 20 },
          { axis: 'Cost (UDC)', value: 45 },
        ]
      },
      {
        name: 'Project J', color: C.MR5, data: [
          { axis: 'Value (NPV)', value: 18 },
          { axis: 'Duration (MR1-1st HC)', value: 40 },
          { axis: 'Cost (UDC)', value: 28 },
        ]
      },
    ]
  };
}
