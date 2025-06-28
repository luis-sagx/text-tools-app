import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'text-tools-app';
}
