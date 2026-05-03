import {Component, inject} from '@angular/core';
import {RulesComponent} from '@app/components/rules/rules';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-rules',
  imports: [
    RulesComponent
  ],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class Rules {

}
