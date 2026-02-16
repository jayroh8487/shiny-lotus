import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-seasons',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="timeline">
        @for (item of data.items; track item.season) {
          <mat-card class="season-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>{{ getSeasonIcon(item.activity) }}</mat-icon>
              <mat-card-title>{{ item.season }}</mat-card-title>
              <mat-card-subtitle>{{ item.activity }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ item.description }}</p>
              <div class="temp-badge">
                <mat-icon>thermostat</mat-icon>
                <span>{{ item.idealTemp }}</span>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .season-card { border-left: 4px solid #e91e63; }
    .temp-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: #fce4ec;
      padding: 4px 12px;
      border-radius: 16px;
      margin-top: 8px;
      font-weight: 500;
    }
    .temp-badge mat-icon { font-size: 18px; width: 18px; height: 18px; color: #e91e63; }
  `]
})
export class SeasonsComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getSeasonsData();

  getSeasonIcon(activity: string): string {
    const icons: Record<string, string> = {
      'Planting & Sprouting': 'grass',
      'Leaf Growth': 'eco',
      'Peak Bloom': 'local_florist',
      'Seed Formation': 'grain',
      'Harvest & Dormancy Prep': 'agriculture',
      'Dormancy': 'ac_unit'
    };
    return icons[activity] || 'schedule';
  }
}
