import { Component, Input } from "@angular/core";

@Component({
  selector: "app-bottom-sheet",
  templateUrl: "./bottom-sheet.component.html",
  styleUrls: ["./bottom-sheet.component.scss"],
  standalone: true,
})
export class BottomSheetComponent {
  @Input() closePopup: () => void;

  closePopupHander() {
    if (this.closePopup) {
      this.closePopup();
    }
  }
}
