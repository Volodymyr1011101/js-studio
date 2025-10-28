import {
  Component,
  ElementRef,
  inject,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {
  AsyncPipe, CommonModule,
  NgOptimizedImage,
  NgTemplateOutlet
} from '@angular/common';
import {AnimationService} from '@app/services/animation.service';
import {Burger} from '@app/components/header/burger/burger';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseComponent} from '@app/components/base-component';
import {ClickOutsideDirective} from '@app/directives/click-outside';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    RouterLink,
    NgOptimizedImage,
    Burger,
    NgTemplateOutlet,
    AsyncPipe,
    CommonModule,
    ClickOutsideDirective
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header extends BaseComponent implements OnInit {
  public headerElementRef!: ElementRef<HTMLHeadElement>;

  @ViewChild('headerRef', { static: false })
  set headerRef(ref: ElementRef<HTMLHeadElement>) {
    if (ref) {
      this.headerElementRef = ref;
      // Викликаємо функцію анімації тут
      this.runInitialAnimation();
    }
  }

  @ViewChild('browserView' ) public browserViewTpl!: TemplateRef<HTMLElement>;
  @ViewChild('mobileView' ) public mobileViewTpl!: TemplateRef<HTMLElement>;

  public browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);
  private animationService: AnimationService = inject(AnimationService);

  constructor(private translate: TranslateService) {
    super()
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('pl');
    this.translate.use(this.language);
  }
  public currentTemplate$!: Observable<TemplateRef<any>>;

  public anim = false;
  public language = 'pl';
  public navigation: string[] = [
    'reservation',
    'equipment',
    'rules',
    'kontakt'
  ];

  public languages = ['pl', 'ua'];
  public isMenuOpen = false;

  public ngOnInit() {
    if (!this.browserHelpersService.isBrowser()) return;
    this.currentTemplate$ = this.browserHelpersService.screen$!.pipe(
      map(screen => {
        if (screen.width > 768) {
          return this.browserViewTpl;
        }
        return this.mobileViewTpl;
      })
    )
    this.browserHelpersService.isMenuOpened$.subscribe(menu => {
      this.isMenuOpen = menu;
    })

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

  private runInitialAnimation(): void {
    if (this.browserHelpersService.isBrowser() && this.headerElementRef) {
      // Зверніть увагу: використовуємо this.headerElementRef тут
      const navItems = this.headerElementRef.nativeElement.querySelectorAll('.nav_list li');

      // Анімація хедеру
      this.animationService.animationElementFade(
        this.headerElementRef,
        {
          y: -80,
          delay: 0,
          duration: .8,
          ease: 'power3.out',
        });

      // Анімація елементів навігації
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
}
