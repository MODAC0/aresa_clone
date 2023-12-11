import { Component, OnInit, Input } from "@angular/core";
import { IReport } from "src/interface/dtos/report.interface";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class ListItemComponent implements OnInit {
  constructor() {}

  @Input() item: IReport.IDto;
  @Input() type: "resultMain" | "jeonseMain" | "resultList";
  createAt: string;
  roadAdressText: string;
  districtIcon: string;
  status: string;
  // ngOnInit : useEffect 디펜던시 배열에 빈 배열을 전달했을 때의 동작과 같은 원리
  ngOnInit() {
    if (this.item) {
      const districtIcons: { gu: string; src: string }[] = [
        { gu: "관악구", src: "./assets/mo/logo_gwanakgu_icon.svg" },
        { gu: "송파구", src: "./assets/mo/logo_songpagu_icon.svg" },
        { gu: "강남구", src: "./assets/mo/logo_gangnamgu_icon.svg" },
      ];
      this.createAt = this.item.cheonseLog.createdAt.toLocaleDateString();
      const district: string = this.item.cheonseLog.roadAddress.split(" ")[0];
      this.districtIcon = districtIcons.find((e) => e.gu === district).src;
      this.roadAdressText = this.item.cheonseLog.roadAddress
        .split(" ")
        .filter((e, i) => i !== 1)
        .join(" ");
    }
    this.status = this.item.cheonseLog.status;
  }
}
