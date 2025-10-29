import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Header} from './components/header/header';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import {ScrollToTop} from '@app/components/ui/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Header, ScrollToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
