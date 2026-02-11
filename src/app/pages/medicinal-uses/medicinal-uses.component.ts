import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-medicinal-uses',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="card-grid">
        @for (item of data.items; track item.part) {
          <mat-card class="med-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>healing</mat-icon>
              <mat-card-title>{{ item.use }}</mat-card-title>
              <mat-card-subtitle>Plant Part: {{ item.part }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ item.description }}</p>
              <div class="prep-section">
                <strong>Preparation:</strong>
                <p>{{ item.preparation }}</p>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .prep-section {
      background: #e8f5e9;
      padding: 12px;
      border-radius: 8px;
      margin-top: 12px;
    }
    .prep-section p { margin: 4px 0 0; }
  `]
})
export class MedicinalUsesComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getMedicinalUsesData();
}
