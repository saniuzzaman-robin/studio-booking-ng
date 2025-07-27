import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking, Studio } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);
  private baseUrl = 'http://0.0.0.0:3000/api'
  

  getStudios(): Observable<Studio[]> {
    return this.http.get<Studio[]>(`${this.baseUrl}/studios`);
  }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/bookings`);
  }

  getStudioDetails(id: number): Observable<Studio> {
    return this.http.get<Studio>(`${this.baseUrl}/studios/${id}`);
  }

  searchStudiosByArea(area: string): Observable<Studio[]> {
    return this.http.get<Studio[]>(
      `${this.baseUrl}/studios/search?area=${area}`
    );
  }

  searchStudiosNearby(
    lat: number,
    lng: number,
    radius: number
  ): Observable<Studio[]> {
    return this.http.get<Studio[]>(
      `${this.baseUrl}/studios/nearby?lat=${lat}&lng=${lng}&radius=${radius}`
    );
  }

  createBooking(bookingData: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.baseUrl}/bookings`, bookingData);
  }

  getStudioAvailability(id: number, date: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/studios/${id}/availability?date=${date}`
    );
  }
}
