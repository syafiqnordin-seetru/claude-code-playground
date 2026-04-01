import { Component, ElementRef, ViewChild } from '@angular/core';

interface MilestoneCard {
  readonly title: string;
  readonly total: number;
  readonly delayed: number;
  readonly onTrack: number;
  readonly clickable?: boolean;
}

@Component({
  selector: 'app-pm-milestones',
  standalone: true,
  imports: [],
  templateUrl: './pm-milestones.html',
  styleUrl: './pm-milestones.scss'
})
export class PmMilestones {
  @ViewChild('milestoneScroll') milestoneScrollRef!: ElementRef<HTMLElement>;

  readonly milestones: readonly MilestoneCard[] = [
    { title: 'MR1',       total: 60, delayed: 5,  onTrack: 55 },
    { title: 'MR2',       total: 45, delayed: 10, onTrack: 35 },
    { title: 'MR3',       total: 8,  delayed: 5,  onTrack: 3, clickable: true },
    { title: 'MR4',       total: 21, delayed: 6,  onTrack: 15 },
    { title: 'MR5',       total: 14, delayed: 0,  onTrack: 14 },
    { title: 'FDP',       total: 14, delayed: 0,  onTrack: 14 },
    { title: 'Execution', total: 8,  delayed: 1,  onTrack: 7 },
    { title: '1st HC',    total: 8,  delayed: 1,  onTrack: 7 },
  ];

  scrollMilestones(direction: 'left' | 'right'): void {
    this.milestoneScrollRef.nativeElement.scrollBy({
      left: direction === 'left' ? -220 : 220,
      behavior: 'smooth',
    });
  }
}
