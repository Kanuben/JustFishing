import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatButtonModule, RouterModule, MatMenuModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
