<template>
	<header class="flex items-center justify-between h-20 px-[5%] lg:px-[15%]">
		<NuxtLink to="/" class="text-xl border border-primary p-2">
			basicsWith<span class="text-primary font-semibold rainbow-text">Amit</span>
		</NuxtLink>
	</header>
</template>

<script setup>
</script>

<style scoped>
	.nav-link.router-link-active.router-link-exact-active {
		@apply text-primary;
	}
</style>
