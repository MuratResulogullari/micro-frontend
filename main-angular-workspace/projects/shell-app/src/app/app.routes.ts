import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote-app',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('remoteApp', './routes').then((m) => m.routes),
  },
  {
    path: 'storybook-app',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('storybookApp', './routes').then((m) => m.routes),
  },
];
