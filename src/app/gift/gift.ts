import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gift.html',
  styleUrl: './gift.scss'
})
export class GiftComponent {
  private router = inject(Router);

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
