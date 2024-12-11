import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'storybook-app',
    pathMatch:'full'
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
