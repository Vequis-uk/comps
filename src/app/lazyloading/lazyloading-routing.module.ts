import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingHomeComponent } from './lazyloading-home/lazyloading-home.component';

const routes: Routes = [{ path: '', component: LazyloadingHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyloadingRoutingModule {}
