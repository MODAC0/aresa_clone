import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContainerPage } from "./container.page";

describe("ContainerPage", () => {
  let component: ContainerPage;
  let fixture: ComponentFixture<ContainerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
