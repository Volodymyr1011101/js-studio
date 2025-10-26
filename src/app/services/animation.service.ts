import {ElementRef, inject, Inject, Injectable, OnInit, PLATFORM_ID} from '@angular/core';
import gsap from 'gsap';
import {isPlatformBrowser} from '@angular/common';

interface configs {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  onComplete?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  public animationElementFade(elementRef: ElementRef, configs: configs): void {
      gsap.from(elementRef.nativeElement, {
        ...configs,
      });
  }

  public animationListItems<T extends Element>(
    elements: NodeListOf<T>,
    configs: configs,
  ): void {
    gsap.from(elements, {...configs});
  }

  public scrollTrigger<T extends Element>(elements: NodeListOf<T>):void {
    elements.forEach(element => {
      gsap.from(
        element,
        {
          scrollTrigger: {
            trigger: element,
            toggleActions: 'restart none none none',
            start: '20px 80%',
          },
          x: 100,
          duration: 1,
          opacity: 0
        }
      )
    })
  }
}
