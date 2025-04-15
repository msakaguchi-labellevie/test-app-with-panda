import { products } from '$lib/data/products';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const product = products.find((p) => p.id === params.id);

	if (!product) {
		throw error(404, '商品が見つかりませんでした');
	}

	return {
		product
	};
};
