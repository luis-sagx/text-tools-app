import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { TextCaseTool } from './components/text-case-tool/text-case-tool'; 
import { Base64Tool } from './components/base64-tool/base64-tool';
import { WordCount } from './components/word-count/word-count';
import { HashGenerator } from './components/hash-generator/hash-generator';
import { TextJsonConverter } from './components/text-json-converter/text-json-converter';
import { ReversePalindromeTool } from './components/reverse-palindrome-tool/reverse-palindrome-tool';

export const routes: Routes = [
    {
        path: 'text-case',
        component: TextCaseTool,
    },
    {
        path: 'base64',
        component: Base64Tool,
    },
    {
        path: 'word-count',
        component: WordCount,
    },
    {
        path: 'hash-generator',
        component: HashGenerator,
    },
    {
        path: 'text-json-converter',
        component: TextJsonConverter,
    },
    {
        path: 'reverse-palindrome',
        component : ReversePalindromeTool,
    },
    {
        path: '**',
        redirectTo: '/text-case',
    }
];
