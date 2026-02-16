import { Injectable } from '@angular/core';
import lotusData from '../data/lotus-data.json';

@Injectable({ providedIn: 'root' })
export class LotusService {
  getData(section: string): any {
    return (lotusData as Record<string, any>)[section] ?? null;
  }

  getPriceData() {
    return lotusData.price;
  }

  getTypesData() {
    return lotusData.types;
  }

  getCultivationPlacesData() {
    return lotusData.cultivationPlaces;
  }

  getSeasonsData() {
    return lotusData.seasons;
  }

  getFarmingData() {
    return lotusData.farming;
  }

  getMedicinalUsesData() {
    return lotusData.medicinalUses;
  }

  getCulinaryUsesData() {
    return lotusData.culinaryUses;
  }

  getExportTrendsData() {
    return lotusData.exportTrends;
  }

  getGalleryData() {
    return lotusData.gallery;
  }

  getFaqsData() {
    return lotusData.faqs;
  }
}
