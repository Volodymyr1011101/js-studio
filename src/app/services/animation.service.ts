import {ElementRef, Injectable} from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  public animationElementFade(elementRef: ElementRef, duration:number, delay: number = 0, y: number, easy: string = 'power3.out', stagger: number = 0): void {
      gsap.from(elementRef.nativeElement, {
        y,
        opacity: 0,
        duration,
        delay,
        easy,
        stagger
      });
  }

  public animationListItems<T extends Element>(
    elements: NodeListOf<T>,
    y: number,
    duration: number,
    delay: number = 0,
    stagger: number = 0,
    ease: string = 'power2.out',
    onComplete?: () => void ): void {
    gsap.from(elements, {
      opacity: 0,
      y,
      duration,
      delay,
      stagger,
      ease,
      onComplete
    });
  }
}
