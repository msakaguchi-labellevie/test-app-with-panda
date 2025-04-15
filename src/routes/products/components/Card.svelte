<script lang="ts">
	import { css } from 'styled-system/css';
	import { flex } from 'styled-system/patterns';

	type Product = {
		id: string;
		name: string;
		description: string;
		price: number;
		imageUrl: string;
	};

	let { product, imageSrc } = $props<{
		product: Product;
		imageSrc: string;
	}>();
</script>

<div
	class={css({
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'md',
		overflow: 'hidden',
		transition: 'transform 0.2s',

		_hover: { transform: 'scale(1.02)' }
	})}
>
	<img
		src={imageSrc}
		alt={product.name}
		class={css({
			w: 'full',
			h: '200px',
			objectFit: 'cover'
		})}
	/>
	<div class={css({ p: '4' })}>
		<h2 class={css({ fontSize: 'xl', fontWeight: 'bold', mb: '2' })}>{product.name}</h2>
		<p class={css({ color: 'gray.600', mb: '3' })}>{product.description}</p>
		<div class={flex({ justify: 'between', align: 'center' })}>
			<span class={css({ fontSize: 'lg', fontWeight: 'bold' })}
				>¥{product.price.toLocaleString()}</span
			>
			<a
				href={`/products/${product.id}`}
				class={css({
					bg: 'blue.500',
					color: 'white',
					px: '4',
					py: '2',
					borderRadius: 'md',
					_hover: { bg: 'blue.600' }
				})}
			>
				詳細を見る
			</a>
		</div>
	</div>
</div>
