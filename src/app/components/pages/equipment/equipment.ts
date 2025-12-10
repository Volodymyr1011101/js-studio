import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-equipment',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './equipment.html',
  styleUrl: './equipment.scss',
})
export class Equipment {
  public inProgress = true;
}
