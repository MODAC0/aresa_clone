import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/component/header/header.component";
import { BottomTabComponent } from "src/app/component/bottom-tab/bottom-tab.component";
import { jeonseDatas, resultDatas } from "src/assets/practiceData";
import { ListItemComponent } from "src/app/component/list-item/list-item.component";
import Swiper from "swiper";
import { AfterViewInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponent,
    BottomTabComponent,
    ListItemComponent,
  ],
})
export class homePage implements AfterViewInit {
  swiperIndex = 0;
  @Input() jeonseDatas = jeonseDatas;
  @Input() resultDatas = resultDatas;
  mainMenus = [
    {
      child: [
        { name: "전세안전", src: "assets/mo/main_sec_01.svg" },
        { name: "연봉계산기", src: "assets/mo/main_sec_05.svg" },
      ],
    },
    {
      child: [
        { name: "리포트박스", src: "assets/mo/main_sec_02.svg" },
        { name: "부동산관리", src: "assets/mo/main_sec_06.svg" },
      ],
    },
    {
      child: [
        { name: "LTV계산기", src: "assets/mo/main_sec_03.svg" },
        { name: "DSR계산기", src: "assets/mo/main_sec_07.svg" },
      ],
    },
    {
      child: [
        { name: "대출관리", src: "assets/mo/main_sec_04.svg" },
        { name: "소득관리", src: "assets/mo/main_sec_08.svg" },
      ],
    },
  ];
  ngAfterViewInit(): void {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // on: () => {
      //   this.swiperIndex = swiper.activeIndex;
      // },
      on: {
        slideChange: (res) => {
          this.swiperIndex = res.realIndex;
        },
      },
    });
  }
}
