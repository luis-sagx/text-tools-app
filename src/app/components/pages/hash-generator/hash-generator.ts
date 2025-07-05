import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { OutputBox } from '../../ui/output-box/output-box';

@Component({
  selector: 'app-hash-generator',
  standalone: true,
  imports: [FormsModule, OutputBox],
  templateUrl: './hash-generator.html',
  styleUrl: './hash-generator.css'
})
export class HashGenerator {
  inputText = signal('');
  selectedAlgorithm = signal<'MD5' | 'SHA-1' | 'SHA-256' | 'SHA-512'>('SHA-256');
  result = signal(''); // resultado generado

  async generateHash() {
    const text = this.inputText();

    if (!text) {
      this.result.set('');
      return;
    }

    const algorithm = this.selectedAlgorithm();

    if (algorithm === 'MD5') {
      const hash = CryptoJS.MD5(text).toString();
      this.result.set(hash);
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    this.result.set(hashHex);
  }

  clear() {
    this.inputText.set('');
    this.result.set('');
  }
}
