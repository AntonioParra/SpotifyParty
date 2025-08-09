import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selectable-button',
  templateUrl: './selectable-button-component.html',
  styleUrls: ['./selectable-button-component.scss']
})
export class SelectableButtonComponent {
  @Input() text: string = '';
  @Input() selected: boolean = false;

  toggleSelected() {
    // this.selected = !this.selected;
  }
}
