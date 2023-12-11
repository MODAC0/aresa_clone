import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/component/header/header.component";

@Component({
  selector: "app-jeonse-search",
  templateUrl: "jeonse-search.page.html",
  styleUrls: ["jeonse-search.page.scss"],
  standalone: true,
  imports: [IonicModule, HeaderComponent],
})
export class jeonseSearchPage {}
