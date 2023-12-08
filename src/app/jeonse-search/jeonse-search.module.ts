import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jeonseSearchPage } from './jeonse-search.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { jeonseSearchPageRoutingModule } from './jeonse-search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    jeonseSearchPageRoutingModule,
  ],
  declarations: [jeonseSearchPage],
})
export class jeonseSearchPageModule {}
