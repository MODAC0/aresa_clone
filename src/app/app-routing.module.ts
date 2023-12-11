import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "",
    data: {
      layout: "un-auth",
    },
    component: LayoutComponent,
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./pages/login/login.component").then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: "",
    data: {
      layout: "auth",
    },
    component: LayoutComponent,
    // 독립적인 라우팅
    children: [
      {
        path: "home",
        loadComponent: () =>
          import("./pages/home/home.page").then((m) => m.homePage),
      },
      {
        path: "jeonse-search",
        loadComponent: () =>
          import("./pages/jeonse-search/jeonse-search.page").then(
            (m) => m.jeonseSearchPage
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
