import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class homePage {
  menus = [
    { name: '전세안전', src: 'assets/mo/main_sec_01.svg' },
    { name: '리포트박스', src: 'assets/mo/main_sec_02.svg' },
    { name: 'LTV계산기', src: 'assets/mo/main_sec_03.svg' },
    { name: '대출관리', src: 'assets/mo/main_sec_04.svg' },
    { name: '연봉계산기', src: 'assets/mo/main_sec_05.svg' },
    { name: '부동산관리', src: 'assets/mo/main_sec_06.svg' },
    { name: 'DSR계산기', src: 'assets/mo/main_sec_07.svg' },
    { name: '소득관리', src: 'assets/mo/main_sec_08.svg' },
  ];
  results = [
    {
      name: '테헤란로 22길 76, 502호',
      src: 'assets/mo/main_gangnamgo.svg',
      modifyAt: '2023-10-11',
      safe: true,
    },
    {
      name: '가락동 173-6, 102호',
      src: 'assets/mo/main_songpagu.svg',
      modifyAt: '2023-10-11',
      safe: true,
    },
  ];
  dengers = [
    {
      name: '낙성대로 199길, 202호',
      src: 'assets/mo/main_gwanakgu.svg',
      modifyAt: '2023-10-11',
      price: '55',
    },
  ];
}
