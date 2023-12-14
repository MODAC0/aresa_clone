import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NavMenu } from "src/app/types/menu";

@Component({
  selector: "app-bottom-tab",
  templateUrl: "./bottom-tab.component.html",
  styleUrls: ["./bottom-tab.component.scss"],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class BottomTabComponent implements OnInit {
  path: string;
  navMenus: NavMenu[] = [
    {
      name: "안전진단",
      active: "assets/mo/nav_safety.svg",
      inactive: "assets/mo/nav_safety_off.svg",
      path: "/jeonse-search",
      isActive: false,
    },
    {
      name: "이슈",
      active: "assets/mo/nav_issue.svg",
      inactive: "assets/mo/nav_issue_off.svg",
      isActive: false,
    },
    {
      name: "모험자산",
      active: "assets/mo/nav_asset.svg",
      inactive: "assets/mo/nav_asset_off.svg",
      isActive: false,
    },
    {
      name: "홈",
      active: "assets/mo/nav_home.svg",
      inactive: "assets/mo/nav_home_off.svg",
      path: "/home",
      isActive: false,
    },
    {
      name: "전체",
      active: "assets/mo/nav_all.svg",
      inactive: "assets/mo/nav_all_off.svg",
      isActive: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.path = this.router.url;
    this.activeSortMenu(this.path);
  }

  handleTab(index: number) {
    if (this.navMenus[index].path) {
      const { path } = this.navMenus[index];
      this.router.navigateByUrl(path);
    }
    this.activeSortMenu(this.path);
  }

  activeSortMenu(path: string) {
    this.navMenus.forEach((menu) => {
      menu.isActive = menu.path === path;
    });
  }
}
