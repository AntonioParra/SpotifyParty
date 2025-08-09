import { Directive, Input, Renderer2, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFillContent]',
})
export class FillContentDirective implements OnChanges {

  @Input('appFillContent') fill: boolean | '' = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isActive(this.fill)) {
      this.renderer.setStyle(this.el.nativeElement, 'flex', '1 1 auto');
      // this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
      // this.renderer.setStyle(this.el.nativeElement, 'flex-direction', 'column');
      // this.renderer.setStyle(this.el.nativeElement, 'overflow', 'auto');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'flex');
      // this.renderer.removeStyle(this.el.nativeElement, 'display');
      // this.renderer.removeStyle(this.el.nativeElement, 'flex-direction');
      // this.renderer.removeStyle(this.el.nativeElement, 'overflow');
    }
  }

  private isActive(val: any): boolean {
    return val === '' || val === true || val === 'true';
  }
}
