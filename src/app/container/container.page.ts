import { Component } from "@angular/core";

@Component({
  selector: "app-container",
  templateUrl: "container.page.html",
  styleUrls: ["container.page.scss"],
})
export class ContainerPage {
  navMenus = [
    {
      name: "안전진단",
      src: "assets/mo/nav_safety.svg",
      isActive: false,
    },
    {
      name: "이슈",
      src: "assets/mo/nav_issue.svg",
      isActive: false,
    },
    {
      name: "모험자산",
      src: "assets/mo/nav_asset.svg",
      isActive: false,
    },
    {
      name: "홈",
      src: "assets/mo/nav_home.svg",
      isActive: false,
    },
    {
      name: "전체",
      src: "assets/mo/nav_all.svg",
      isActive: false,
    },
  ];
  toggleIconState(index: number) {
    console.log(index);
    this.navMenus.forEach((e, i) =>
      i === index ? (e.isActive = true) : (e.isActive = false)
    );
  }
}
