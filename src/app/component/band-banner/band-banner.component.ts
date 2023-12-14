import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-band-banner",
  templateUrl: "./band-banner.component.html",
  styleUrls: ["./band-banner.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class BandBannerComponent {
  @Input() isOpen: boolean;

  closePopup() {
    this.isOpen = !this.isOpen;
  }
}
