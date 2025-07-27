import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Route, RouterModule } from '@angular/router';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComingSoonComponent } from 'src/app/shared/components/coming-soon/coming-soon.component';
import { BottomMenuComponent } from '../../shared/components/bottom-menu/bottom-menu.component';

const routes: Route[] = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        redirectTo: 'studios',
        pathMatch: 'full',
      },
      {
        path: 'studios',
        loadComponent: () =>
          import('../../components/studio-list/studio-list.component').then(
            m => m.StudioListComponent
          ),
      },
      {
        path: 'bookings',
        loadComponent: () =>
          import('../../components/booking-list/booking-list.component').then(
            m => m.BookingListComponent
          ),
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule.forChild(routes),
    MenuComponent,
    MatProgressBarModule,
    BottomMenuComponent,
  ],
})
export class RootModule {}
