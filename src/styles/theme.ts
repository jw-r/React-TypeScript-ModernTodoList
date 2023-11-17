declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      main_dark: string;
      bright: string;
      bright_dark: string;
      red: string;
      red_dark: string;
      green: string;
      green_dark: string;

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

    red: 'red',
    red_dark: '#a5090b',

    green: '#7CB03E',
    green_dark: '#587D2A',

    card_background: 'aliceblue'
  },

  shadow: {
    main: '0px 0px 4px 3px rgba(255, 111, 15, 0.32)'
  }
};
