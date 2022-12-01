<template>
  <div>
    <main>
      <article
        class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[15%]"
      >
        <ContentDoc>
          <template v-slot="{ doc }">
            <ContentRenderer
              class="prose prose-xl prose-code:w-96 prose-code:overflow-x-auto prose-slate max-w-none post-link post-subtitle"
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
    <BlogOtherPosts />
    <AboutMe />
  </div>
</template>

<script setup></script>

<style scoped>
.post-link {
  @apply prose-a:border-b-4 prose-a:border-b-primary-400 prose-a:pb-1 prose-a:no-underline;
}

.post-subtitle {
  @apply prose-a:prose-headings:no-underline prose-a:prose-headings:border-b-0 prose-a:prose-headings:pb-0 prose-a:prose-headings:text-black prose-a:prose-headings:bg-white;
}
</style>
