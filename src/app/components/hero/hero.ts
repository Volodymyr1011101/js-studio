import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import gsap from 'gsap';
import {AnimationService} from '@app/services/animation.service';

@Component({
  selector: 'app-hero',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private animationService = new AnimationService();

  @ViewChild('heroRef', { static: true }) heroRef!: ElementRef<HTMLHeadElement>;

  public ngOnInit() {
    this.animationService.animationElementFade(this.heroRef, 1, 0, -80, 'power3.out', 0)
  }
}
