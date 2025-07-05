import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { TextCaseTool } from './components/pages/text-case-tool/text-case-tool'; 
import { Base64Tool } from './components/pages/base64-tool/base64-tool';
import { WordCount } from './components/pages/word-count/word-count';
import { HashGenerator } from './components/pages/hash-generator/hash-generator';
import { TextJsonConverter } from './components/pages/text-json-converter/text-json-converter';
import { ReversePalindromeTool } from './components/pages/reverse-palindrome-tool/reverse-palindrome-tool';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
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
        redirectTo: '/',
    }
];
