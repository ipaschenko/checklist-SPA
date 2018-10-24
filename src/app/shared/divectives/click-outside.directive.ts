import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output()appClickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target']) documentClick(e) {
    if (!this.el.nativeElement.contains(e)) {
      console.log(11);
      this.appClickOutside.emit();
    }
  }

  constructor(private el: ElementRef) {}
}
