import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-case-tool',
  imports: [FormsModule],
  templateUrl: './text-case-tool.html',
  styleUrl: './text-case-tool.css'
})
export class TextCaseTool {
  inputText = '';
  outputText = '';

  toUpper() {
    this.outputText = this.inputText.toUpperCase();
  }

  toLower() {
    this.outputText = this.inputText.toLowerCase();
  }

  toCapital(){
    this.outputText = this.inputText
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }
}
