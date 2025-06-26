import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { TextCaseTool } from './components/text-case-tool/text-case-tool'; 
import { Base64Tool } from './components/base64-tool/base64-tool';

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
        path: '**',
        redirectTo: '/text-case',
    }
];
