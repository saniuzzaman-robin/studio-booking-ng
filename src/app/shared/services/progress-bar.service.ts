import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  executingNetworkCall: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
