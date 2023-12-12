import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class LayoutComponent implements OnInit {
  layout!: string;
  path!: string;

  constructor(router: Router, route: ActivatedRoute) {
    router.events.pipe(filter((ev) => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.layout = route.snapshot.data["layout"];
        this.path = router.url;
      },
    });
  }

  ngOnInit() {}
}
