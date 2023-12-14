import { Pipe, PipeTransform } from "@angular/core";
import { EnumConvert } from "src/interface/consts/enum.const";

@Pipe({
  name: "assetStatus",
  standalone: true,
})
export class AssetStatusPipe implements PipeTransform {
  transform(status: keyof typeof EnumConvert.CheonseStatus): string {
    return status === "SAFETY"
      ? "안전한 자산"
      : status === "WARNING"
      ? "주의가 필요한 자산"
      : "위험한 자산";
  }
}
