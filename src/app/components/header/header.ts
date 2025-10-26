import {AfterViewInit, Component, ElementRef, inject, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {isPlatformBrowser, NgOptimizedImage} from '@angular/common';
import {AnimationService} from '@app/services/animation.service';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header implements AfterViewInit {
  @ViewChild('headerRef', { static: true }) headerRef!: ElementRef<HTMLHeadElement>;
  @ViewChild('flagRef', { static: true }) flagRef!: ElementRef<HTMLButtonElement>;

  private animationService: AnimationService = inject(AnimationService);

  constructor(private translate: TranslateService, @Inject(PLATFORM_ID) private platformId: string) {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('pl');
    this.translate.use(this.language);
  }
  public anim = false;
  public language = 'pl';
  public navigation: string[] = [
    'reservation',
    'equipment',
    'rules',
    'kontakt'
  ];

  public languages = ['pl', 'ua'];

  public switchLanguage() {
    if(this.anim) return
    this.langSwitcher();
  }

  public langSwitcher(): void {
    this.anim = true
    const next =
      this.language === this.languages[0]
        ? this.languages[1]
        : this.languages[0];
    this.translate.use(next);
    this.animationNavigation();
    this.language = next;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navItems = document.querySelectorAll('li');

      this.animationService.animationElementFade(
        this.headerRef,
        {
          y: -80,
          delay: 0,
          duration: .8,
          ease: 'power3.out',
        })
      this.animationService.animationListItems(
        navItems,
        {
          y: -20,
          duration: .5,
          opacity: 0,
          delay: .4,
          stagger: .1,
          ease: 'power2.out'
        }
      );
    }
  }
  private completeAnimation(): void {
    this.anim = false;
  }

  public animationNavigation(): void {
    const navItems = document.querySelectorAll('.translate-item');
    this.animationService.animationListItems(
      navItems,
      {
        y: -20,
        duration: .3,
        opacity: 0,
        delay: 0,
        stagger: .1,
        ease: 'power2.out',
        onComplete: () => this.completeAnimation()
      }
    );
  }
}
