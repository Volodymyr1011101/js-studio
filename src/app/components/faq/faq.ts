import { Component } from '@angular/core';
import {Accordion} from '@app/components/ui/accordion/accordion';
import {faq} from '@app/nock_data/data'
@Component({
  selector: 'app-faq',
  imports: [
    Accordion
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FAQ {
  public faq = faq;
}
