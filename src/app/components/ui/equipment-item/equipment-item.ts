import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TitleWithGradientComponent} from '@app/components/ui/title-with-gradient/title-with-gradient.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-equipment-item',
  imports: [
    TranslatePipe,
    TitleWithGradientComponent,
    NgOptimizedImage
  ],
  templateUrl: './equipment-item.html',
  styleUrl: './equipment-item.scss',
})
export class EquipmentItem {
  @Input() public name: string = '';
  @Input() public description: string = '';
  @Input() public image: string = '';
  @Input() public version: string = '';
  @Input() public addName: string = '';
}
