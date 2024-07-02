import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedImg]',
  standalone: true
})
export class RoundedImgDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    const styles = {
      'border-radius': '50%',
      'width': '200px',
      'height': '200px',
      'object-fit': 'cover',
      'margin-top': '1em',
      'margin-bottom': '2em',
    };

    this.renderer.setStyle(this.el.nativeElement, 'border-radius', styles['border-radius']); 
    this.renderer.setStyle(this.el.nativeElement, 'width', styles['width']);
    this.renderer.setStyle(this.el.nativeElement, 'height', styles['height']);
    this.renderer.setStyle(this.el.nativeElement, 'object-fit', styles['object-fit']);
    this.renderer.setStyle(this.el.nativeElement, 'margin-top', styles['margin-top']);
    this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', styles['margin-bottom']);
  }
}
