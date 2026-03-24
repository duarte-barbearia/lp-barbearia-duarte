'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Img } from '@/components/Img';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { ScrollIcon } from '@phosphor-icons/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { theme } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.section`
  @keyframes goldShineFlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  width: 100%;
  background: ${theme.colors.black500};
  color: ${theme.colors.textPrimary};
  padding: 96px 48px;

  & .about__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  & .about__content {
    position: relative;
    width: 100%;
    padding: 36px 0 0;
    gap: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 24px 0 0;
      gap: 24px;
      align-items: center;
    }

    &-badge {
      position: absolute;
      top: -96px;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      background: linear-gradient(92deg, #FFCB0C -0.99%, #FFEFB4 50.48%, #FFCB0C 97.09%);
      background-size: 220% 100%;
      animation: goldShineFlow 4.2s linear infinite;
      will-change: background-position;
      color: ${theme.colors.black};
      border-radius: ${theme.radius.full};
      padding: 12px 22px;
      font-size: 0.95rem;
      line-height: 1;
      letter-spacing: -0.01em;
      font-weight: 700;
      border: 12px solid ${theme.colors.black};

      & svg {
        width: 16px;
        height: 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &-badge {
        animation: none;
        background-position: 50% 50%;
      }
    }

    &-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-items: start;
      margin-bottom: 24px;
      width: 100%;

      @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 22px !important;
      }
    }

    &-texts {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;

      &-title {
        max-width: 640px;
        color: ${theme.colors.textPrimary};
      }
    }

    &-description {
      color: ${theme.colors.textSecondary};
      max-width: 560px;
      align-self: center;
      justify-self: start;
      text-align: left;
      font-size: 1.2rem;
      line-height: 1.02;
      letter-spacing: -0.02em;
    }

    &-image {
      width: 100%;
      height: 520px;
      border-radius: ${theme.radius.xl};
      overflow: hidden;

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: ${theme.radius.xl};
      }
    }

    &-carousel {
      margin-top: 28px;

      & .swiper-wrapper { align-items: stretch; }
      & .swiper-slide { height: auto; }

      &-item {
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 100%;

        &-title {
          color: ${theme.colors.textPrimary};
          font-size: 56px;
          line-height: 0.9;
          letter-spacing: -0.03em;
        }

        &-description {
          color: ${theme.colors.textSecondary};
          font-size: 1.2rem;
          line-height: 1.03;
          letter-spacing: -0.01em;
          font-weight: 300;
          max-width: 320px;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 34px 0 0;

      &-badge {
        padding: 10px 14px;
        top: -48px;
        border-width: 8px;
        font-size: 0.72rem;
      }

      &-header {
        grid-template-columns: 1fr;
        gap: 12px;
        margin-bottom: 18px;
      }

      &-description {
        justify-self: start;
        align-self: start;
        max-width: 100%;
        font-size: 1rem;
      }

      &-carousel {
        margin-top: 22px;

        &-item {
          &-title { font-size: 44px; }
          &-description { font-size: 0.95rem; max-width: 100%; }
        }
      }

      &-image { height: 340px; }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 24px;
  }
`;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.set('.about__content-texts-title', { opacity: 0, y: 24 });
      gsap.set('.about__content-description', { opacity: 0, y: 20 });
      gsap.set('.about__content-image', { opacity: 0, y: 30, scale: 0.97 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          once: true,
        },
      });

      tl.to('.about__content-texts-title', {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      })
        .to('.about__content-description', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.3')
        .to('.about__content-image', {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out',
        }, '-=0.3');

      /* Carousel items stagger */
      gsap.set('.about__content-carousel-item', { opacity: 0, y: 24 });

      ScrollTrigger.batch('.about__content-carousel-item', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          });
        },
        start: 'top 90%',
        once: true,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return <AboutContainer id="sobre" ref={sectionRef}>
    <div className='about__container'>
      <section className='about__content'>
        <Text as='span' className='about__content-badge'>
          <ScrollIcon weight='regular' />
          ASSINE HOJE MESMO, E GARANTA SEU LUGAR!!
        </Text>

        <header className='about__content-header'>
          <article className='about__content-texts'>
            <Text as='h1' className='about__content-texts-title'>
              <strong>Conheça</strong> o lugar onde irá trazer a sua autoestima de volta
            </Text>
          </article>
          <Text as='p' className='about__content-description'>
            Com profissionais dedicados e empenhados, garantimos uma experiência leve, calma e com o resultado que você pedir!
          </Text>
        </header>

        <div className='about__content-image'>
          <Img
            src="/backgrounds/about.png"
            alt="Foto da barbearia duarte"
            width={1472}
            height={740}
          />
        </div>

        <Swiper
          className='about__content-carousel'
          spaceBetween={22}
          slidesPerView={2}
          breakpoints={{ 1024: { slidesPerView: 4 } }}
        >
          <SwiperSlide>
            <article className='about__content-carousel-item'>
              <Text as='h1' className='about__content-carousel-item-title'>98%</Text>
              <Text as='p' className='about__content-carousel-item-description'>
                Uma taxa de satisfação que condiz com nossa entrega de qualidade
              </Text>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className='about__content-carousel-item'>
              <Text as='h1' className='about__content-carousel-item-title'>8+</Text>
              <Text as='p' className='about__content-carousel-item-description'>
                Mais de 8 anos de experiência, certificado de qualidade!
              </Text>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className='about__content-carousel-item'>
              <Text as='h1' className='about__content-carousel-item-title'>+3.000</Text>
              <Text as='p' className='about__content-carousel-item-description'>
                Mais de 3mil clientes atendidos em toda a nossa trajetória
              </Text>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className='about__content-carousel-item'>
              <Text as='h1' className='about__content-carousel-item-title'>75%</Text>
              <Text as='p' className='about__content-carousel-item-description'>
                A cada 4 novos clientes, 3 se tornam clientes recorrentes, pela confiança
              </Text>
            </article>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </AboutContainer>;
}
