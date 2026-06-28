import {ChangeDetectorRef, Component, inject, OnInit, TemplateRef} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {additionalEquipmentData, equipmentData} from '@pages/equipment/data';
import {EquipmentItemType} from '../../../types';
import {TitleWithGradientComponent} from '@app/components/ui/title-with-gradient/title-with-gradient.component';
import {TranslatePipe} from '@ngx-translate/core';
import {EquipmentItem} from '@app/components/ui/equipment-item/equipment-item';
import {ModalService} from '@app/services/root-modal.service';

@Component({
  selector: 'app-equipment',
  imports: [
    TitleWithGradientComponent,
    TranslatePipe,
    NgOptimizedImage,
    EquipmentItem
  ],
  templateUrl: './equipment.html',
  styleUrl: './equipment.scss',
})
export class Equipment implements OnInit {
  private cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  private modalService = inject(ModalService);

  public equipmentItems:  EquipmentItemType[] = [];
  public additionalEquipmentData: EquipmentItemType[] = [];

  public ngOnInit() {
    this.equipmentItems = equipmentData;
    this.additionalEquipmentData = additionalEquipmentData;
    this.cd.markForCheck();
  }

  public openItem(template: TemplateRef<any>, data: any): void {
    this.modalService.open(template, data);
  }

  public closeModal(): void {
    this.modalService.close();
  }
}
