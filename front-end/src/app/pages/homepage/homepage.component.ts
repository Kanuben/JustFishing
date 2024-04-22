import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { CatchService } from '../../services/catch.service';
import {MatTableModule} from '@angular/material/table';
import { Catch } from '../../models/catch';

export interface PeriodicElement {
  points: number;
  species: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {points: 1, species: 'Bass', weight: 1.0079},
];

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatButtonModule, RouterModule, MatMenuModule, MatTableModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  user: User = {} as User;
  constructor(
    private router: Router,
    private catchService: CatchService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state as {user: User};
    this.user = state.user;
    //console.log(this.user)
  }


  ngOnInit(){
    this.catchService.getCatches(this.user.id).subscribe((response:any) => {
      console.log(response);
      this.dataSource = response;
    }
  );
  }

  displayedColumns: string[] = ['points', 'species', 'weight'];
  dataSource =[];

}
