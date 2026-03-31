import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isExpanded = signal(false);
  private router = inject(Router);

  currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly navItems = [
    {
      name: 'Apps',
      label: 'All modules',
      icon: 'assets/sidebar/icon-apps.svg',
      iconActive: 'assets/sidebar/icon-apps-active.svg',
      route: '/' as string | null,
      isProduct: false,
    },
    {
      name: 'Project Management',
      label: 'Project Management',
      icon: null,
      route: '/project-management' as string | null,
      isProduct: true,
    },
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

  isActive(route: string | null): boolean {
    if (!route) return false;
    if (route === '/') return this.currentUrl() === '/';
    return this.currentUrl().startsWith(route);
  }

  navigate(route: string | null): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
