<template>
  <div class="p-4 border rounded-lg bg-white shadow">
    <div class="flex items-center space-x-2">
      <img
        :src="post.author.avatarUrl"
        alt="avatar"
        class="w-8 h-8 rounded-full"
      />
      <span class="font-semibold">@{{ post.author.username }}</span>
      <span class="text-sm text-gray-500">in r/{{ post.subreddit }}</span>
    </div>
    <h2 class="text-lg font-bold mt-2">{{ post.title }}</h2>
    <p class="text-gray-700">{{ post.content }}</p>
    <div class="flex space-x-4 mt-2 text-sm text-gray-500">
      <span>👍 {{ post.votes }}</span>
      <span>Posted on {{ post.createdAt.toLocaleDateString() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/post';
defineProps<{
  post: Post;
}>();
</script>
