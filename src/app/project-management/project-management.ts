import { Component } from '@angular/core';
import { PmOverview } from './pm-overview/pm-overview';
import { PmMilestones } from './pm-milestones/pm-milestones';
import { PmAnalysis } from './pm-analysis/pm-analysis';

@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [PmOverview, PmMilestones, PmAnalysis],
  templateUrl: './project-management.html',
  styleUrl: './project-management.scss'
})
export class ProjectManagement {}
