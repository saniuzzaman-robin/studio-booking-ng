import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for debounce
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { Studio, Booking } from '../../shared/models/shared.models';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-studio-list',
  standalone: true,
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, CurrencyPipe], // Add FormsModule and CurrencyPipe
})
export class StudioListComponent {
  private dataService = inject(DataService); // Inject DataService

  studios = signal<Studio[]>([]); // Use Studio interface

  searchTerm = signal('');
  private searchTerms = new Subject<string>();

  filteredStudios = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.studios();
    }
    return this.studios().filter(
      studio =>
        studio.name.toLowerCase().includes(term) ||
        studio.type.toLowerCase().includes(term) ||
        (studio.location &&
          studio.location.area.toLowerCase().includes(term)) || // Check for location before accessing area
        (studio.amenities &&
          studio.amenities.some(amenity =>
            amenity.toLowerCase().includes(term)
          ))
    );
  });

  searchSuggestions = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return [];
    }
    const suggestions: string[] = [];
    this.studios().forEach(studio => {
      if (
        studio.name.toLowerCase().includes(term) &&
        !suggestions.includes(studio.name)
      ) {
        suggestions.push(studio.name);
      }
      if (
        studio.type.toLowerCase().includes(term) &&
        !suggestions.includes(studio.type)
      ) {
        suggestions.push(studio.type);
      }
      if (
        studio.location &&
        studio.location.area.toLowerCase().includes(term) &&
        !suggestions.includes(studio.location.area)
      ) {
        suggestions.push(studio.location.area);
      }
      // You can add other fields here if you want to suggest based on them
    });
    return suggestions;
  });

  constructor() {
    this.searchTerms
      .pipe(
        debounceTime(300) // 300ms debounce
      )
      .subscribe(term => {
        this.searchTerm.set(term);
      });

    // Fetch data when the component is created
    this.dataService.getStudios().subscribe(data => {
      this.studios.set(data);
    });
  }

  onSearchInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerms.next(inputElement.value);
  }

  bookStudio(studio: Studio): void {
    // For now, we'll just log the studio and call the createBooking method
    console.log('Booking studio:', studio);

    // TODO: Implement actual booking logic (e.g., show a modal for date/time selection)
    // and create a proper Booking object before calling the service.
    const dummyBooking: Booking = {
      id: 0, // ID will be assigned by the backend
      studioId: studio.id,
      date: new Date().toISOString().toString(), // Dummy date (today)
      startTime: '10:00', // Dummy start time
      endTime: '11:00', // Dummy end time
      // Add other relevant properties if needed
    };

    this.dataService.createBooking(dummyBooking).subscribe(
      response => {
        console.log('Booking successful:', response);
        // TODO: Provide user feedback (e.g., a success message)
        // TODO: Refresh the booking list or navigate to the booking details page
      },
      error => {
        console.error('Booking failed:', error);
        // TODO: Provide user feedback (e.g., an error message)
      }
    );
  }

  openBookingModal(): void {
    // TODO: Implement modal opening logic
    console.log('Book Now button clicked!');
  }
}
