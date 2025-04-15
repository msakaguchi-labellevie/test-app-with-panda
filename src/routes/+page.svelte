<script lang="ts">
	import { css } from 'styled-system/css';
	import { grid, container } from 'styled-system/patterns';
	import { products } from '$lib/data/products';
	import Search from './products/components/Search.svelte';
	import Banner from './products/components/Banner.svelte';
	import Card from './products/components/Card.svelte';

	const imageModules = import.meta.glob('$lib/images/*.{jpg,png,webp}', { eager: true });

	const imageMap = Object.fromEntries(
		Object.entries(imageModules).map(([path, module]) => {
			const filename = path.split('/').pop()!;
			return [filename, (module as { default: string }).default];
		})
	);
</script>

<div class={container({ maxW: '6xl', py: '8' })}>
	<h1 class={css({ fontSize: '3xl', fontWeight: 'bold', mb: '6' })}>商品一覧</h1>

	<div class={css({ mb: '6' })}>
		<Search />
	</div>

	<div class={css({ mb: '6' })}>
		<Banner
			title="新商品入荷中！"
			message="この季節にぴったりの新作アイテムが入荷しました。期間限定で送料無料でお届けします。"
			buttonText="新商品を見る"
			buttonLink="/products/new"
			bannerType="info"
		/>
	</div>

	<div class={grid({ columns: [1, 2, 3], gap: '6' })}>
		{#each products as product}
			<Card {product} imageSrc={imageMap[product.imageUrl]} />
		{/each}
	</div>
</div>
