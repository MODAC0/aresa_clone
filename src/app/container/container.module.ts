import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ContainerPageRoutingModule } from "./container-routing.module";

import { ContainerPage } from "./container.page";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ContainerPageRoutingModule],
  declarations: [ContainerPage],
})
export class ContainerPageModule {}
