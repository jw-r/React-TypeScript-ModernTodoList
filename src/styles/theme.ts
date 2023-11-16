declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      main_dark: string;
      bright: string;
      bright_dark: string;

      card_background: string;
    };

    shadow: {
      main: string;
    };
  }
}

export const theme = {
  colors: {
    main: '#ff6f0f',
    main_dark: '#f06000',
    bright: 'white',
    bright_dark: '#f2f3f6',

    card_background: 'aliceblue'
  },

  shadow: {
    main: '0px 0px 4px 3px rgba(255, 111, 15, 0.32)'
  }
};