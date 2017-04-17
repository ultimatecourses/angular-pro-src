import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { FoodStoreService } from './food-store.service';

export const FOOD_PROVIDERS: Provider[] = [
  FoodStoreService
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ]
})
export class FoodStoreModule {
  static forRoot(config: FoodStoreConfig): ModuleWithProviders {
    return {
      ngModule: FoodStoreModule,
      providers: [
        FOOD_PROVIDERS,
        {
          provide: FOOD_STORE_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
