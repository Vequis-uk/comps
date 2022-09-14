import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then(
        (m) => m.ElementsModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then(
        (m) => m.ViewsModule
      ),
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./mods/mods.module').then(
        (m) => m.ModsModule
      ),
  },
  {
    path: 'lazyloading',
    loadChildren: () =>
      import('./lazyloading/lazyloading.module').then(
        (m) => m.LazyloadingModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
