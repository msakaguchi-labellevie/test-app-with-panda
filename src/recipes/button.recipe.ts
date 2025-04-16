import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
	className: 'button',
	description: '様々なスタイルとサイズのボタンコンポーネント',
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'md',
		fontWeight: 'medium',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		whiteSpace: 'nowrap'
	},
	variants: {
		variant: {
			primary: {
				bg: 'blue.500',
				color: 'white',
				_hover: { bg: 'blue.600' },
				_active: { bg: 'blue.700' }
			},
			secondary: {
				bg: 'gray.200',
				color: 'gray.800',
				_hover: { bg: 'gray.300' },
				_active: { bg: 'gray.400' }
			},
			outline: {
				border: '1px solid',
				borderColor: 'blue.500',
				color: 'blue.500',
				bg: 'transparent',
				_hover: { bg: 'blue.50' },
				_active: { bg: 'blue.100' }
			},
			ghost: {
				bg: 'transparent',
				color: 'gray.700',
				_hover: { bg: 'gray.100' },
				_active: { bg: 'gray.200' }
			},
			link: {
				bg: 'transparent',
				color: 'blue.500',
				textDecoration: 'underline',
				p: '0',
				height: 'auto',
				_hover: { color: 'blue.600' },
				_active: { color: 'blue.700' }
			},
			danger: {
				bg: 'red.500',
				color: 'white',
				_hover: { bg: 'red.600' },
				_active: { bg: 'red.700' }
			}
		},
		size: {
			xs: {
				h: '24px',
				minW: '24px',
				fontSize: 'xs',
				px: '2'
			},
			sm: {
				h: '32px',
				minW: '32px',
				fontSize: 'sm',
				px: '3'
			},
			md: {
				h: '40px',
				minW: '40px',
				fontSize: 'md',
				px: '4'
			},
			lg: {
				h: '48px',
				minW: '48px',
				fontSize: 'lg',
				px: '6'
			}
		},
		isFullWidth: {
			true: {
				w: 'full'
			}
		},
		isDisabled: {
			true: {
				opacity: 0.6,
				cursor: 'not-allowed',
				_hover: { bg: 'initial' },
				_active: { bg: 'initial' }
			}
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md'
	}
});
