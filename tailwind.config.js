import defaultTheme from 'tailwindcss/defaultTheme';

const customConfig =  {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xl: ['32px', '37px'],
      lg: ['18px', '22px'],
      'lg-medium': [
        '18px',
        {
          lineHeight: '22px',
          fontWeight: 500,
        },
      ],
      base: ['14px', '17px'],
      medium: [
        '14px',
        {
          lineHeight: '17px',
          fontWeight: 500,
        },
      ],
      uppercase: [
        '13px',
        {
          lineHeight: '16px',
          letterSpacing: '1.35px',
          fontWeight: 400,
        },
      ],
      sm: ['12px', '14px'],
      'sm-medium': [
        '12px',
        {
          lineHeight: '14px',
          fontWeight: 500,
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      blue: {
        100: '#23EAE0',
        200: '#83ACCE',
      },
      red: {
        50: '#FEF6F6',
        100: '#FEEAEA',
        200: '#FCD1D1',
        300: '#FBADAD',
        400: '#DB4115',
        500: '#952C0E',
        600: '#3C0A26',
      },
      yellow: {
        50: '#FEFBF4',
        100: '#FEF5E5',
        200: '#FCEAC6',
        300: '#FAD999',
        400: '#F0B600',
        500: '#C89A08',
      },
      dark: {
        100: '#94a3b8',
        200: '#334155',
        300: '#1e293b',
        400: '#0f172a',
        500: '#020617',
      },
      violet: {
        200: '#ddd6fe',
        300: '#c4b5fd',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Metric', ...defaultTheme.fontFamily.sans],
        serif: ['Financier Text', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-50px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(50px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        rotateLeftToClose: {
         from: {
            transform: 'rotate(0deg)',
          },
        
          to: {
            transform: 'rotate(45deg)',
          }
        },
        rotateLeftTo0: {
          from: {
             transform: 'rotate(-45deg)',
           },
         
           to: {
             transform: 'rotate(0deg)',
           }
         },
        rotateRightToClose: {
          from: {
             transform: 'rotate(0)',
           },
         
           to: {
             transform: 'rotate(-45deg)',
           }
         },
         rotateRightTo0: {
          from: {
             transform: 'rotate(45deg)',
           },
         
           to: {
             transform: 'rotate(0deg)',
           }
         },
         increase: {
          from: {
             height: 0,
           },
         
           to: {
             height: '500px'
           }
         },
         decrease: {
          from: {
             height: '500px',
           },
         
           to: {
             height: 0,
           }
         },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        rotateLeftToClose: 'rotateLeftToClose 0.5s linear',
        rotateRightToClose: 'rotateRightToClose 0.5s linear',
        rotateLeftTo0: 'rotateLeftTo0 0.5s linear',
        rotateRightTo0: 'rotateRightTo0 0.5s linear',
        increase: 'increase 0.5s linear',
        decrease: 'decrease 0.5s linear',
      },
      boxShadow: {
        small: '0px 0px 30px rgba(45, 68, 94, 0.04)',
        medium: '0px 0px 30px rgba(45, 68, 94, 0.08)',
      },
    },
  },
  plugins: [],
};

export default customConfig;

