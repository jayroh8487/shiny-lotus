import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-export-trends',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <mat-card class="section-card">
        <mat-card-header>
          <mat-card-title>Yearly Export Data</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="table-responsive">
            <table mat-table [dataSource]="data.items" class="full-width">
              <ng-container matColumnDef="year">
                <th mat-header-cell *matHeaderCellDef>Year</th>
                <td mat-cell *matCellDef="let item">{{ item.year }}</td>
              </ng-container>
              <ng-container matColumnDef="totalExportValue">
                <th mat-header-cell *matHeaderCellDef>Export Value (B USD)</th>
                <td mat-cell *matCellDef="let item">\${{ item.totalExportValue }}B</td>
              </ng-container>
              <ng-container matColumnDef="topExporter">
                <th mat-header-cell *matHeaderCellDef>Top Exporter</th>
                <td mat-cell *matCellDef="let item">{{ item.topExporter }}</td>
              </ng-container>
              <ng-container matColumnDef="topImporter">
                <th mat-header-cell *matHeaderCellDef>Top Importer</th>
                <td mat-cell *matCellDef="let item">{{ item.topImporter }}</td>
              </ng-container>
              <ng-container matColumnDef="growthRate">
                <th mat-header-cell *matHeaderCellDef>Growth Rate</th>
                <td mat-cell *matCellDef="let item">{{ item.growthRate }}%</td>
              </ng-container>
              <ng-container matColumnDef="keyProduct">
                <th mat-header-cell *matHeaderCellDef>Key Product</th>
                <td mat-cell *matCellDef="let item">{{ item.keyProduct }}</td>
              </ng-container>
              <tr mat-header-row *matHeaderRowDef="trendColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: trendColumns;"></tr>
            </table>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="section-card">
        <mat-card-header>
          <mat-card-title>Market Share by Country</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="share-bars">
            @for (share of data.exporterShares; track share.country) {
              <div class="share-item">
                <div class="share-label">
                  <span>{{ share.country }}</span>
                  <span>{{ share.share }}%</span>
                </div>
                <div class="share-bar-bg">
                  <div class="share-bar-fill" [style.width.%]="share.share"></div>
                </div>
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .section-card { margin-bottom: 24px; }
    .table-responsive { overflow-x: auto; }
    .full-width { width: 100%; }
    .share-bars { display: flex; flex-direction: column; gap: 12px; }
    .share-label { display: flex; justify-content: space-between; margin-bottom: 4px; font-weight: 500; }
    .share-bar-bg { background: #f5f5f5; border-radius: 8px; height: 24px; overflow: hidden; }
    .share-bar-fill { background: linear-gradient(90deg, #e91e63, #f48fb1); height: 100%; border-radius: 8px; transition: width 0.6s ease; }
  `]
})
export class ExportTrendsComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getExportTrendsData();
  trendColumns = ['year', 'totalExportValue', 'topExporter', 'topImporter', 'growthRate', 'keyProduct'];
}
