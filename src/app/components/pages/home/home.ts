import { Component } from '@angular/core';
import { ToolCard } from '../../ui/tool-card/tool-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tools = [
    {
      title: 'Text ⇄ JSON',
      description: 'Convert between plain text and JSON format.',
      iconClass: 'fas fa-code',
      link: '/text-json-converter'
    },
    {
      title: 'Hash Generator',
      description: 'Generate SHA256, MD5 and other hashes.',
      iconClass: 'fas fa-hashtag',
      link: '/hash-generator'
    },
    {
      title: 'Text Case Converter',
      description: 'Convert to UPPERCASE, lowercase, or Capitalized.',
      iconClass: 'fas fa-text-height',
      link: '/text-case'
    },
    {
      title: 'Base64 Tool',
      description: 'Encode and decode Base64 strings.',
      iconClass: 'fas fa-lock',
      link: '/base64'
    },    
    {
      title: 'Word Counter',
      description: 'Count words and characters in your text.',
      iconClass: 'fas fa-sort-numeric-up',
      link: '/word-count'
    },
    {
      title: 'Reverse / Palindrome',
      description: 'Invert text or make it a palindrome.',
      iconClass: 'fas fa-sync-alt',
      link: '/reverse-palindrome'
    }
  ];
}
