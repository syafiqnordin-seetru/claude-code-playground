import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  isExpanded = signal(false);
  selectedItem = signal<string | null>(null);

  readonly navItems = [
    {
      name: 'Apps',
      label: 'All modules',
      icon: 'assets/sidebar/icon-apps.svg',
      iconActive: 'assets/sidebar/icon-apps-active.svg',
      href: null,
      isProduct: false
    },
    {
      name: 'Project Management',
      label: 'Project Management',
      icon: null,
      href: null,
      isProduct: true
    }
  ];

  readonly productIconParts = [
    { src: 'assets/sidebar/icon-project-part-1.svg', cls: 'part-1' },
    { src: 'assets/sidebar/icon-project-part-2.svg', cls: 'part-2' },
    { src: 'assets/sidebar/icon-project-part-3.svg', cls: 'part-3' },
    { src: 'assets/sidebar/icon-project-part-4.svg', cls: 'part-4' },
    { src: 'assets/sidebar/icon-project-part-5.svg', cls: 'part-5' },
    { src: 'assets/sidebar/icon-project-part-6.svg', cls: 'part-6' },
    { src: 'assets/sidebar/icon-project-part-7.svg', cls: 'part-7' },
  ];
}
