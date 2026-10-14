import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {SurpriseTile} from '../surprise-tile.interface';
import {UnlockService} from '../unlock';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  protected unlockService = inject(UnlockService);
  private router = inject(Router);

  protected readonly tiles: SurpriseTile[] = [
    {
      id: 1,
      title: 'Śniadanie w Havanie',
      subtitle: 'Z Kuby do Polski – roślinna fuzja smaków na start dnia',
      icon: '🌴',
      route: 'havana',
      unlockTime: '2026-10-15T09:00:00',
      tagline: 'Żoliborz',
      bgImage: 'assets/images/havana.jpg'
    },
    {
      id: 2,
      title: 'Misja: Podróż 🖖',
      subtitle: 'Tajny rozkaz Gwiezdnej Floty: Wyzwanie logiczne w Sektorze Wola',
      icon: '🖖',
      route: 'galaxy',
      unlockTime: '2026-10-15T10:15:00',
      tagline: 'Gdzieś w galaktyce',
      bgImage: 'assets/images/galaxy.jpg'
    },
    {
      id: 3,
      title: 'Kapitański LOT',
      subtitle: 'Ladies and Gentlemen, this is your Captain speaking...',
      icon: '✈️',
      route: 'flight',
      unlockTime: '2026-10-15T12:15:00',
      tagline: 'Pas startowy',
      bgImage: 'assets/images/flight.jpg'
    },
    {
      id: 4,
      title: 'Uczta Kustosza',
      subtitle: 'Najlepszy stek w Warszawie (i na świecie też!) dla prawdziwego kustosza wołowiny',
      icon: '🥩',
      route: 'fiesta',
      unlockTime: '2026-10-15T17:00:00',
      tagline: 'Mokotów',
      bgImage: 'assets/images/fiesta.jpg'
    },
    {
      id: 5,
      title: 'Prezencik',
      subtitle: 'Niespodzianka dla (prawie) inżyniera',
      icon: '🛠️',
      route: 'gift',
      unlockTime: '2026-10-15T19:00:00',
      tagline: 'Salon',
      bgImage: 'assets/images/gift.jpg'
    }
  ];

  openTile(tile: SurpriseTile): void {
    if (this.unlockService.isUnlocked(tile.unlockTime)) {
      this.router.navigate([tile.route]);
    }
  }
}
