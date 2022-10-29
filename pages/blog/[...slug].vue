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
        <ContentDoc>
          <template v-slot="{ doc }">
            <ContentRenderer
              class="prose prose-xl prose-slate pr-7 max-w-none post-link post-subtitle"
              :value="doc"
            >
            </ContentRenderer>
          </template>

          <template #not-found>
            <Redirect />
          </template>
        </ContentDoc>
      </article>
    </main>
    <AboutMe />
  </div>
</template>

<script setup></script>

<style scoped>
.post-link {
  @apply prose-a:border-b-4 prose-a:border-b-primary prose-a:no-underline;
}

.post-subtitle {
  @apply prose-a:prose-headings:no-underline prose-a:prose-headings:border-b-0 prose-a:prose-headings:text-black prose-a:prose-headings:bg-white;
}
</style>
