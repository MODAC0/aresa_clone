import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "maskString",
  standalone: true,
})
export class MaskingTypePipe implements PipeTransform {
  transform(value: string | number): string {
    if (typeof value === "number") {
      const numberString = value.toString();
      return numberString.slice(2).padStart(numberString.length, "*");
    } else if (typeof value === "string" && value.length >= 4) {
      const maskedPart = value.slice(0, -4) + "*".repeat(4);
      return maskedPart;
    } else {
      return value.toString();
    }
  }
}
