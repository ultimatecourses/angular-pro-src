import { InjectionToken } from '@angular/core';

export interface FoodStoreConfig {
  storeId: number,
  storeToken: string
}

export const FOOD_STORE_CONFIG = new InjectionToken<FoodStoreConfig>('FOOD_STORE_CONFIG');
