import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../apps/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'ranking',
        loadChildren: () =>
          import('../apps/ranking/ranking.module').then((m) => m.RankingModule),
      },
      {
        path: 'quests',
        loadChildren: () =>
          import('../apps/quests/quests.module').then((m) => m.QuestsModule),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../apps/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../apps/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: '**',
        redirectTo: 'error',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
