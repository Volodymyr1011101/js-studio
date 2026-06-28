import { Component, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-global-modal',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="modal-backdrop" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <ng-container [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ $implicit: data }"></ng-container>
      </div>
    </div>
  `,
  styleUrl: './root-modal.component.scss'
})
export class RootModalComponent {
  public template!: TemplateRef<any>;
  public data: any;
  public closeFn!: () => void;

  public close(): void {
    if (this.closeFn) {
      this.closeFn();
    }
  }
}
