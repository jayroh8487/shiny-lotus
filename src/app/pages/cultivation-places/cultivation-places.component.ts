import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-cultivation-places',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="card-grid">
        @for (item of data.items; track item.country) {
          <mat-card class="place-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>location_on</mat-icon>
              <mat-card-title>{{ item.country }}</mat-card-title>
              <mat-card-subtitle>{{ item.region }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="info-row">
                <mat-icon>thermostat</mat-icon>
                <span>{{ item.climate }}</span>
              </div>
              <div class="info-row">
                <mat-icon>inventory_2</mat-icon>
                <span>{{ item.annualProduction }} / year</span>
              </div>
              <div class="info-row">
                <mat-icon>star</mat-icon>
                <span>{{ item.speciality }}</span>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .info-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .info-row mat-icon { font-size: 20px; width: 20px; height: 20px; color: #666; }
  `]
})
export class CultivationPlacesComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getCultivationPlacesData();
}
