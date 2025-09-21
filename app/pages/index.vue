<script setup lang="ts">
import { fakePosts } from '@/data/fakePosts';
import PostItem from '~/components/PostItem.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import SearchView from '~/components/SearchView.vue';

const posts = fakePosts;
</script>

<template>
  <div>
    <PostItem v-for="post in fakePosts" :key="post.id" :post="post" />
    <MobileMenu class="hidden" />
  </div>
</template>
