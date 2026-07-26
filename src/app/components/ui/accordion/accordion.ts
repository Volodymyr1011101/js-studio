import {Component, Input} from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {TranslatePipe} from '@ngx-translate/core';
import {DynamicRenderItem} from '@app/components/dynamic-render-item/dynamic-render-item';

@Component({
  selector: 'app-accordion',
  imports: [AccordionModule, TranslatePipe, DynamicRenderItem],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() value: string | number = 0;
}
