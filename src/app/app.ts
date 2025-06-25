import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextCaseTool } from './components/text-case-tool/text-case-tool';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextCaseTool],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'text-tools-app';
}
