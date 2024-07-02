import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCursorPointer]',
  standalone: true
})
export class CursorPointerDirective {

  @HostBinding('style.cursor') cursor: string = 'default'; 

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.cursor = 'pointer'; 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cursor = 'default'; 
  }
}

