import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isMobile = signal(false);

  navItems: NavItem[] = [
    { label: 'Lotus Types', route: '/types', icon: 'category' },
    { label: 'Prices', route: '/price', icon: 'attach_money' },
    { label: 'Cultivation Places', route: '/cultivation-places', icon: 'location_on' },
    { label: 'Growing Seasons', route: '/seasons', icon: 'calendar_month' },
    { label: 'Farming Guide', route: '/farming', icon: 'agriculture' },
    { label: 'Medicinal Uses', route: '/medicinal-uses', icon: 'healing' },
    { label: 'Culinary Uses', route: '/culinary-uses', icon: 'restaurant' },
    { label: 'Export Trends', route: '/export-trends', icon: 'trending_up' },
    { label: 'Gallery', route: '/gallery', icon: 'photo_library' },
    { label: 'FAQs', route: '/faqs', icon: 'help' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .subscribe(result => this.isMobile.set(result.matches));
  }
}
