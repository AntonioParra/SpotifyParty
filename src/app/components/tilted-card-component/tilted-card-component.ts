import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tilted-card',
  templateUrl: './tilted-card-component.html',
  styleUrls: ['./tilted-card-component.scss']
})
export class TiltedCardComponent {
  @Input() backgroundImage: string = '';
  @Input() zoomLevel: number = 1;
  @Input() tiltLevel: number = 0;

  transformStyle: string = '';
  backgroundStyle: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.el.nativeElement.querySelector('.card');
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20 * this.tiltLevel;
    const rotateY = (x - centerX) / 20 * this.tiltLevel;

    this.transformStyle = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${this.zoomLevel})
    `;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transformStyle = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transformStyle = `perspective(1000px) scale(${this.zoomLevel})`;
  }
}