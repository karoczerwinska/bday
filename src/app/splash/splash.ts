import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './splash.html',
  styleUrl: './splash.scss'
})
export class SplashComponent {
  private router = inject(Router);

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
