import { Component } from '@angular/core';
import { NgClass, TitleCasePipe } from '@angular/common';

interface StatCard {
  label: string;
  value: string;
  icon: string;
}

interface Project {
  name: string;
  status: string;
  progress: number;
  dueDate: string;
  owner: string;
}

@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './project-management.html',
  styleUrl: './project-management.scss'
})
export class ProjectManagement {
  readonly stats: StatCard[] = [
    { label: 'Active Projects', value: '12', icon: '📁' },
    { label: 'Tasks Due Today', value: '8', icon: '📋' },
    { label: 'Team Members', value: '34', icon: '👥' },
    { label: 'Completed This Month', value: '5', icon: '✅' }
  ];

  readonly projects: Project[] = [
    {
      name: 'Digital Transformation Initiative',
      status: 'in-progress',
      progress: 68,
      dueDate: '2026-04-30',
      owner: 'Ahmad Razif'
    },
    {
      name: 'Pipeline Monitoring System',
      status: 'planning',
      progress: 15,
      dueDate: '2026-06-15',
      owner: 'Nurul Ain'
    },
    {
      name: 'Safety Compliance Audit',
      status: 'review',
      progress: 90,
      dueDate: '2026-04-05',
      owner: 'Hafiz Kamal'
    },
    {
      name: 'Upstream Data Integration',
      status: 'completed',
      progress: 100,
      dueDate: '2026-03-20',
      owner: 'Siti Rahayu'
    }
  ];

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'in-progress': 'pm-status-badge pm-status-badge--in-progress',
      'planning':    'pm-status-badge pm-status-badge--planning',
      'review':      'pm-status-badge pm-status-badge--review',
      'completed':   'pm-status-badge pm-status-badge--completed'
    };
    return map[status] ?? 'pm-status-badge';
  }
}
