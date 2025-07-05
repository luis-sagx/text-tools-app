import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-word-count',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './word-count.html',
  styleUrl: './word-count.css'
})
export class WordCount {
  inputText = signal(''); 

  wordCount = computed(() =>
    this.inputText().trim() ? this.inputText().trim().split(/\s+/).length : 0
  );

  charCount = computed(() => this.inputText().length);

  clear() {
    this.inputText.set('');
  }
}
