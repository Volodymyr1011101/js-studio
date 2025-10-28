import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: EventTarget | null): void {

    if (!targetElement) {
      return;
    }

    const clickedElement = targetElement as HTMLElement;

    const nativeElement: HTMLElement = this.elementRef.nativeElement;

    const clickedInside = nativeElement.contains(clickedElement);

    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
