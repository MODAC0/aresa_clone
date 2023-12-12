import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "src/app/component/header/header.component";
import { BottomTabComponent } from "src/app/component/bottom-tab/bottom-tab.component";
import { JeonseTabComponent } from "src/app/component/jeonse-tab/jeonse-tab.component";
import { TabMenus } from "src/app/types/menu";
import { BottomSheetComponent } from "src/app/component/bottom-sheet/bottom-sheet.component";
@Component({
  selector: "app-jeonse-search",
  templateUrl: "jeonse-search.page.html",
  styleUrls: ["jeonse-search.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponent,
    BottomTabComponent,
    JeonseTabComponent,
    BottomSheetComponent,
  ],
})
export class jeonseSearchPage {
  classIsOpen = false;
  currentClass: string;
  tabMenus: TabMenus = [
    { title: "전세안전진단", isActive: true },
    { title: "결과지 모아보기", isActive: false },
  ];

  classTypes = [
    { class: "APARTMENT", selectName: "아파트" },
    { class: "VILLA", selectName: "빌라" },
    { class: "OFFICETEL", selectName: "오피스텔" },
  ];

  sortFilter = ["전체", "열람", "만료"];

  classPopupHandler = () => {
    this.classIsOpen = !this.classIsOpen;
  };

  classToSelect = (index: number) => {
    const selectedClassName = this.classTypes[index].selectName;
    this.currentClass = selectedClassName;
    this.classPopupHandler();
  };
}
