
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-waste-bin-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './waste-bin-list.component.html',
  styleUrl: './waste-bin-list.component.css'
})
export class WasteBinListComponent {

  data:any;
  check = false

  constructor(private apiService : ApiService) {
    this.get()
  }

  get() {
    // this.apiService.getData();
    console.log('Fetching from backend')

    this.apiService.getData().subscribe({
      next: (result) => {
        this.data=result;
        this.check = true;
      },
      error: (error) => {
        console.error('Error while fetching from backend',error)
      }
    })

  }
}
