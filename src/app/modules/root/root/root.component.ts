import { Component } from '@angular/core';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  isNetworkCallOngoing: boolean = false;
  constructor(private _progressbarService: ProgressBarService) {
    this._progressbarService.executingNetworkCall.subscribe(res => {
      this.isNetworkCallOngoing = res;
    });
  }
}
