import { Component } from '@angular/core';
import {shortInfo} from '@app/nock_data/short-info';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-short-info',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './short-info.html',
  styleUrl: './short-info.scss',
})
export class ShortInfo {
  public items = shortInfo;

}
