import {AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {isPlatformBrowser, NgOptimizedImage} from '@angular/common';
import gsap from 'gsap';

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

      gsap.from(this.headerRef.nativeElement, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from(navItems, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }
  }

  public animationNavigation(): void {
    const navItems = document.querySelectorAll('li');
    gsap.from(navItems, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      delay: 0,
      stagger: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        this.anim = false;
      }
    });
  }
}
