import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnlockService {
  devMode = signal<boolean>(false);
  now = signal<Date>(new Date());

  private intervalId: any;

  constructor() {
    this.startTimer();
  }

  private startTimer(): void {
    this.intervalId = setInterval(() => {
      this.now.set(new Date());
    }, 1000);
  }

  toggleDevMode(): void {
    this.devMode.update(val => !val);
  }

  isUnlocked(unlockTimeIso: string): boolean {
    if (this.devMode()) {
      return true;
    }
    const target = new Date(unlockTimeIso).getTime();
    const current = this.now().getTime();
    return current >= target;
  }

  getTimeRemaining(unlockTimeIso: string): { hours: string; minutes: string; seconds: string; totalSeconds: number } {
    const target = new Date(unlockTimeIso).getTime();
    const current = this.now().getTime();
    const diff = target - current;

    if (diff <= 0) {
      return { hours: '00', minutes: '00', seconds: '00', totalSeconds: 0 };
    }

    const totalSecs = Math.floor(diff / 1000);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    return {
      hours: hrs.toString().padStart(2, '0'),
      minutes: mins.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0'),
      totalSeconds: totalSecs
    };
  }
}
