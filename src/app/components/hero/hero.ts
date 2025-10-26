import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {AnimationService} from '@app/services/animation.service';
import {Button} from '@app/components/button/button';

@Component({
  selector: 'app-hero',
  imports: [
    NgOptimizedImage,
    TranslatePipe,
    Button
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private animationService = new AnimationService();

  @ViewChild('heroRef', { static: true }) heroRef!: ElementRef<HTMLHeadElement>;

  public ngOnInit() {
    this.animationService.animationElementFade(this.heroRef, {duration: 1, delay: 0, y:-80, opacity:0, ease: 'power3.out'})
  }
}
