import { Component } from '@angular/core';
import { FillPageComponent } from "../../components/fill-page-component/fill-page-component";
import { FillContentDirective } from '../../directives/fill-content-directive';
import { YearTextComponent } from '../../components/year-text-component/year-text-component';
import { Router } from '@angular/router';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home-page',
  imports: [FillPageComponent, FillContentDirective, YearTextComponent, Header],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

  data = [{
    year: '2025',
    imgSrc: './assets/img/2025.jpg'
  }, {
    year: '2024',
    imgSrc: './assets/img/2024.jpg'
  }]

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    document.documentElement.style.setProperty("--primary-back", "#2f4858");
  }

  navToYear(year: string) {
    this.router.navigateByUrl(year)
  }

}
