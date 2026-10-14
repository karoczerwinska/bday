import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-havana',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './havana.html',
  styleUrl: './havana.scss'
})
export class HavanaComponent {
  private router = inject(Router);

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
