import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HighlightsSectionComponent } from "./highlights-section.component";

describe("HighlightsSectionComponent", () => {
  let component: HighlightsSectionComponent;
  let fixture: ComponentFixture<HighlightsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
