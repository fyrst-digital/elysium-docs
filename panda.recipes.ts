import { defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
    className: 'btn',
    base: {
        display: 'inline-flex',
        borderRadius: '99px',
        paddingBlock: '3',
        paddingInline: '6',
        fontWeight: 'semibold',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        transition: 'all 200ms'
    },
    variants: {
        theme: {
            primary: { 
                bg: { 
                    base: 'primary', _hover: 'fuchsia.600', _focus: 'fuchsia.800', _active: 'fuchsia.800',
                    _dark: { _hover: 'fuchsia.200', _focus: 'fuchsia.400', _active: 'fuchsia.400', }
                }, 
                borderColor: {
                    base: 'primary', _hover: 'fuchsia.600', _focus: 'fuchsia.800', _active: 'fuchsia.800',
                    _dark: { _hover: 'fuchsia.200', _focus: 'fuchsia.400', _active: 'fuchsia.400', }
                },
                color: { 
                    base: 'white !important', 
                    _dark: 'fuchsia.900 !important'
                }, 
            },
            outlinePrimary: {
                bg: { 
                    _hover: 'primary', _focus: 'fuchsia.800', _active: 'fuchsia.800',
                    _dark: { _focus: 'fuchsia.400', _active: 'fuchsia.400' }
                }, 
                borderColor: {
                    base: 'primary', _focus: 'fuchsia.800', _active: 'fuchsia.800',
                    _dark: { _hover: 'primary', _focus: 'fuchsia.400', _active: 'fuchsia.400' }
                },
                color: { 
                    base: 'primary !important', _hover: 'white !important', _focus: 'white !important', _active: 'white !important',
                    _dark: { _hover: 'fuchsia.900 !important', _focus: 'fuchsia.900 !important', _active: 'fuchsia.900 !important', }
                }, 
            }
        },
    }
})

export { buttonRecipe }