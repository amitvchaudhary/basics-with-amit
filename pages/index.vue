<template>
	<div class="h-full">
		<main>
			<HomeIntroduction />
			<BlogRecentPosts />
		</main>
	</div>
</template>

<script setup>
const { data: blogNav } = await useAsyncData("navigation", () => {
	return fetchContentNavigation(queryContent("blog"));
});

const somePosts = queryContent('/blog').find();
console.log(somePosts);

console.log('blog nav===');
console.log(blogNav);
useHead({
	title: "basicsWithAmit",
});
</script>
