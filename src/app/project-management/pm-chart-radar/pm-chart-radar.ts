import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPolarChartModule } from 'devextreme-angular/ui/polar-chart';

export interface RadarPoint {
  readonly axis: string;
  readonly value: number;
}

export interface RadarSeries {
  readonly name: string;
  readonly color: string;
  readonly data: readonly RadarPoint[];
}

export interface RadarChartConfig {
  readonly title: string;
  readonly subtitle: string;
  readonly filter: string;
  readonly series: readonly RadarSeries[];
}

interface FlatRadarPoint {
  readonly axis: string;
  readonly value: number;
  readonly series: string;
}

@Component({
  selector: 'app-pm-chart-radar',
  standalone: true,
  imports: [CommonModule, DxPolarChartModule],
  templateUrl: './pm-chart-radar.html',
  styleUrl: './pm-chart-radar.scss'
})
export class PmChartRadar {
  readonly config = input.required<RadarChartConfig>();

  readonly flatData = computed<FlatRadarPoint[]>(() => {
    const result: FlatRadarPoint[] = [];
    for (const s of this.config().series) {
      for (const p of s.data) {
        result.push({ axis: p.axis, value: p.value, series: s.name });
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
