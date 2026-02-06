import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {GallerizeDirective} from "ng-gallery/lightbox";
import {isPlatformBrowser} from "@angular/common";
import {GalleryComponent, GalleryConfig, GalleryItem} from "ng-gallery";

@Component({
  selector: 'app-gallery',
  imports: [
    GallerizeDirective,
    GalleryComponent
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

  public config: GalleryConfig = {
    scrollBehavior: 'smooth',
    thumbs: true,
    autoHeight: false,
  };
  public images:  GalleryItem[] = [
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/1.webp",
        thumb: "/images/gallery/1.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/2.webp",
        thumb: "/images/gallery/2.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/2_.webp",
        thumb: "/images/gallery/2_.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/3.webp",
        thumb: "/images/gallery/3.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/3_.webp",
        thumb: "/images/gallery/3_.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/4.webp",
        thumb: "/images/gallery/4.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/5.webp",
        thumb: "/images/gallery/5.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/6.webp",
        thumb: "/images/gallery/6.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/7.webp",
        thumb: "/images/gallery/7.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/8.webp",
        thumb: "/images/gallery/8.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/9.webp",
        thumb: "/images/gallery/9.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/10.webp",
        thumb: "/images/gallery/10.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/11.webp",
        thumb: "/images/gallery/11.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/12.webp",
        thumb: "/images/gallery/12.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/13.webp",
        thumb: "/images/gallery/13.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/14.webp",
        thumb: "/images/gallery/14.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/15.webp",
        thumb: "/images/gallery/15.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/16.webp",
        thumb: "/images/gallery/16.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/17.webp",
        thumb: "/images/gallery/17.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/18.webp",
        thumb: "/images/gallery/18.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/19.webp",
        thumb: "/images/gallery/19.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/20.webp",
        thumb: "/images/gallery/20.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/21.webp",
        thumb: "/images/gallery/21.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/22.webp",
        thumb: "/images/gallery/22.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/23.webp",
        thumb: "/images/gallery/23.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/24.webp",
        thumb: "/images/gallery/24.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/25.webp",
        thumb: "/images/gallery/25.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/26.webp",
        thumb: "/images/gallery/26.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/27.webp",
        thumb: "/images/gallery/27.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/28.webp",
        thumb: "/images/gallery/28.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/29.webp",
        thumb: "/images/gallery/29.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/30.webp",
        thumb: "/images/gallery/30.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/31.webp",
        thumb: "/images/gallery/31.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/32.webp",
        thumb: "/images/gallery/32.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/33.webp",
        thumb: "/images/gallery/33.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/34.webp",
        thumb: "/images/gallery/34.webp",
      }
    },
    {
      "type": "image",
      "data": {
        "alt": "Gallery image",
        "src": "/images/gallery/35.webp",
        thumb: "/images/gallery/35.webp",
      }
    },
  ]

  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
