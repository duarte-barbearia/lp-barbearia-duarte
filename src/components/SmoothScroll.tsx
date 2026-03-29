'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = [
  'inicio',
  'beneficios',
  'processo',
  'sobre',
  'planos',
  'app',
  'curso',
  'contato',
  'footer',
];

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    /* ── Intercept anchor clicks → Lenis scroll ── */
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute('href')!.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: 0, duration: 1.8 });
      history.pushState(null, '', `#${id}`);
    }
    document.addEventListener('click', handleAnchorClick);

    /* ── Initial load with hash → scroll to section ── */
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(initialHash);
        if (target) {
          lenis.scrollTo(target, { offset: 0, immediate: true });
        }
      });
    }

    /* ── Update URL hash on scroll via ScrollTrigger ── */
    const triggers: ScrollTrigger[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => history.replaceState(null, '', `#${id}`),
          onEnterBack: () => history.replaceState(null, '', `#${id}`),
        }),
      );
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      triggers.forEach((t) => t.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
