import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './app.component.html', // Now pointing to the separate HTML file
  styleUrls: ['./app.component.css']   // Optional: Add styles in app.component.css
})
export class AppComponent {}
