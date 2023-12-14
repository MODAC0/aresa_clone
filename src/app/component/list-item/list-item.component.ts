import { Component, OnInit, Input } from "@angular/core";
import { IReport } from "src/interface/dtos/report.interface";
import { CommonModule } from "@angular/common";
import { MaskingTypePipe } from "src/app/pipes/masking-type.pipe";
import { AssetStatusPipe } from "src/app/pipes/asset-status.pipe";
import { DistrictIcon } from "src/app/types/menu";
import { EnumConvert } from "src/interface/consts/enum.const";
@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  standalone: true,
  imports: [CommonModule, MaskingTypePipe, AssetStatusPipe],
})
export class ListItemComponent implements OnInit {
  constructor() {}

  @Input() item: IReport.IDto;
  @Input() type: "resultMain" | "jeonseMain" | "resultList";
  @Input() masking: boolean;
  createAt: string;
  districtAdress: string;
  roadAdress: string;
  floorAdress: number;
  districtIcon: string;
  status: keyof typeof EnumConvert.CheonseStatus;

  // ngOnInit : useEffect 디펜던시 배열에 빈 배열을 전달했을 때의 동작과 같은 원리
  ngOnInit() {
    if (this.item) {
      const districtIcons: DistrictIcon[] = [
        { gu: "관악구", src: "./assets/mo/logo_gwanakgu_icon.svg" },
        { gu: "송파구", src: "./assets/mo/logo_songpagu_icon.svg" },
        { gu: "강남구", src: "./assets/mo/logo_gangnamgu_icon.svg" },
      ];
      this.createAt = this.item.cheonseLog.createdAt
        .toLocaleDateString()
        .replaceAll(" ", "")
        .slice(0, -1);
      const adress = this.item.cheonseLog.roadAddress;
      const idx = adress.indexOf(" ");
      this.districtAdress = adress.substring(0, idx);
      this.roadAdress = adress.substring(idx + 1);
      this.floorAdress = this.item.cheonseLog.floor;
      this.districtIcon = districtIcons.find(
        (e) => e.gu === this.districtAdress
      ).src;
    }
    this.status = this.item.cheonseLog.status;
  }
}
