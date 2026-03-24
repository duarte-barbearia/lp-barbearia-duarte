'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { Img } from './Img';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: ${theme.colors.black500};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;

  & .intro__logo {
    width: 60px;
    height: auto;
    object-fit: contain;
  }
`;

export default function IntroAnimation({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setDone(true);
      return;
    }

    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setDone(true);
      },
    });

    gsap.set(logo, { opacity: 0, scale: 0.92 });

    tl.to(logo, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.15,
    })
      .to(logo, {
        opacity: 0,
        scale: 1.04,
        duration: 0.5,
        ease: 'power2.in',
        delay: 0.6,
      })
      .to(overlay, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      }, '-=0.15');

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {!done && (
        <Overlay ref={overlayRef}>
          <div ref={logoRef}>
            <Img
              src="/logos/logo-barbearia-duarte-white.svg"
              alt="Barbearia Duarte"
              width={120}
              height={60}
              className="intro__logo"
              priority
            />
          </div>
        </Overlay>
      )}
      {children}
    </>
  );
}
