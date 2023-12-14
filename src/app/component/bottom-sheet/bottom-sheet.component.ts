import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MODAL_ANIMATION } from "src/app/animations/anivation.style";
@Component({
  selector: "app-bottom-sheet",
  templateUrl: "./bottom-sheet.component.html",
  styleUrls: ["./bottom-sheet.component.scss"],
  standalone: true,
  imports: [CommonModule],
  animations: [MODAL_ANIMATION],
})
export class BottomSheetComponent {
  @Input() isOpen: boolean;
  @Output() bottomSheetIsOpen: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  handleClick() {
    this.bottomSheetIsOpen.emit(!this.isOpen);
  }
}
