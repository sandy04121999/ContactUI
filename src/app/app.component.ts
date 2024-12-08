import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contactmanagement';
}
