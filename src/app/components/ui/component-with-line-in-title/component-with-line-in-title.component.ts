import {Component, Input, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'component-with-line-in-title',
  imports: [
    TranslatePipe
  ],
  templateUrl: './component-with-line-in-title.component.html',
  styleUrl: './component-with-line-in-title.component.scss',
})
export class ComponentWithLineInTitleComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public elementClasses: string[] = [];
  @Input() public type: 'text-left' | 'text-right' | 'text-center' = 'text-center'

  public ngOnInit() {

  }

  public parseClassesArrayToString(): string {
    let stringClass = '';
    for (let element of this.elementClasses) {
      stringClass = stringClass + ' ' + element;
    }
    return stringClass;
  }
}
