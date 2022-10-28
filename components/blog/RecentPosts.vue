<template>
  <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
    <div>
      <ContentList path="/blog" v-slot="{ list }" :query="postsQueryParams">
        <BlogPosts :posts="list" />
      </ContentList>
    </div>
  </section>
</template>

<script lang="ts" setup>
const postsQueryParams = {
  sort: {
    createdAt: -1,
  },
  //   limit: 3,
};
</script>
