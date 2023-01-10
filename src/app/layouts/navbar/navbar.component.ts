import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";

interface IMenuItems {
  name: string;
  id: string;
  path: string;
}

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private readonly router: Router) {}

  menuItems: IMenuItems[] = [
    {
      name: "início",
      id: "homeSection",
      path: "/",
    },
    {
      name: "destaques",
      id: "highlightsSection",
      path: "/",
    },
    {
      name: "catálogo",
      id: "catalogSection",
      path: "/catalogo",
    },
    {
      name: "contato",
      id: "contactSection",
      path: "/",
    },
  ];
  drawer: Boolean = false;

  toggleDrawer(): void {
    const bodyEl = document.querySelector("body");
    const menuIconBars: any = document.querySelectorAll(".menu-icon-bar");
    const drawerElement: any = document.querySelector(".drawer");

    // toogle menu icon bars animation
    menuIconBars[0].classList.toggle("first-bar-active");
    menuIconBars[1].classList.toggle("second-bar-active");
    menuIconBars[2].classList.toggle("third-bar-active");

    // shows the drawer
    drawerElement.classList.toggle("drawer-active");
    this.drawer = !this.drawer;

    // blocks scrolling when drawer is open
    if (!bodyEl) return;
    bodyEl.style.overflow = this.drawer ? "hidden" : "scroll";
  }

  goTo(item: IMenuItems): void {
    this.toggleDrawer();
    console.log(item.path);
    this.router.navigate([item.path]).then(() => {
      const element = document.getElementById(item.id);
      if (!element) return;
      const y = element?.getBoundingClientRect().top + window.pageYOffset - 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }
}
