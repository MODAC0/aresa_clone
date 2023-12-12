import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabMenus } from "src/app/types/menu";

@Component({
  selector: "app-jeonse-tab",
  templateUrl: "./jeonse-tab.component.html",
  styleUrls: ["./jeonse-tab.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class JeonseTabComponent {
  @Input() menus: TabMenus;
  onClick = (index: number) => {
    this.menus.map((menu, i) => {
      if (index === i) menu.isActive = true;
      else menu.isActive = false;
    });
  };
}
