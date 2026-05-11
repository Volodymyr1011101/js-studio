import {Component, Input} from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-accordion',
  imports: [AccordionModule, TranslatePipe],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() value: string | number = 0;
}
