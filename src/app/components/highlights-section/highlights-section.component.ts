import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

interface IHighlights {
  title: string;
  content: string;
  imgUrl: string;
  buttonText: string;
  hidden: boolean;
}

@Component({
  selector: "app-highlights-section",
  templateUrl: "./highlights-section.component.html",
  styleUrls: ["./highlights-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsSectionComponent implements OnInit {
  highlights: IHighlights[] = [
    {
      title: "coleção nova",
      content:
        "Uma mistura das nossas clássicas camisetas brasilienses com novos estilos inspirados nos recortes modernos e minimalistas da capital.",
      imgUrl: "/assets/images/highlights/novas.png",
      buttonText: "conheça as novas peças",
      hidden: false,
    },
    {
      title: "clássicas",
      content:
        "Nossa marca registrada de camisetas inspiradas na arquitetura, na paisagem e na cultura de Brasília.",
      imgUrl: "/assets/images/highlights/classicas.png",
      buttonText: "venha vestir brasília",
      hidden: true,
    },
  ];
  currentIndex = 0;

  ngOnInit() {
    // setInterval(() => {
    //   this.next();
    // }, 1000);
  }

  prev() {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.highlights.length - 1;
    }
  }

  next() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex === this.highlights.length) {
      this.currentIndex = 0;
    }
  }

  getUrl(item: IHighlights): string {
    return `url(${item.imgUrl})`;
  }
}
