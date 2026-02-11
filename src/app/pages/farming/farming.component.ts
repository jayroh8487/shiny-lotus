import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-farming',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="steps-list">
        @for (item of data.items; track item.step) {
          <mat-card class="step-card">
            <mat-card-header>
              <div mat-card-avatar class="step-number">{{ item.step }}</div>
              <mat-card-title>{{ item.title }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>{{ item.description }}</p>
              <div class="tip-box">
                <mat-icon>lightbulb</mat-icon>
                <span>{{ item.tips }}</span>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .steps-list { display: flex; flex-direction: column; gap: 16px; }
    .step-number {
      background: #e91e63;
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }
    .tip-box {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      background: #fff8e1;
      padding: 12px;
      border-radius: 8px;
      margin-top: 12px;
    }
    .tip-box mat-icon { color: #f9a825; flex-shrink: 0; }
  `]
})
export class FarmingComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getFarmingData();
}
