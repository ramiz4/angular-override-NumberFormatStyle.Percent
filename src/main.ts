import { Component, LOCALE_ID, ɵLocaleDataIndex } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  NumberFormatStyle,
  PercentPipe,
  registerLocaleData,
} from '@angular/common';
import localeDeCH from '@angular/common/locales/de-CH';
import 'zone.js';

(localeDeCH[ɵLocaleDataIndex.NumberFormats] as any[])[
  NumberFormatStyle.Percent
] = ' %';
registerLocaleData(localeDeCH);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PercentPipe],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-CH',
    },
  ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h2>{{ 0.55 | percent }}</h2>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
