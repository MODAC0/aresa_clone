import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  navMenus = [
    {
      name: '안전진단',
      src: 'assets/mo/nav_safety.svg',
      href: '',
      isActive: false,
    },
    {
      name: '이슈',
      src: 'assets/mo/nav_issue.svg',
      href: '',
      isActive: false,
    },
    {
      name: '모험자산',
      src: 'assets/mo/nav_asset.svg',
      href: '/jeonse-search',
      isActive: false,
    },
    {
      name: '홈',
      src: 'assets/mo/nav_home.svg',
      href: '/home',
      isActive: false,
    },
    {
      name: '전체',
      src: 'assets/mo/nav_all.svg',
      href: '',
      isActive: false,
    },
  ];
}
