import { Component, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ClassType } from "src/app/types/menu";
import { EnumConvert } from "src/interface/consts/enum.const";

@Component({
  selector: "app-jeonse-search-progress",
  templateUrl: "./jeonse-search-progress.component.html",
  styleUrls: ["./jeonse-search-progress.component.scss"],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class JeonseSearchProgressComponent {
  @Input() closeBottomSheet: void;
  @Input() selectAsset: string;

  classTypes: ClassType[] = [
    { class: "VILLA", selectName: "빌라", isAble: true },
    { class: "APARTMENT", selectName: "아파트", isAble: false },
    { class: "OFFICETEL", selectName: "오피스텔", isAble: false },
  ];
}
