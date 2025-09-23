<script setup lang="ts">
import { fakePosts } from '@/data/fakePosts';
import PostItem from '~/components/PostItem.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import CommunityMenu from '~/components/CommunityMenu.vue';

const posts = fakePosts;
</script>

<template>
  <div class="grid grid-cols-12 gap-8 bg-richBlack">
    <div
      class="col-span-2 flex flex-col border-t scrollbar-hide hover:scrollbar-auto border-r text-white font-light overflow-auto"
    >
      <MobileMenu />
    </div>
    <div
      class="col-start-4 col-span-6 flex flex-col p-2 border border-gray-500 rounded-lg"
    >
      <PostItem v-for="post in fakePosts" :key="post.id" :post="post" />
    </div>
    <div class="col-start-10 col-span-2">
      <CommunityMenu />
    </div>
  </div>
</template>
