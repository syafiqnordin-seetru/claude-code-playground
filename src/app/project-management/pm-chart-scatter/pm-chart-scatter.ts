import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxChartModule } from 'devextreme-angular/ui/chart';

export interface ScatterPoint {
  readonly x: number;
  readonly y: number;
}

export interface ScatterSeries {
  readonly name: string;
  readonly color: string;
  readonly data: readonly ScatterPoint[];
}

export interface ScatterChartConfig {
  readonly title: string;
  readonly subtitle: string;
  readonly xLabel: string;
  readonly yLabel: string;
  readonly xMax: number;
  readonly yMax: number;
  readonly xTickInterval: number;
  readonly filters: readonly string[];
  readonly series: readonly ScatterSeries[];
  readonly xConstantLine?: number;
  readonly yConstantLine?: number;
}

interface FlatPoint {
  readonly x: number;
  readonly y: number;
  readonly series: string;
}

@Component({
  selector: 'app-pm-chart-scatter',
  standalone: true,
  imports: [CommonModule, DxChartModule],
  templateUrl: './pm-chart-scatter.html',
  styleUrl: './pm-chart-scatter.scss'
})
export class PmChartScatter {
  readonly config = input.required<ScatterChartConfig>();

  readonly flatData = computed<FlatPoint[]>(() => {
    const result: FlatPoint[] = [];
    for (const s of this.config().series) {
      for (const p of s.data) {
        result.push({ x: p.x, y: p.y, series: s.name });
      }
    }
    return result;
  });

  private readonly seriesColorMap = computed<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    for (const s of this.config().series) {
      map[s.name] = s.color;
    }
    return map;
  });

  customizeSeries = (name: string): { color: string } => {
    return { color: this.seriesColorMap()[name] ?? '#999999' };
  };
}
