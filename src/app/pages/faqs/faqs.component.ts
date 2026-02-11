import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <mat-accordion>
        @for (item of data.items; track item.question) {
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>{{ item.question }}</mat-panel-title>
            </mat-expansion-panel-header>
            <p>{{ item.answer }}</p>
          </mat-expansion-panel>
        }
      </mat-accordion>
    </div>
  `,
  styles: [`
    mat-accordion { display: flex; flex-direction: column; gap: 8px; }
  `]
})
export class FaqsComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getFaqsData();
}
