import {Component, inject, OnInit} from '@angular/core';
import {Hero} from '@app/components/hero/hero';
import {ShortInfo} from '@app/components/short-info/short-info';
import {Gallery} from '@app/components/gallery/gallery';
import {TextComponent} from '@app/components/text-component/text-component';
import {DynamicRenderItem} from '@app/components/dynamic-render-item/dynamic-render-item';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import {BaseComponent} from '@app/components/base-component';
import {pipe} from 'rxjs';
import {Map} from '@app/components/map/map';
import {KontaktComponent} from '@app/components/kontakt-component/kontakt';

@Component({
  selector: 'app-main-page',
  imports: [
    Hero,
    ShortInfo,
    Gallery,
    TextComponent,
    DynamicRenderItem,
    Map,
    KontaktComponent,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage extends BaseComponent implements  OnInit {

  private browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);
  public mobile = false;
  public mainText: string[] = [
    'first-text-first-paragraph',
    'first-text-second-paragraph',
    'first-text-third-paragraph',
    'first-text-fourth-paragraph',
  ]

  public SEO_TEXT = [
    'seo_first_p',
    'seo_second_p',
  ]

  public additionalText = [
    'seo_third_p',
    'seo_fourth_p',
  ]

  public mainPageList = [
    'seo_list_1',
    'seo_list_2',
    'seo_list_3',
    'seo_list_4',
    'seo_list_5',
    'seo_list_6',
  ]

  public ngOnInit(): void {
      if(!this.browserHelpersService.isBrowser()) {return}
      this.browserHelpersService.screen$?.subscribe(screen => {
        this.mobile = screen.width < 768;
      })
  }
}
