<template>
	<div>
		<main>
			<article
				class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[15%]"
			>
				<!-- <div
					v-if="post?.body?.toc?.links?.length > 0"
					class="w-[300px] p-5 sticky top-3 border rounded-md bg-white hidden lg:block"
				>
					<h2 class="text-sm font-bold mb-4">Table Of Contents</h2>
					<ul class="space-y-2">
						<template v-for="link in post?.body?.toc?.links" :key="link.id">
							<li>
								<NuxtLink
									:class="{
										'text-sm ml-4': link.depth == 2,
										'text-[13px] ml-6': link.depth > 2,
									}"
									class="capitalize hover:text-primary"
									:to="`#${link.id}`"
									>{{ link?.text }}</NuxtLink
								>
							</li>
						</template>
					</ul>
				</div> -->
				<ContentDoc v-slot="{ doc }">
					<ContentRenderer
						class="prose  prose-lg prose-slate pr-7 max-w-none"
						:value="doc"
					>
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
				</ContentDoc>
			</article>
		</main>
	</div>
</template>

<script setup>

</script>

<style scoped>
	.post-link {
		@apply prose-a:text-primary  before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
	}
</style>
