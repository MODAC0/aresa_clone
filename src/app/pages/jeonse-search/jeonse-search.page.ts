import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
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
    IonicModule,
    HeaderComponent,
    BottomTabComponent,
    JeonseTabComponent,
    BottomSheetComponent,
  ],
})
export class jeonseSearchPage {
  tabMenus: TabMenus = [
    { title: "전세안전진단", isActive: true },
    { title: "결과지 모아보기", isActive: false },
  ];
  sortFilter = ["전체", "열람", "만료"];
}
