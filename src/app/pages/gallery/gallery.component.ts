import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="gallery-grid">
        @for (item of data.items; track item.id) {
          <mat-card class="gallery-card">
            <div class="gallery-image" [style.background]="item.color">
              <mat-icon class="gallery-icon">{{ item.icon }}</mat-icon>
            </div>
            <mat-card-content>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
    }
    .gallery-image {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px 4px 0 0;
    }
    .gallery-icon { font-size: 64px; width: 64px; height: 64px; color: rgba(255,255,255,0.9); }
    .gallery-card h3 { margin: 12px 0 4px; }
    .gallery-card p { color: #666; font-size: 14px; }
  `]
})
export class GalleryComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getGalleryData();
}
