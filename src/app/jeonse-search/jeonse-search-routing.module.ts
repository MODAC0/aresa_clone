import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { jeonseSearchPage } from './jeonse-search.page';

const routes: Routes = [
  {
    path: '',
    component: jeonseSearchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jeonseSearchPageRoutingModule {}
