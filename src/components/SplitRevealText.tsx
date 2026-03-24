'use client';

import { isValidElement, ReactNode, useLayoutEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { theme } from '@/styles/theme';

interface SplitRevealTextProps {
    text?: string;
    children?: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    threshold?: number;
}

interface TextSegment {
    text: string;
    isStrong: boolean;
}

function collectSegments(
    node: ReactNode,
    isStrong = false,
    segments: TextSegment[] = []
): TextSegment[] {
    if (node === null || node === undefined || typeof node === 'boolean') {
        return segments;
    }

    if (typeof node === 'string' || typeof node === 'number') {
        const value = String(node);

        if (value.length > 0) {
            segments.push({ text: value, isStrong });
        }

        return segments;
    }

    if (Array.isArray(node)) {
        node.forEach((child) => collectSegments(child, isStrong, segments));
        return segments;
    }

    if (isValidElement(node)) {
        const elementType = typeof node.type === 'string' ? node.type.toLowerCase() : '';
        const nextIsStrong = isStrong || elementType === 'strong';

        collectSegments((node.props as { children?: ReactNode }).children, nextIsStrong, segments);
    }

    return segments;
}

const SplitRevealRoot = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
    row-gap: 0.08em;

    & .split-reveal__segment {
    display: inline-flex;
        align-items: baseline;
  }

  & .split-reveal__clip {
        display: inline-flex;
    overflow: hidden;
    vertical-align: top;
        /* Keeps reveal masking, but prevents italic glyphs from being clipped. */
        padding: 0.08em 0.08em 0.06em;
        margin: -0.08em -0.08em -0.06em;
    }

    & .split-reveal__clip--strong {
        padding-inline: 0.12em;
        margin-inline: -0.12em;
  }

  & .split-reveal__char {
    display: inline-block;
        will-change: transform, opacity, filter;
    }

    & .split-reveal__char--strong {
        font-family: ${theme.fonts.heading};
        font-weight: ${theme.typography.title.weight};
        letter-spacing: ${theme.typography.title.strongLetterSpacing};
        font-style: italic;
  }

  & .split-reveal__space {
        width: 0.32em;
    display: inline-block;
        flex-shrink: 0;
  }
`;

export default function SplitRevealText({
    text,
    children,
    className,
    delay = 0,
    duration = 0.72,
    stagger = 0.018,
    threshold = 0.22,
}: SplitRevealTextProps) {
    const rootRef = useRef<HTMLSpanElement | null>(null);
    const source = text ?? children ?? '';

    const segments = useMemo(() => collectSegments(source), [source]);
    const label = useMemo(() => segments.map((segment) => segment.text).join(''), [segments]);
    const hasSegments = segments.length > 0;

    useLayoutEffect(() => {
        const root = rootRef.current;

        if (!root || !hasSegments) {
            return undefined;
        }

        const chars = root.querySelectorAll<HTMLElement>('.split-reveal__char');

        if (!chars.length) {
            return undefined;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(chars, { clearProps: 'all' });
            return undefined;
        }

        gsap.set(chars, {
            yPercent: 118,
            opacity: 0,
            filter: 'blur(10px)',
            transformOrigin: '50% 100%',
        });

        const revealChars = () => {
            gsap.to(chars, {
                yPercent: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration,
                stagger,
                delay,
                ease: 'power4.out',
                clearProps: 'transform,opacity,filter',
                overwrite: 'auto',
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        revealChars();
                        observer.disconnect();
                    }
                });
            },
            { threshold }
        );

        observer.observe(root);

        return () => {
            observer.disconnect();
            gsap.killTweensOf(chars);
        };
    }, [delay, duration, hasSegments, label, stagger, threshold]);

    if (!hasSegments) {
        return <SplitRevealRoot className={className}>{source}</SplitRevealRoot>;
    }

    return (
        <SplitRevealRoot ref={rootRef} className={className} aria-label={label}>
            {segments.map((segment, segmentIndex) => (
                <span className="split-reveal__segment" key={`${segment.text}-${segmentIndex}`} aria-hidden="true">
                    {Array.from(segment.text).map((char, charIndex) => {
                        if (/\s/.test(char)) {
                            return (
                                <span className="split-reveal__space" key={`space-${segmentIndex}-${charIndex}`} aria-hidden="true">
                                    {'\u00A0'}
                                </span>
                            );
                        }

                        return (
                            <span
                                className={segment.isStrong ? 'split-reveal__clip split-reveal__clip--strong' : 'split-reveal__clip'}
                                key={`char-${segmentIndex}-${charIndex}`}
                                aria-hidden="true"
                            >
                                <span
                                    className={
                                        segment.isStrong ? 'split-reveal__char split-reveal__char--strong' : 'split-reveal__char'
                                    }
                                >
                                    {char}
                                </span>
                            </span>
                        );
                    })}
                </span>
            ))}
        </SplitRevealRoot>
    );
}
