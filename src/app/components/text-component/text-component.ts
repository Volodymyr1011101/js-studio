import {AfterViewInit, Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {isPlatformBrowser} from '@angular/common';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import {AnimationService} from '@app/services/animation.service';

@Component({
  selector: 'app-text-component',
  imports: [
    TranslatePipe
  ],
  templateUrl: './text-component.html',
  styleUrl: './text-component.scss',
})

export class TextComponent implements AfterViewInit {
  @Input() public textTranslateKeysArray: string[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: string, private animationService: AnimationService) {
    if(isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  public ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const elements = document.querySelectorAll('.scroll-anim');
      this.animationService.scrollTrigger(elements);
    }
  }
}
