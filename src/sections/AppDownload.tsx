'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Img } from '@/components/Img';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/details?id=barbeariaduarte.bestbarbers.app&pcampaignid=web_share';
const APP_STORE_LINK = 'https://apps.apple.com/br/app/barbearia-duarte/id6747204974';

const AppDownloadContainer = styled.section`
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  padding: 96px 48px;

  & .app__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 64px;
  }

  & .app__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: max-content;
      padding: 6px 14px;
      border-radius: ${theme.radius.full};
      background: ${theme.colors.bgAccent};
      border: 1px solid ${theme.colors.border};
      color: ${theme.colors.textSecondary};
      font-family: ${theme.fonts.body};
      font-size: 0.82rem;
      font-weight: ${theme.fontWeights.semibold};
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    &-title {
      max-width: 520px;
    }

    &-description {
      color: ${theme.colors.textSecondary};
      max-width: 480px;
      font-size: 1.1rem;
      line-height: 1.12;
      letter-spacing: -0.01em;
    }

    &-stores {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 8px;
    }

    &-store-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      border-radius: ${theme.radius.lg};
      background: ${theme.colors.bgAccent};
      border: 1px solid ${theme.colors.border};
      color: ${theme.colors.textPrimary};
      font-family: ${theme.fonts.body};
      text-decoration: none;
      transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1), border-color ${theme.transitions.base};

      &:hover {
        transform: translateY(-2px);
        border-color: ${theme.colors.borderYellow};
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.yellow};
        outline-offset: 3px;
      }

      & img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }

      &.is-apple img {
        filter: invert(1);
      }
    }

    &-store-link-texts {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    &-store-link-label {
      font-size: 0.68rem;
      line-height: 1;
      color: ${theme.colors.textSecondary};
      font-weight: ${theme.fontWeights.regular};
    }

    &-store-link-name {
      font-size: 0.95rem;
      line-height: 1;
      font-weight: ${theme.fontWeights.semibold};
      letter-spacing: -0.01em;
    }
  }

  & .app__mockup {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    height: 520px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 160px;
      background: linear-gradient(to top, ${theme.colors.bgPrimary}, transparent);
      z-index: 1;
      pointer-events: none;
    }

    &-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: radial-gradient(circle, ${theme.colors.overlayYellow} 0%, transparent 70%);
      filter: blur(40px);
      z-index: 0;
      pointer-events: none;
    }

    & img {
      position: relative;
      z-index: 1;
      width: 280px;
      height: auto;
      object-fit: contain;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    & .app__container {
      gap: 48px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 24px;

    & .app__container {
      flex-direction: column-reverse;
      gap: 36px;
      text-align: center;
    }

    & .app__content {
      align-items: center;

      &-badge {
        margin: 0 auto;
      }

      &-title {
        max-width: 100%;
      }

      &-description {
        max-width: 100%;
      }

      &-stores {
        justify-content: center;
      }

      &-store-link {
        padding: 10px 16px;

        & img {
          width: 20px;
          height: 20px;
        }
      }

      &-store-link-name {
        font-size: 0.85rem;
      }

      &-store-link-label {
        font-size: 0.62rem;
      }
    }

    & .app__mockup {
      height: 380px;

      & img {
        width: 220px;
      }

      &-glow {
        width: 240px;
        height: 240px;
      }
    }
  }
`;

export default function AppDownload() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            gsap.set('.app__content-badge', { opacity: 0, y: 12 });
            gsap.set('.app__content-title', { opacity: 0, y: 20 });
            gsap.set('.app__content-description', { opacity: 0, y: 16 });
            gsap.set('.app__content-stores', { opacity: 0, y: 14 });
            gsap.set('.app__mockup', { opacity: 0, x: 40 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%',
                    once: true,
                },
            });

            tl
                .to('.app__content-badge', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
                .to('.app__content-title', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
                .to('.app__content-description', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.25')
                .to('.app__content-stores', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
                .to('.app__mockup', { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <AppDownloadContainer id="app" ref={sectionRef}>
            <div className="app__container">
                <div className="app__content">
                    <span className="app__content-badge">Novo</span>
                    <Text as="h1" className="app__content-title">
                        Agende direto pelo <strong>aplicativo</strong>
                    </Text>
                    <Text as="p" className="app__content-description">
                        Baixe o app da Barbearia Duarte, escolha o horário que preferir e agende seu corte ou barba em poucos toques. Prático, rápido e sem complicação.
                    </Text>
                    <div className="app__content-stores">
                        <a
                            className="app__content-store-link"
                            href={GOOGLE_PLAY_LINK}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Baixar na Google Play"
                        >
                            <Img
                                src="/icons8-google-play-store-novo-48.png"
                                alt="Google Play"
                                width={24}
                                height={24}
                            />
                            <span className="app__content-store-link-texts">
                                <span className="app__content-store-link-label">Disponível no</span>
                                <span className="app__content-store-link-name">Google Play</span>
                            </span>
                        </a>
                        <a
                            className="app__content-store-link is-apple"
                            href={APP_STORE_LINK}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Baixar na App Store"
                        >
                            <Img
                                src="/icons8-mac-os-50.png"
                                alt="App Store"
                                width={24}
                                height={24}
                            />
                            <span className="app__content-store-link-texts">
                                <span className="app__content-store-link-label">Disponível na</span>
                                <span className="app__content-store-link-name">App Store</span>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="app__mockup">
                    <span className="app__mockup-glow" aria-hidden="true" />
                    <Img
                        src="/mockup.png"
                        alt="Mockup do aplicativo Barbearia Duarte"
                        width={380}
                        height={760}
                    />
                </div>
            </div>
        </AppDownloadContainer>
    );
}
