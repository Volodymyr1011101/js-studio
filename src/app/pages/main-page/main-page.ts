import {Component, inject, OnInit} from '@angular/core';
import {Hero} from '@app/components/hero/hero';
import {ShortInfo} from '@app/components/short-info/short-info';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import {BaseComponent} from '@app/components/base-component';
import {Map} from '@app/components/map/map';
import {WhyWe} from '@app/components/why-we/why-we';
import {WhoWe} from "@app/components/who-we/who-we";
import {GalleryComponent} from "@app/components/gallery-component/gallery-component";
import {WhatWaitingForYou} from "@app/components/what-waiting-for-you/what-waiting-for-you";
import {FAQ} from "@app/components/faq/faq";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-main-page',
    imports: [
        Hero,
        ShortInfo,
        Map,
        WhyWe,
        WhoWe,
        GalleryComponent,
        WhatWaitingForYou,
        FAQ,
        TranslatePipe,
    ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage extends BaseComponent implements  OnInit {

  private browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);
  public mobile = false;


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
      });
  }
}
