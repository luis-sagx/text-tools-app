import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutputBox } from '../ui/output-box/output-box';

@Component({
  selector: 'base64-tool',
  standalone: true,
  imports: [FormsModule, OutputBox],
  templateUrl: './base64-tool.html',
  styleUrl: './base64-tool.css'
})
export class Base64Tool {
  inputText: string = '';
  result: string = '';

  convertToBase64(): void {
    try {
      this.result = btoa(this.inputText);
    } catch (error) {
      this.result = '⚠️ Error: El texto contiene caracteres no compatibles. Usa encodeURIComponent primero si es necesario.';
    }
  }

  convertToText(): void {
    try {
      this.result = atob(this.inputText);
    } catch (error) {
      this.result = '⚠️ Error: El contenido no es una cadena Base64 válida.';
    }
  }

  clear(): void {
    this.inputText = '';
    this.result = '';
  }
}
