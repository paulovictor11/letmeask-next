import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'light',
};

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: 'gray.50'
            }
        },
    },
    fonts: {
        default: "Poppins, system-ui, sans-serif",
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
    },
    radii: {
        sm: '5px',
        md: '8px',
    },
    fontSizes: {
        '2xl': '54px',
    },
    colors: {
        purple: {
            50: '#e559f9',
            500: '#835AFD',
            700: '#6F4BD8'
        },
        red: {
            500: '#E73F5D',
            700: '#D73754',
        },
        gray: {
            50: '#F8F8F8',
            300: '#e1e1e6',
            600: '#29292e',
            700: '#202024',
            800: '#121214',
        },
        pink: {
            500: '#D67EE2',
            700: '#E559F9'
        }
    }
});

export default theme;