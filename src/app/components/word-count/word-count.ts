import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';


@Component({
  selector: 'app-word-count',
  imports: [FormsModule],
  templateUrl: './word-count.html',
  styleUrl: './word-count.css'
})
export class WordCount {
  inputText: string = '';
  wordCount: number = 0;
  charCount: number = 0;

  countWords() {
    this.wordCount = this.inputText ? this.inputText.trim().split(/\s+/).length : 0;
    this.charCount = this.inputText.length;
  }

  clear() {
    this.inputText = '';
    this.wordCount = 0;
    this.charCount = 0;
  }
}
