import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "src/app/component/header/header.component";
import { BottomTabComponent } from "src/app/component/bottom-tab/bottom-tab.component";
import { JeonseTabComponent } from "src/app/component/jeonse-tab/jeonse-tab.component";
import { TabMenu, ClassType } from "src/app/types/menu";
import { BottomSheetComponent } from "src/app/component/bottom-sheet/bottom-sheet.component";
import { BandBannerComponent } from "src/app/component/band-banner/band-banner.component";
import { ListItemComponent } from "src/app/component/list-item/list-item.component";
import { jeonseDatas } from "src/assets/practiceData";

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
    BandBannerComponent,
    ListItemComponent,
  ],
})
export class jeonseSearchPage {
  bottomSheetIsOpen: boolean;
  bandBannerIsOpen = true;
  currentClass: string;
  jeonseDatas = jeonseDatas;
  tabMenus: TabMenu[] = [
    { title: "전세안전진단", isActive: true },
    { title: "결과지 모아보기", isActive: false },
  ];

  classTypes: ClassType[] = [
    { class: "VILLA", selectName: "빌라", isAble: true },
    { class: "APARTMENT", selectName: "아파트", isAble: false },
    { class: "OFFICETEL", selectName: "오피스텔", isAble: false },
  ];

  scopes: TabMenu[] = [
    { title: "전체", isActive: true },
    { title: "열람", isActive: false },
    { title: "만료", isActive: false },
  ];

  handleBottomSheet() {
    this.bottomSheetIsOpen = !this.bottomSheetIsOpen;
  }

  classToSelect(index: number) {
    const { isAble, selectName } = this.classTypes[index];
    if (isAble) {
      this.currentClass = selectName;
      this.handleBottomSheet();
    }
  }

  scopeHandler(title: string) {
    this.scopes.forEach((scope) => (scope.isActive = scope.title === title));
  }
}
