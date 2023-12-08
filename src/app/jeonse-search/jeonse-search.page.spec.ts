import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { jeonse-searchPage } from './jeonse-search.page';

describe('jeonse-searchPage', () => {
  let component: jeonse-searchPage;
  let fixture: ComponentFixture<jeonse-searchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [jeonse-searchPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(jeonse-searchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
