<script lang="ts">
	import { css } from 'styled-system/css';
	import { flex, container } from 'styled-system/patterns';
	import type { PageData } from './$types';

	export let data: PageData;
	const { product } = data;

	let quantity = 1;

	const imageModules = import.meta.glob('$lib/images/*.{jpg,png,webp}', { eager: true });

	const imageMap = Object.fromEntries(
		Object.entries(imageModules).map(([path, module]) => {
			const filename = path.split('/').pop()!;
			return [filename, (module as { default: string }).default];
		})
	);
</script>

<div class={container({ maxW: '6xl', py: '8' })}>
	<div class={flex({ gap: '8', direction: ['column', 'column', 'row'] })}>
		<div class={css({ flex: '1' })}>
			<img
				src={imageMap[product.imageUrl]}
				alt={product.name}
				class={css({
					w: 'full',
					h: 'auto',
					borderRadius: 'lg',
					objectFit: 'cover'
				})}
			/>
		</div>

		<div class={css({ flex: '1' })}>
			<h1 class={css({ fontSize: '3xl', fontWeight: 'bold', mb: '4' })}>{product.name}</h1>
			<p class={css({ fontSize: '2xl', fontWeight: 'bold', mb: '4', color: 'blue.600' })}>
				¥{product.price.toLocaleString()}
			</p>
			<p class={css({ mb: '6', color: 'gray.600' })}>{product.description}</p>

			<div class={css({ mb: '6' })}>
				<label class={css({ display: 'block', mb: '2', fontWeight: 'medium' })}>
					数量
					<input
						type="number"
						bind:value={quantity}
						min="1"
						class={css({
							w: '20',
							p: '2',
							border: '1px solid',
							borderColor: 'gray.300',
							borderRadius: 'md'
						})}
					/>
				</label>
			</div>

			<button
				class={css({
					w: 'full',
					bg: 'blue.500',
					color: 'white',
					py: '3',
					px: '6',
					borderRadius: 'md',
					fontWeight: 'bold',
					_hover: { bg: 'blue.600' }
				})}
			>
				カートに追加
			</button>
		</div>
	</div>
</div>
