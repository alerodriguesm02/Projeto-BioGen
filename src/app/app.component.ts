import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { SecaoComponent } from "./secao/secao.component";
import { FooterComponent } from "./footer/footer.component";
import { MiniCarroselComponent } from "./mini-carrosel/mini-carrosel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, SecaoComponent, FooterComponent, MiniCarroselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto-BioGen';
}
