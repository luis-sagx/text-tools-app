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
  errorMessage: string = '';
  hasError = false

  textToJson() {
    this.hasError = false;
    this.errorMessage = '';
    const obj: Record<string, any> = {};
    const lines = this.inputText.split('\n');
  
    const setNestedValue = (target: any, path: string[], value: any) => {
      let current = target;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (!(key in current)) current[key] = {};
        else if (typeof current[key] !== 'object') {
          throw new Error(`Conflict at "${key}" - expected object`);
        }
        current = current[key];
      }
      current[path[path.length - 1]] = value;
    };
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
  
      const [rawKey, ...rest] = line.split(':');
      if (!rawKey || rest.length === 0) {
        this.hasError = true;
        this.errorMessage = `Line ${i + 1}: Missing or invalid key-value pair`;
        this.result = '';
        return;
      }
  
      const keyPath = rawKey.trim().split('.').filter(Boolean);
      const rawValue = rest.join(':').trim();
  
      let value: any = rawValue;
      if (rawValue === 'true') value = true;
      else if (rawValue === 'false') value = false;
      else if (rawValue === 'null') value = null;
      else if (!isNaN(Number(rawValue))) value = Number(rawValue);
  
      try {
        setNestedValue(obj, keyPath, value);
      } catch (error: any) {
        this.hasError = true;
        this.errorMessage = `Line ${i + 1}: ${error.message}`;
        this.result = '';
        return;
      }
    }
  
    this.result = JSON.stringify(obj, null, 2);
  }
  
  jsonToText() {
    this.hasError = false;
    this.errorMessage = '';
    
    const flattenObject = (obj: any, parentKey = '', result: Record<string, any> = {}) => {
      for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
  
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
  
        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
          flattenObject(value, fullKey, result);
        } else {
          result[fullKey] = value;
        }
      }
      return result;
    };
  
    try {
      const parsed = JSON.parse(this.inputText);
      if (typeof parsed !== 'object' || parsed === null) {
        this.hasError = true;
        this.errorMessage = 'Input is not a valid JSON object';
        this.result = '';
        return;
      }
  
      const flatObj = flattenObject(parsed);
      const plainText = Object.entries(flatObj)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
  
      this.result = plainText.trim();
    } catch (err: any) {
      this.hasError = true;
      this.errorMessage = 'Invalid JSON format';
      this.result = '';
    }
  }
  


  clear() {
    this.inputText = '';
    this.result = '';
  }
}
