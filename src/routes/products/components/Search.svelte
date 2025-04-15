<script lang="ts">
	import { css } from 'styled-system/css';
	import { hstack } from 'styled-system/patterns';
</script>

<div class={hstack({ gap: '6' })}>
	<input
		type="text"
		placeholder="商品を検索..."
		class={css({
			width: 'full',
			height: '38px',
			paddingY: 2,
			paddingX: 4,
			fontSize: 'sm',
			borderRadius: 'md',
			border: '1px solid',
			borderColor: 'gray.200',
			_hover: { borderColor: 'gray.300' },
			_focus: {
				outline: 'none',
				borderColor: 'blue.500',
				boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.6)'
			}
		})}
	/>
	<button
		class={css({
			bg: 'blue.500',
			w: '5',
			color: 'white',
			fontSize: 'sm',
			fontWeight: 'medium',
			borderRadius: 'md',
			_hover: { bg: 'blue.600' },
			_active: { bg: 'blue.700' }
		})}
	>
		検索
	</button>
</div>
