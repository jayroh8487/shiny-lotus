import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="card-grid">
        @for (item of data.items; track item.name) {
          <mat-card class="type-card">
            <mat-card-header>
              <mat-card-title>{{ item.name }}</mat-card-title>
              <mat-card-subtitle>{{ item.scientificName }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ item.description }}</p>
              <div class="chip-row">
                <mat-chip-set>
                  <mat-chip>{{ item.color }}</mat-chip>
                  <mat-chip>{{ item.petalCount }} petals</mat-chip>
                  <mat-chip>{{ item.origin }}</mat-chip>
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
export class TypesComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getTypesData();
}
