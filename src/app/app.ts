import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
