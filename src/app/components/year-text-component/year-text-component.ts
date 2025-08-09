import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-text',
  imports: [],
  templateUrl: './year-text-component.html',
  styleUrl: './year-text-component.scss'
})
export class YearTextComponent {
  @Input() text: string | number | undefined;
  @Input() imgSrc: string | undefined;
}
