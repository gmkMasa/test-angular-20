import { Component, computed, inject } from '@angular/core';
import { ClickCountComponent } from './components/click-count.component';
import { ClickCounterService } from './services/click-counter/click-counter.service';

@Component({
  selector: 'app-root',
  imports: [ClickCountComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly canReset = computed(() => this.clickService.count() >= 10);

  protected readonly clickService = inject(ClickCounterService);
}
