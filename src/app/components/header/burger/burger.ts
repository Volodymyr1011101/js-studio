import {Component, inject} from '@angular/core';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-burger',
  imports: [
    AsyncPipe
  ],
  templateUrl: './burger.html',
  styleUrl: './burger.scss',
})
export class Burger {

  public browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);

  public activateMenu(): void {
    const menuState = this.browserHelpersService.isMenuOpened$.getValue()
    this.browserHelpersService.toggleMenu(!menuState);
  }
}
