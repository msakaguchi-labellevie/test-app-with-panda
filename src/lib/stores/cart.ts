import { writable } from 'svelte/store';
import type { Product } from '../types/product';

export type CartItem = {
	product: Product;
	quantity: number;
};

function createCart() {
	const { subscribe, set, update } = writable<CartItem[]>([]);

	return {
		subscribe,
		addItem: (product: Product, quantity: number) => {
			update((items) => {
				const existingItem = items.find((item) => item.product.id === product.id);
				if (existingItem) {
					return items.map((item) =>
						item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
					);
				}
				return [...items, { product, quantity }];
			});
		},
		removeItem: (productId: string) => {
			update((items) => items.filter((item) => item.product.id !== productId));
		},
		updateQuantity: (productId: string, quantity: number) => {
			update((items) =>
				items.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
			);
		},
		clear: () => set([])
	};
}

export const cart = createCart();
