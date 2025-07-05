import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutputBox } from '../../ui/output-box/output-box';

@Component({
  selector: 'app-text-json-converter',
  standalone: true,
  imports: [FormsModule, OutputBox],
  templateUrl: './text-json-converter.html',
  styleUrl: './text-json-converter.css'
})
export class TextJsonConverter {
  inputText: string = '';
  result: string = '';

  hasError = false;

  textToJson() {
    this.hasError = false;
    try {
      const lines = this.inputText.split('\n');
      const obj: Record<string, any> = {};

      for (let line of lines) {
        const [key, ...rest] = line.split(':');
        if (!key || rest.length === 0) continue;

        const rawValue = rest.join(':').trim();
        let value: any = rawValue;

        if (rawValue === 'true') value = true;
        else if (rawValue === 'false') value = false;
        else if (!isNaN(Number(rawValue))) value = Number(rawValue);

        obj[key.trim()] = value;
      }

      this.result = JSON.stringify(obj, null, 2);
    } catch {
      this.hasError = true;
      this.result = '';
    }
  }

  jsonToText() {
    this.hasError = false;
    try {
      const obj = JSON.parse(this.inputText);
      let plainText = '';
      for (const key in obj) {
        plainText += `${key}: ${obj[key]}\n`;
      }
      this.result = plainText.trim();
    } catch {
      this.hasError = true;
      this.result = '';
    }
  }


  clear() {
    this.inputText = '';
    this.result = '';
  }
}
