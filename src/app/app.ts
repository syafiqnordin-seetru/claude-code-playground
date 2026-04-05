import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { PmHeader } from './project-management/pm-header/pm-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, PmHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
