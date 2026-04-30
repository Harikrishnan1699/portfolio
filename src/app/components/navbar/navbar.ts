import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { scrollToId } from '../../shared/smooth-scroll';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly resume = RESUME;
  protected readonly scrolled = signal(false);
  protected readonly mobileOpen = signal(false);
  protected readonly activeId = signal<string>('hero');

  protected readonly links: NavLink[] = [
    { id: 'hero',       label: 'Home'       },
    { id: 'about',      label: 'About'      },
    { id: 'skills',     label: 'Skills'     },
    { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects'   },
    { id: 'education',  label: 'Education'  },
    { id: 'contact',    label: 'Contact'    },
  ];

  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 24);
    this.updateActiveSection();
  }

  protected go(id: string, event?: Event): void {
    event?.preventDefault();
    this.mobileOpen.set(false);
    scrollToId(id);
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  private updateActiveSection(): void {
    const offset = 120;
    let current = this.activeId();
    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top - offset <= 0) current = link.id;
    }
    if (current !== this.activeId()) this.activeId.set(current);
  }
}
