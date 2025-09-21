<script setup lang="ts">
import { fakePosts } from '@/data/fakePosts';
import PostItem from '~/components/PostItem.vue';
import MobileMenu from '~/components/MobileMenu.vue';

const posts = fakePosts;
</script>

<template>
  <div>
    <PostItem v-for="post in fakePosts" :key="post.id" :post="post" />
    <MobileMenu />
    <SearchView />
  </div>
</template>
