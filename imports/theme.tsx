import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'deepSite',
}

const themeChakra = extendTheme({ 
  config,
  semanticTokens: {
    fontSizes: {
      xxs: '0.55rem',
    },
    colors: {
      error: 'red.500',
      text: {
        default: '#060608',
        _dark: 'white',
      },

      // table styles
      borderColorTable: {
        default: 'gray.900',
        _dark: 'white',
      },
      headerBgTable: {
        default: 'gray.200',
        _dark: 'darkBg',
      },
      bgTable: {
        default: 'gray.10',
        _dark: 'white',
      },

      flagBackground: {
        default: 'white',
        _dark: 'darkBg',
      },
      switchOn: {
        default: 'primary',
        _dark: 'blue.200',
      },
      switchOff: {
        default: '#8a8989',
        _dark: 'blue.200',
      },
      switchThumb: {
        default: 'white',
        _dark: 'cyDark',
      },
      switchModeBorder: {
        default: 'blue.500',
        _dark: 'blue.200',
      },
      boxShadowMode: {
        default: '0 0px 5px 2px #0000001a',
        _dark: '0 0px 5px 2px  #00000026',
      },
      podcastBg: {
        default: '#D9D9D9',
        _dark: '#004D74',
      },
      chronicleBgGraphiteWhite: {
        default: 'graphite.900',
        _dark: 'white',
      },
      chronicleBgGoldBlue: {
        default: 'gold.100',
        _dark: 'blue.400',
      },
      chronicleBgLightGraphiteDarkBlue: {
        default: 'graphite.200',
        _dark: 'blue.900',
      },
      chronicleTextTitleGoldBlue: {
        default: 'gold.800',
        _dark: 'blue.200',
      },
      chronicleTextGraphiteWhite: {
        default: 'graphite.900',
        _dark: 'white',
      },
      chronicleTextWhiteGraphite: {
        default: 'white',
        _dark: 'graphite.900',
      },
      chronicleTextSubtitleGoldBlue: {
        default: 'gold.900',
        _dark: 'blue.300',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      'body': {
        color: mode('gray.900', 'whiteAlpha.900')(props),
        bg: mode('gray.100', 'cyDark')(props),
      },
    }),
  },
  fonts: {
    body: "'Zen Kaku Gothic Antique', sans-serif",
    heading: "'Zen Kaku Gothic Antique', sans-serif",
  },
  fontSizes: {
    '3xs': "calc(0.2rem + 0.7vmax)",
    '2xs': "calc(0.5rem + 1vmax)",
    xs: "calc(0.75rem + 1vmax)",
    sm: 'calc(0.95rem + 1vmax)', //"0.875rem",
    md: "calc(1rem + 0.5vmax)",
    lg: "calc(1.5rem + 0.5vmax)",
    xl: "calc(1.35rem + 0.8vmax)",
    "2xl": "calc(1.5rem + 0.5vmax)",
    "3xl": "calc(1.875rem + 0.5vmax)",
    "4xl": "calc(2.3rem + 0.5vmax)",
    "5xl": "calc(3rem + 0.5vmax)",
    "6xl": "calc(3.25rem + 0.5vmax)",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  colors: {
    darkBg: '#222222',
    cyDark: '#141214',
    blue: {
      100: '',
      200: '#36B4FF',
      300: '#464CA0',
      400: '#2F3365',
      900: '#19202B',
    },
    graphite: {
      100: '#F2F2F2',
      200: '#9A9A9A',
      900: '#4F4F4F',
    },
    gold: {
      100: '#FFE1A8',
      200: '#FFB600',
      800: '#EEAD13',
      900: '#ff9800'
    },
    grayText: '#3a3a3a',
    white: '#ebf8ff',
    gray: {
      10: '#eeeeee',
      900: '#111720',
    },
    cyan: {
      400: '#0080ff',
    },
  },
  space: {
    4.5: '1.125rem',
  },
  textStyles: {
    h1: {
      fontSize: 'clamp(2rem, 3vw + 0.5rem, 3rem)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      lineHeight: '1.2',
    },
    h2: {
      fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2.25rem)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 'semibold',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'clamp(1.375rem, 1.5vw + 1rem, 2rem)',
    },
    h4: {
      fontWeight: 'semibold',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'clamp(1.15rem, 1.3vw + 0.5rem, 1.5rem)',
      color: 'text',
    },
    h5: {
      fontWeight: 'semibold',
      lineHeight: '1.2',
      // textTransform: 'uppercase',
      fontSize: 'clamp(1.1rem, 1.2vw + 0.5rem, 1.4rem)',
      color: 'text',
    },
    body1: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      // textTransform: 'uppercase',
      fontSize: 'clamp(0.8rem, 1vw + 0.5rem, 1rem)',
      color: 'text',
    },
    italic: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      fontStyle: 'italic',
      // textTransform: 'uppercase',
      fontSize: 'clamp(0.8rem, 1vw + 0.5rem, 1rem)',
      color: 'text',
    },
    Medium36: {
      fontSize: 'xl',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium32: {
      fontSize: 'lg',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium28: {
      fontSize: 'md',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium22: {
      fontSize: 'sm',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium20: {
      fontSize: 'xs',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium16: {
      fontSize: '2xs',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium14: {
      fontSize: '3xs',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Regular30: {
      fontSize: 'lg',
      lineHeight: '1.2',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular28: {
      fontSize: 'md',
      lineHeight: '1.2',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular20: {
      fontSize: 'xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular16: {
      fontSize: '2xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular14: {
      fontSize: '3xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    },
    body: {
      fontSize: 'xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    }
  },
  components: {
    
    Tabs: {
      variants: {
        'enclosed': {
          borderBottomColor: 'none', 
          borderColor: 'none',
        },
        
        sm: {
          fontSize: '0.4rem',
          px: 1, // <-- px is short for paddingLeft and paddingRight
          py: 1, // <-- py is short for paddingTop and paddingBottom
        },
      },
    },
    
    Button: {
      variants: {
        unstyled: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 0',
        },
      },

    },
  }
})

export default themeChakra