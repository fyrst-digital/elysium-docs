export interface Breakpoints {
    sm: string | null;
    md: string | null;
    lg: string | null;
    xl: string | null;
    '2xl': string | null;
    '3xl': string | null;
    '4xl': string | null;
    '5xl': string | null;
    '6xl': string | null;
}

export interface BreakpointsStruct extends Breakpoints {
    xs: string | null;
}

export const breakpoints: Breakpoints = {
    sm: '420px',
    md: '560px',
    lg: '640px',
    xl: '768px',
    '2xl': '960px',
    '3xl': '1024px',
    '4xl': '1140px',
    '5xl': '1280px',
    '6xl': '1440px',
}

export const breakpointsStruct: BreakpointsStruct = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
    '5xl': null,
    '6xl': null,
}

export const thumbnailSizes = [
    200, 300, 400, 500, 
    600, 800, 1200, 1600
]