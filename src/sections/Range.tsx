'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Img } from '@/components/Img';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { StarIcon } from '@phosphor-icons/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { theme } from '@/styles/theme';
import { partners } from '@/data/partners';
import { PartnerCard } from '@/components/PartnerCard';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HAS_ACTIVE_PARTNERS } from '@/data/business';

gsap.registerPlugin(ScrollTrigger);

const RangeContainer = styled.section`
  width: 100%;
  position: relative;
  color: ${theme.colors.white};

  & .range__background {
    background: ${theme.colors.overlay};
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & .range__content {
    max-width: 1600px;
    padding: 48px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 auto;
    gap: 48px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 48px;
      padding: 48px 24px;
    }

    &-infos {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
      }

      &-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;

        @media (max-width: 768px) {
          gap: 12px;
        }

        &-profiles {
          display: flex;
          align-items: flex-start;
          justify-content: center;

          &-item {
            margin-left: -16px;
            border-radius: 99px;
            border: 2px solid ${theme.colors.white};

            @media (max-width: 768px) {
              border: 1px solid ${theme.colors.white};
            }

            &:first-of-type {
              margin-left: 0;
            }

            &-image {
              border-radius: 99px;

              @media (max-width: 768px) {
                width: 32px;
                height: 32px;
              }
            }
          }
        }

        &-rating {
          display: flex;
          flex-direction: column;
          gap: 4px;

          &-title {
            font-size: 20px;

            @media (max-width: 768px) {
              font-size: 16px;
            }
          }

          &-content {
            display: flex;
            align-items: center;
            gap: 8px;

            &-stars {
              display: flex;
              align-items: center;
              gap: 0px;

              &-item {}

              & svg {
                color: ${theme.colors.yellow};
              }
            }

            &-score {
              font-size: 16px;
              color: ${theme.colors.textSecondary};

              @media (max-width: 768px) {
                font-size: 14px;
              }
            }
          }
        }
      }

      &-title {
        max-width: 640px;
        text-align: left;

        @media (max-width: 768px) {
          max-width: 100%;
          text-align: center;
        }
      }
    }

    &-carousel {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        height: 100%;
        background: linear-gradient(to right, ${theme.colors.overlay}, transparent);
        z-index: 2;

        @media (max-width: 768px) {
          width: 80px;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
        width: 140px;
        height: 100%;
        background: linear-gradient(to left, ${theme.colors.overlay}, transparent);
        z-index: 2;

        @media (max-width: 768px) {
          width: 80px;
        }
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      & .swiper-slide {
        display: flex;
        justify-content: center;
        width: auto;
      }

      & .swiper-wrapper {
        transition-timing-function: linear !important;
      }
    }
  }
`;

export default function Range() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.set('.range__content-infos-container', { opacity: 0, x: -20 });
      gsap.set('.range__content-infos-title', { opacity: 0, y: 20 });
      gsap.set('.range__content-carousel', { opacity: 0, x: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      });

      tl.to('.range__content-infos-container', {
        opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
      })
        .to('.range__content-infos-title', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.3')
        .to('.range__content-carousel', {
          opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
        }, '-=0.4');
    }, el);

    return () => ctx.revert();
  }, []);

  const profiles = [
    { src: "/profiles/profile-1.png", alt: "Profile 1" },
    { src: "/profiles/profile-2.png", alt: "Profile 2" },
    { src: "/profiles/profile-3.png", alt: "Profile 3" },
    { src: "/profiles/profile-4.png", alt: "Profile 4" },
    { src: "/profiles/profile-5.png", alt: "Profile 5" },
  ];

  const upcomingPartnerCards = [
    { id: 'soon-1', logo: '/logos/coming-soon.svg', offer: 'EM BREVE' },
    { id: 'soon-2', logo: '/logos/coming-soon.svg', offer: 'EM BREVE' },
    { id: 'soon-3', logo: '/logos/coming-soon.svg', offer: 'EM BREVE' },
  ];

  const baseCards = HAS_ACTIVE_PARTNERS ? partners : upcomingPartnerCards;
  const carouselPartners = [...baseCards, ...baseCards, ...baseCards];

  const keepAutoplayRunning = (swiper: SwiperType) => {
    if (swiper.destroyed || !swiper.autoplay) return;
    if (!swiper.autoplay.running) swiper.autoplay.start();
  };

  return <RangeContainer id="beneficios" ref={sectionRef}>
    <div className="range__background"></div>
    <section className='range__content'>
      <article className='range__content-infos'>
        <div className='range__content-infos-container'>
          <ul className='range__content-infos-container-profiles'>
            {profiles.map((profile, index) => (
              <li className='range__content-infos-container-profiles-item' key={index}>
                <Img
                  src={profile.src}
                  alt={profile.alt}
                  width={48}
                  height={48}
                  className='range__content-infos-container-profiles-item-image'
                />
              </li>
            ))}
          </ul>
          <div className='range__content-infos-container-rating'>
            <Text as='h3' className='range__content-infos-container-rating-title'>+3600 Clientes atendidos</Text>
            <div className='range__content-infos-container-rating-content'>
              <ul className='range__content-infos-container-rating-content-stars'>
                {[...Array(5)].map((_, i) => (
                  <li className='range__content-infos-container-rating-content-stars-item' key={i}>
                    <StarIcon weight='fill' />
                  </li>
                ))}
              </ul>
              <Text className='range__content-infos-container-rating-content-score'>5.0/5 Avaliação </Text>
            </div>
          </div>
        </div>
        <Text as='h2' className='range__content-infos-title'>
          Você corta o seu cabelo e ainda recebe diversos benefícios!
        </Text>
      </article>
      <main className='range__content-carousel'>
        <Swiper
          spaceBetween={16}
          slidesPerView={'auto'}
          speed={5200}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          loop
          loopAdditionalSlides={carouselPartners.length}
          modules={[Autoplay]}
          allowTouchMove={false}
          simulateTouch={false}
          onInit={keepAutoplayRunning}
          onClick={keepAutoplayRunning}
          onTouchEnd={keepAutoplayRunning}
        >
          {carouselPartners.map((partner, index) => (
            <SwiperSlide key={`${partner.id}-${index}`}>
              <PartnerCard offer={partner.offer} logo={partner.logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  </RangeContainer>;
}
