import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/component/layout/landing/landing.component';

//module level routing + any component routing from the core/common  modules
//path:will hold the routing name for the module /component
//loadchildren: will load the module dynamiaclly
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule), //to load user module dynamically  ===>()Class.forName() in java
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule), //to load dashboard module dynamically ===>()Class.
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule), //to load profile
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
