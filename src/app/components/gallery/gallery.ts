import {isPlatformBrowser} from "@angular/common";
import {Component, OnInit, inject, signal, PLATFORM_ID, Inject, Input, ElementRef} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import {GalleryItem} from '../../../types';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-gallery',
  imports: [ImageModule, ButtonModule, CarouselModule, TagModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements  OnInit {
  public responsiveOptions: any[] | undefined;

  public isBrowser: boolean;
  @Input() public type?: 'gallery';
  @Input() set images(value: GalleryItem[]) {
    if (value) {
      this.galleryImages.set(value);
    }
  }
  public galleryImages = signal<GalleryItem[]>([]);
  @Input() public numVisibleDesktop: number = 2;
  @Input() public numVisibleTablet: number = 2;
  @Input() public numVisibleTablet2: number = 2;
  @Input() public numVisiblePhone: number = 1;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1920px',
        numVisible: this.numVisibleDesktop,
        numScroll: 1
      },
      {
        breakpoint: '1400px',
        numVisible: this.numVisibleDesktop,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: this.numVisibleTablet,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: this.numVisibleTablet2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: this.numVisiblePhone,
        numScroll: 1
      }
    ];
  }
  public handleShowImage(): void {
    const body = document.querySelector("body");
    body?.classList.toggle("show-image");
  }
}
