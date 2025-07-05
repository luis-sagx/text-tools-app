import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopyButton } from '../ui/copy-button/copy-button';

@Component({
  selector: 'app-reverse-palindrome-tool',
  standalone: true,
  imports: [FormsModule, CopyButton],
  templateUrl: './reverse-palindrome-tool.html',
  styleUrl: './reverse-palindrome-tool.css'
})
export class ReversePalindromeTool {
  inputText: string = '';
  outputText: string = '';

  invertText() {
    this.outputText = this.inputText.split('').reverse().join('');
  }

  generatePalindrome() {
    const reversed = this.inputText.split('').reverse().join('');
    this.outputText = this.inputText + reversed;
  }

  clear() {
    this.inputText = '';
    this.outputText = '';
  }
}
