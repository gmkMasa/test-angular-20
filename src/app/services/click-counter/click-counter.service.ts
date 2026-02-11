import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClickCounterService {
  private readonly _count = signal(parseInt(localStorage.getItem('count') ?? '0'));

  public readonly count = this._count.asReadonly();

  increment(): void {
    this._count.update((current) => current + 1);
  }

  reset(): void {
    this._count.set(0);
  }

  constructor() {
    effect(() => {
      const currentCount = this._count();
      const currentSavedCount = parseInt(localStorage.getItem('count') ?? '0');

      if (currentCount !== currentSavedCount) {
        console.log('saving to localStorage');
        localStorage.setItem('count', currentCount.toString());
      }
    });
  }
}
