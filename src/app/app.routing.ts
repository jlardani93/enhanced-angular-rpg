import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { AdminComponent } from './admin/admin.component'; 

const appRoutes: Routes = [
  {
    path: '',
    component: GameComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
