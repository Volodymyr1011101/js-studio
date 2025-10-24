import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @ViewChild('heroRef', { static: true }) heroRef!: ElementRef<HTMLHeadElement>;

  public heroAnimation(): void {
    gsap.from(this.heroRef.nativeElement, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }
}
