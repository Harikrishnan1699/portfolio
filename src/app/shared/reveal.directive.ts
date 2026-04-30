import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds `.in-view` to the host element the first time it scrolls into view.
 * Pair with `.reveal` (and optional modifiers `.reveal-left`, `.reveal-right`,
 * `.reveal-scale`) for fade/translate/scale entrance animations.
 *
 * Usage:  <div class="reveal" appReveal></div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() threshold = 0.15;
  @Input() rootMargin = '0px 0px -8% 0px';
  @Input() once = true;

  private host = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.host.nativeElement.classList.add('in-view');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (this.once) this.observer?.unobserve(entry.target);
          } else if (!this.once) {
            entry.target.classList.remove('in-view');
          }
        }
      },
      { threshold: this.threshold, rootMargin: this.rootMargin }
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
