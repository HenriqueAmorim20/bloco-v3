import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home-section",
  templateUrl: "./home-section.component.html",
  styleUrls: ["./home-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionComponent {}
