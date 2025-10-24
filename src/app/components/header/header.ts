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
        .8,
        0,
        -80,
        'power3.out',
        0
      )
      this.animationService.animationListItems(
        navItems,
        -20,
        0.5,
        0.4,
        0.1,
        'power2.out'
      );
    }
  }

  private completeAnimation(): void {
    this.anim = false;
  }

  public animationNavigation(): void {
    const navItems = document.querySelectorAll('li');
    this.animationService.animationListItems(
      navItems,
      -20,
      0.4,
      0,
      0.1,
      'power2.out',
      () => this.completeAnimation());
  }
}
