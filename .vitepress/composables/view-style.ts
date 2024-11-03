import { ref, computed, type ComputedRef, CSSProperties, onMounted } from 'vue'

interface Breakpoints {
    xs: number
    md: number
    xl: number
}

export interface ResponsiveStyles {
    xs: Partial<CSSProperties>
    md?: Partial<CSSProperties>
    xl?: Partial<CSSProperties>
}

export function useViewStyle(customBreakpoints: Partial<Breakpoints> = {}) {

    const allowedBreakpointIndex = ref(0)

    const defaultBreakpoints: Breakpoints = {
        xs: 0,
        md: 768,
        xl: 1280,
    }

    const breakpoints = { ...defaultBreakpoints, ...customBreakpoints }

    onMounted(() => {

        Object.entries(breakpoints).forEach(([breakpoint, minWidth], index) => {
            let mediaQuery = `(min-width: ${minWidth}px)`
            const mediaMatch = window.matchMedia(mediaQuery)

            if (mediaMatch.matches) {
                allowedBreakpointIndex.value = index
            }

            mediaMatch.addEventListener('change', (e) => {
                
                if (e.matches === true) {
                    allowedBreakpointIndex.value = allowedBreakpointIndex.value + 1
                }

                if (e.matches === false) {
                    allowedBreakpointIndex.value = allowedBreakpointIndex.value > 0 ? allowedBreakpointIndex.value - 1 : 0
                    
                }
            })
        })
    })

    const viewStyle = ( customResponsiveStyles: ResponsiveStyles ): Partial<CSSProperties> => {

        const responsiveStyles = {
            xs: {},
            md: {},
            xl: {},
            ...customResponsiveStyles
        }

        const accumulatedStyles = Object.values(responsiveStyles).reduce((acc, value, index) => {
            if (index <= allowedBreakpointIndex.value) {
                return { ...acc, ...value };
            }
            return acc;
        }, {} as Partial<CSSProperties>);

        return accumulatedStyles

    }

    return { viewStyle }
}