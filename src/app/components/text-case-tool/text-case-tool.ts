import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopyButton } from '../ui/copy-button/copy-button';

@Component({
  selector: 'app-text-case-tool',
  imports: [FormsModule, CopyButton],
  templateUrl: './text-case-tool.html',
  styleUrl: './text-case-tool.css'
})
export class TextCaseTool {
  inputText = '';
  outputText = '';

  toUpper() {
    if(this.verifyInput()){
      this.outputText = this.inputText.toUpperCase();
    }
  }

  toLower() {
    if(this.verifyInput()){
      this.outputText = this.inputText.toLowerCase();
    }
  }

  toCapital(){
    if(this.verifyInput()){
      this.outputText = this.inputText
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    }
  }

  verifyInput() : boolean {
    if(/[a-zA-Z]/.test(this.inputText)) {
      return true;
    }
    else {
      this.outputText = 'Please enter valid text.';
      return false;
    }
  }

  clear() {
    this.inputText = '';
    this.outputText = '';
  }
}
