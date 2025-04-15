<script lang="ts">
	import { css } from 'styled-system/css';
	import { flex } from 'styled-system/patterns';

	type BannerType = 'info' | 'warning' | 'success' | 'error';

	let {
		title = 'セール実施中！',
		message = '期間限定の特別セール！全商品20%オフでお買い求めいただけます。',
		buttonText = '詳細を見る',
		buttonLink = '/sale',
		bannerType = 'info' as BannerType,
		showBanner = true
	} = $props();

	// バナータイプに応じた色設定
	const colorSchemes = {
		info: {
			bg: 'white',
			border: 'gray.200',
			icon: 'blue.500'
		},
		warning: {
			bg: 'white',
			border: 'gray.200',
			icon: 'orange.500'
		},
		success: {
			bg: 'white',
			border: 'gray.200',
			icon: 'green.500'
		},
		error: {
			bg: 'white',
			border: 'gray.200',
			icon: 'red.500'
		}
	} as const;

	// デフォルト値
	const defaultColorScheme = {
		bg: 'white',
		border: 'gray.200',
		icon: 'blue.500'
	};

	const colorScheme = $derived(
		colorSchemes[bannerType as keyof typeof colorSchemes] || defaultColorScheme
	);
</script>

{#if showBanner}
	<div
		class={css({
			width: 'full',
			marginY: 4,
			paddingY: 3,
			paddingX: 4,
			borderRadius: 'md',
			border: '1px solid',
			borderColor: colorScheme.border,
			bg: colorScheme.bg,
			position: 'relative',
			overflow: 'hidden',
			boxShadow: 'sm',
			transition: 'all 0.3s ease'
		})}
		role="alert"
	>
		<button
			aria-label="バナーを閉じる"
			class={css({
				position: 'absolute',
				top: 2,
				right: 2,
				bg: 'transparent',
				border: 'none',
				padding: 1,
				cursor: 'pointer',
				color: 'gray.500',
				transition: 'color 0.2s ease',
				_hover: { color: 'gray.700' },
				lineHeight: 1
			})}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>

		<div
			class={flex({
				gap: 3,
				align: 'flex-start'
			})}
		>
			<!-- アイコン -->
			<div
				class={css({
					color: colorScheme.icon,
					flexShrink: 0,
					marginTop: '2px'
				})}
			>
				{#if bannerType === 'info'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M12 16v-4"></path>
						<path d="M12 8h.01"></path>
					</svg>
				{:else if bannerType === 'warning'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
						></path>
						<path d="M12 9v4"></path>
						<path d="M12 17h.01"></path>
					</svg>
				{:else if bannerType === 'success'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
						<polyline points="22 4 12 14.01 9 11.01"></polyline>
					</svg>
				{:else if bannerType === 'error'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="12" y1="8" x2="12" y2="12"></line>
						<line x1="12" y1="16" x2="12.01" y2="16"></line>
					</svg>
				{/if}
			</div>

			<div>
				<h3
					class={css({
						fontSize: 'md',
						fontWeight: 'bold',
						marginBottom: 1
					})}
				>
					{title}
				</h3>
				<p
					class={css({
						fontSize: 'sm',
						color: 'gray.700',
						lineHeight: 'tall'
					})}
				>
					{message}
				</p>
				{#if buttonText}
					<a
						href={buttonLink}
						class={css({
							display: 'inline-block',
							marginTop: 2,
							paddingY: 1,
							paddingX: 2,
							bg: 'blue.500',
							color: 'white',
							fontSize: 'sm',
							fontWeight: 'medium',
							borderRadius: 'md',
							textDecoration: 'none',
							_hover: {
								bg: 'blue.600'
							}
						})}
					>
						{buttonText}
					</a>
				{/if}
			</div>
		</div>
	</div>
{/if}
