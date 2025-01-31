import { Component } from '@angular/core';  // Correct import

@Component({
  selector: 'app-header',
  standalone: true,  // corrected from isStandalone to standalone
  templateUrl: './header.component.html',  // corrected template to templateUrl
  styleUrls: ['./header.component.css']   // corrected styleUrl to styleUrls
})
export class HeaderComponent {
  // Component logic goes here (if any)
}