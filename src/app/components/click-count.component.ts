import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClickCounterService } from '../services/click-counter/click-counter.service';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrl: './click-count.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickCountComponent {
  protected readonly clickService = inject(ClickCounterService);
}
