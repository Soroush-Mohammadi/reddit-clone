<script setup lang="ts">
import { fakePosts } from '@/data/fakePosts';
import PostItem from '~/components/PostItem.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import CommunityMenu from '~/components/CommunityMenu.vue';

const posts = fakePosts;
</script>

<template>
  <div class="grid grid-cols-24 bg-richBlack">
    <div
      class="col-span-4 flex flex-col border-t scrollbar-hide hover:scrollbar-auto border-r text-white font-light overflow-auto"
    >
      <MobileMenu />
    </div>
    <div
      class="col-start-6 col-span-10 flex flex-col items-center p-2 border border-gray-500 rounded-lg"
    >
      <PostItem v-for="post in fakePosts" :key="post.id" :post="post" />
    </div>
    <div class="col-start-19 col-span-4">
      <CommunityMenu />
    </div>
  </div>
</template>
