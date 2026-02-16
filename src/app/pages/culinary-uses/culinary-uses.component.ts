import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-culinary-uses',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="card-grid">
        @for (item of data.items; track item.dish) {
          <mat-card class="dish-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>restaurant</mat-icon>
              <mat-card-title>{{ item.dish }}</mat-card-title>
              <mat-card-subtitle>{{ item.cuisine }} Cuisine</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ item.description }}</p>
              <div class="chip-row">
                <mat-chip-set>
                  <mat-chip>{{ item.part }}</mat-chip>
                  <mat-chip [class]="'difficulty-' + item.difficulty.toLowerCase()">{{ item.difficulty }}</mat-chip>
                </mat-chip-set>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .chip-row { margin-top: 12px; }
  `]
})
export class CulinaryUsesComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getCulinaryUsesData();
}
