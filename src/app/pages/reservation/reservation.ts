import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Reserv} from '@app/components/reserv/reserv';

@Component({
  selector: 'app-reservation',
  imports: [
    Reserv
  ],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss',
})
export class Reservation implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      var bookero_config = {
        id: 'pqSCCd2iS6fs',
        container: 'bookero',
        type: 'calendar',
        position: '',
        plugin_css: true,
        lang: 'pl'
      };

      (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';
        d.body.appendChild(s);
      })();
    }
  }
}
