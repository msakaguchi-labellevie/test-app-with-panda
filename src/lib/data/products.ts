import type { Product } from '../types/product';

export const products: Product[] = [
	{
		id: '1',
		name: 'クラシックTシャツ',
		description: '着心地の良い綿100%のベーシックなTシャツです。',
		price: 2500,
		imageUrl: 'product1.jpg',
		category: 'トップス'
	},
	{
		id: '2',
		name: 'デニムジーンズ',
		description: '耐久性のある上質なデニム素材を使用したジーンズです。',
		price: 8000,
		imageUrl: 'product2.jpg',
		category: 'ボトムス'
	},
	{
		id: '3',
		name: 'レザーバッグ',
		description: '上質な本革を使用したハンドバッグです。',
		price: 15000,
		imageUrl: 'product3.jpg',
		category: 'アクセサリー'
	}
];
