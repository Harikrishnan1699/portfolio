import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Translates the host element on Y as the page scrolls.
 * `speed` is a multiplier of scrollY — typical range 0.05 – 0.4.
 * Negative values move the element opposite to scroll direction.
 *
 * Usage:  <div appParallax [speed]="0.15"></div>
 */
@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  @Input() speed = 0.15;

  private host = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private ticking = false;

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      const offset = window.scrollY * this.speed;
      this.host.nativeElement.style.transform = `translate3d(0, ${offset}px, 0)`;
      this.ticking = false;
    });
  }
}
