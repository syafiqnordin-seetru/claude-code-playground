import { Component } from '@angular/core';

interface RecentModule {
  name: string;
  icon: string;
  iconClass: string;
  isPsc: boolean;
}

interface ModuleCard {
  name: string;
  description: string;
  icon: string;
  iconClass: string;
  isPsc: boolean;
  isSystemConfig: boolean;
}

@Component({
  selector: 'app-all-modules',
  imports: [],
  templateUrl: './all-modules.html',
  styleUrl: './all-modules.scss',
})
export class AllModules {
  readonly recentModules: RecentModule[] = [
    {
      name: 'Petroleum Arrangement Management',
      icon: 'assets/all-modules/icon-psc-module.svg',
      iconClass: '',
      isPsc: true,
    },
    {
      name: 'Project Management',
      icon: 'assets/all-modules/icon-project-management.png',
      iconClass: 'am-icon--fit',
      isPsc: false,
    },
    {
      name: 'Wells Management',
      icon: 'assets/all-modules/icon-wells-management.png',
      iconClass: 'am-icon--fit',
      isPsc: false,
    },
    {
      name: 'Asset Management',
      icon: 'assets/all-modules/icon-asset-management.png',
      iconClass: 'am-icon--zoom-125',
      isPsc: false,
    },
    {
      name: 'Facility Improvement',
      icon: 'assets/all-modules/icon-facility-improvement.png',
      iconClass: 'am-icon--zoom-112',
      isPsc: false,
    },
    {
      name: 'Abandonment Management',
      icon: 'assets/all-modules/icon-abandonment-management.png',
      iconClass: 'am-icon--zoom-119',
      isPsc: false,
    },
  ];

  readonly allModules: ModuleCard[] = [
    {
      name: 'Petroleum Arrangement Management',
      description:
        'Your single source of truth for PAC and PSC information. Access contract details, track work commitments, and more.',
      icon: 'assets/all-modules/icon-psc-module-lg.svg',
      iconClass: '',
      isPsc: true,
      isSystemConfig: false,
    },
    {
      name: 'Project Management',
      description:
        'The essential tool for managing project approvals and execution. It streamlines reviews and captures key time series data for a smoother workflow.',
      icon: 'assets/all-modules/icon-project-management.png',
      iconClass: 'am-icon--fit',
      isPsc: false,
      isSystemConfig: false,
    },
    {
      name: 'Wells Management',
      description:
        'An intelligent solution for seamless well management, covering essential workflows from planning approvals to critical drilling report submissions.',
      icon: 'assets/all-modules/icon-wells-management.png',
      iconClass: 'am-icon--fit',
      isPsc: false,
      isSystemConfig: false,
    },
    {
      name: 'Asset Management',
      description:
        'Optimise asset value by integrating production, cost, and integrity data for strategic, lifecycle-focused decision making insights.',
      icon: 'assets/all-modules/icon-asset-management.png',
      iconClass: 'am-icon--zoom-125',
      isPsc: false,
      isSystemConfig: false,
    },
    {
      name: 'Facility Improvement',
      description:
        'Enhance facility improvement project workflow through data-driven module to maximise operational efficiency and increase reliability.',
      icon: 'assets/all-modules/icon-facility-improvement.png',
      iconClass: 'am-icon--zoom-112',
      isPsc: false,
      isSystemConfig: false,
    },
    {
      name: 'Abandonment Management',
      description:
        'Plan and prioritise abandonment or decommissioning using risk, cost, and compliance insights for sustainable end-of-life management.',
      icon: 'assets/all-modules/icon-abandonment-management.png',
      iconClass: 'am-icon--zoom-119',
      isPsc: false,
      isSystemConfig: false,
    },
    {
      name: 'System Configuration',
      description:
        'A unified module for managing core configurations, forming the backbone of consistent and seamless platform operations.',
      icon: '',
      iconClass: '',
      isPsc: false,
      isSystemConfig: true,
    },
  ];
}
