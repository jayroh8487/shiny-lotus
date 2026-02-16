import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LotusService } from '../../services/lotus.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule],
  template: `
    <div class="page-container">
      <h1 class="page-title">{{ data.title }}</h1>
      <p class="page-description">{{ data.description }}</p>

      <div class="table-responsive">
        <table mat-table [dataSource]="data.items" class="mat-elevation-z2 full-width">
          <ng-container matColumnDef="variety">
            <th mat-header-cell *matHeaderCellDef>Variety</th>
            <td mat-cell *matCellDef="let item">{{ item.variety }}</td>
          </ng-container>
          <ng-container matColumnDef="pricePerStem">
            <th mat-header-cell *matHeaderCellDef>Price/Stem</th>
            <td mat-cell *matCellDef="let item">\${{ item.pricePerStem.toFixed(2) }}</td>
          </ng-container>
          <ng-container matColumnDef="pricePerBunch">
            <th mat-header-cell *matHeaderCellDef>Price/Bunch</th>
            <td mat-cell *matCellDef="let item">\${{ item.pricePerBunch.toFixed(2) }}</td>
          </ng-container>
          <ng-container matColumnDef="region">
            <th mat-header-cell *matHeaderCellDef>Region</th>
            <td mat-cell *matCellDef="let item">{{ item.region }}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .table-responsive { overflow-x: auto; }
    .full-width { width: 100%; }
  `]
})
export class PriceComponent {
  private lotusService = inject(LotusService);
  data = this.lotusService.getPriceData();
  displayedColumns = ['variety', 'pricePerStem', 'pricePerBunch', 'region'];
}
