import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RESUME } from '../../data/resume.data';
import { scrollToId } from '../../shared/smooth-scroll';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly resume = RESUME;
  protected readonly year = new Date().getFullYear();

  protected toTop(event: Event): void {
    event.preventDefault();
    scrollToId('hero', 0);
  }
}
