import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RESUME } from '../../data/resume.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { scrollToId } from '../../shared/smooth-scroll';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly resume = RESUME;

  protected go(id: string, event: Event): void {
    event.preventDefault();
    scrollToId(id);
  }
}
