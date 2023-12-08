import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./component/tabs/tabs.component";

const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./page/main/main.page").then((m) => m.MainPage),
      },
      {
        path: "jeonse-search",
        loadChildren: () =>
          import("./page/jeonse-search/jeonse-search.page").then(
            (m) => m.JeonseSearchPage
          ),
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
