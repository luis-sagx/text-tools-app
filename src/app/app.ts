import { Component } from '@angular/core';
import { TextCaseTool } from './components/text-case-tool/text-case-tool';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextCaseTool],
  template: `<app-text-case-tool></app-text-case-tool>`,
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'text-tools-app';
}
