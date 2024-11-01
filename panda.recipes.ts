import { defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
    className: 'btn',
    base: {
        display: 'inline-flex',
        borderRadius: '99px',
        paddingBlock: '3',
        paddingInline: '6',
        fontWeight: 'semibold',
        transition: 'all 200ms'
    },
    variants: {
        theme: {
            primary: { 
                bg: { 
                    base: 'primary', _hover: 'fuchsia.600', _focus: 'fuchsia.800', _active: 'fuchsia.800',
                    _dark: { _hover: 'fuchsia.200', _focus: 'fuchsia.400', _active: 'fuchsia.400', }
                }, 
                color: { 
                    base: 'white !important', 
                    _dark: 'fuchsia.900 !important'
                }, 
            }
        },
    }
})

export { buttonRecipe }