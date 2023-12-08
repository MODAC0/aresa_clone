import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContainerPage } from "./container.page";

const routes: Routes = [
  {
    path: "",
    component: ContainerPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.homePageModule),
      },
      {
        path: "jeonse-search",
        loadChildren: () =>
          import("../jeonse-search/jeonse-search.module").then(
            (m) => m.jeonseSearchPageModule
          ),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "//home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ContainerPageRoutingModule {}
