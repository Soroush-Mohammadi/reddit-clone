<script setup lang="ts">
import { fakePosts } from '@/data/fakePosts';
import PostItem from '~/components/PostItem.vue';

const posts = fakePosts;
</script>

<template>
  <div class="space-y-4">
    <PostItem v-for="post in fakePosts" :key="post.id" :post="post" />
  </div>
</template>
