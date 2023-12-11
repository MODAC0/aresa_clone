import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-bottom-tab",
  templateUrl: "./bottom-tab.component.html",
  styleUrls: ["./bottom-tab.component.scss"],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class BottomTabComponent {
  constructor(private router: Router) {}
  navMenus = [
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
      path: "/home",
      isActive: false,
    },
    {
      name: "모험자산",
      active: "assets/mo/nav_asset.svg",
      inactive: "assets/mo/nav_asset_off.svg",
      path: "/home",
      isActive: false,
    },
    {
      name: "홈",
      active: "assets/mo/nav_home.svg",
      inactive: "assets/mo/nav_home_off.svg",
      path: "/home",
      isActive: true,
    },
    {
      name: "전체",
      active: "assets/mo/nav_all.svg",
      inactive: "assets/mo/nav_all_off.svg",
      path: "/home",
      isActive: false,
    },
  ];
  toggleIconState(index: number) {
    this.navMenus.forEach((e, i) =>
      i === index ? (e.isActive = true) : (e.isActive = false)
    );
    const path = this.navMenus[index].path;
    if (path) this.router.navigateByUrl(path);
  }
}
