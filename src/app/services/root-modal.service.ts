import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, EmbeddedViewRef, inject, Injectable, TemplateRef } from '@angular/core';
import {RootModalComponent} from '@app/components/ui/root-modal-component/root-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private appRef = inject(ApplicationRef);
  private injector = inject(EnvironmentInjector);
  private componentRef?: ComponentRef<RootModalComponent>;

  public open<T>(template: TemplateRef<any>, data?: T): void {
    // Якщо якась модалка вже відкрита — закриваємо її
    if (this.componentRef) {
      this.close();
    }

    // 1. Створюємо інстанс компонента
    this.componentRef = createComponent(RootModalComponent, {
      environmentInjector: this.injector
    });

    // 2. Передаємо дані в компонент
    this.componentRef.instance.template = template;
    this.componentRef.instance.data = data;
    this.componentRef.instance.closeFn = () => this.close();

    // 3. Прописуємо в ApplicationRef, щоб Angular знав про зміни всередині цієї модалки
    this.appRef.attachView(this.componentRef.hostView);

    // 4. Отримуємо чистий DOM-елемент та аппендимо його в body
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  public close(): void {
    if (!this.componentRef) return;

    // Прибираємо з Change Detection циклу та дестроїмо компонент
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    this.componentRef = undefined;
  }
}
