import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../shared/models/shared.models';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class BookingListComponent {
  private dataService = inject(DataService); // Inject DataService

  bookings = signal<Booking[]>([]); // Use Booking interface

  constructor() {
    // Fetch data when the component is created
    this.dataService.getBookings().subscribe((data) => {
      this.bookings.set(data);
    });
  }
}
