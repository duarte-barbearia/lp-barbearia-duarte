export const theme = {
  colors: {
    // === Cores principais ===
    white: '#DCD9C9',
    black: '#050505',
    yellow: '#FFCB0C',
    yellowLight: '#FFEFB4',

    // === Variações de branco gelo ===
    white50: '#F5F4EF',   // quase branco puro
    white100: '#ECEADF',  // mais claro que o base
    white200: '#DCD9C9',  // base — branco gelo
    white300: '#CBC7B5',  // levemente escurecido
    white400: '#BAB5A1',  // tom médio
    white500: '#A9A38D',  // escurecido para contraste

    // === Variações de preto ===
    black50: '#2A2A2A',   // cinza escuro
    black100: '#1A1A1A',  // quase preto
    black200: '#111111',  // mais escuro
    black300: '#0A0A0A',  // quase puro
    black400: '#050505',  // base — preto
    black500: '#000000',  // puro

    // === Variações de yellow ===
    yellow50: '#FFF8E0',  // bem claro
    yellow100: '#FFEFB4', // light (mesmo que yellowLight)
    yellow200: '#FFE580',
    yellow300: '#FFDB4D',
    yellow400: '#FFCB0C', // base — yellow
    yellow500: '#E6B600', // escurecido
    yellow600: '#CC9F00', // mais escuro
    yellow700: '#997700', // tom dourado escuro

    // === Utilitárias ===
    overlay: 'rgba(5, 5, 5, 1)',
    overlayLight: 'rgba(5, 5, 5, 0.4)',
    overlayYellow: 'rgba(255, 203, 12, 0.15)',
    shadow: 'rgba(5, 5, 5, 0.25)',
    shadowStrong: 'rgba(5, 5, 5, 0.5)',

    // === Backgrounds de seção ===
    bgPrimary: '#050505',
    bgSecondary: '#0A0A0A',
    bgLight: '#DCD9C9',
    bgAccent: '#111111',

    // === Textos ===
    textPrimary: '#DCD9C9',
    textSecondary: '#A9A38D',
    textDark: '#050505',
    textAccent: '#FFCB0C',

    // === Borders ===
    border: 'rgba(220, 217, 201, 0.12)',
    borderLight: 'rgba(220, 217, 201, 0.06)',
    borderYellow: 'rgba(255, 203, 12, 0.3)',
  },

  fonts: {
    heading: "var(--font-lora), Georgia, 'Times New Roman', serif",
    body: "var(--font-instrument-sans), 'Helvetica Neue', Arial, sans-serif",
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '2.5rem',  // 40px
    '4xl': '3rem',    // 48px
    '5xl': '3.5rem',  // 56px
    '6xl': '4.5rem',  // 72px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  typography: {
    title: {
      lineHeight: 1.2,
      letterSpacing: '-0.04em',
      strongLetterSpacing: '-0.06em',
      weight: 500,
      h1: {
        desktop: '3rem',
        mobile: '1.75rem',
      },
      h2: {
        desktop: '2.125rem',
        mobile: '1.5rem',
      },
      h3: {
        desktop: '1.75rem',
        mobile: '1.25rem',
      },
      h4: {
        desktop: '1.5rem',
        mobile: '1.125rem',
      },
    },
    paragraph: {
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      weight: 500,
      strongWeight: 500,
      size: '1.2rem',
      mobileSize: '1rem',
    },
  },

  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },

  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },

  transitions: {
    fast: '150ms ease',
    base: '300ms ease',
    slow: '500ms ease',
    spring: '500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },

  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 50,
    overlay: 100,
    modal: 200,
    toast: 300,
  },
} as const;

export type Theme = typeof theme;
