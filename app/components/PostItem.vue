<template>
  <div class="flex items-center space-x-2">
    <img
      :src="post.author.avatarUrl"
      alt="avatar"
      class="w- h-8 rounded-full"
    />
    <span class="font-thin text-seaSalt">@{{ post.author.username }}</span>

    <span class="text-sm text-gray-500">in r/{{ post.subreddit }}</span>
    <span class="text-gray-500">{{ post.createdAt.toLocaleDateString() }}</span>
  </div>
  <h2 class="text-lg font-bold mt-2 text-white">{{ post.title }}</h2>
  <div v-if="post.imageUrl" class="mt-2">
    <img
      :src="post.imageUrl"
      alt="Post image"
      class="rounded-lg w-full max-h-96 object-cover mb-2"
    />
  </div>
  <p class="text-gray-400 text-sm">{{ post.content }}</p>

  <div class="flex space-x-4 mt-2">
    <div class="flex justify-around bg-gray-500 rounded-xl items-center w-16">
      <button>
        <Icon
          name="typcn:arrow-up-outline"
          width="24"
          height="24"
          style="color: #fff"
        />
      </button>
      <span class="text-white">{{ post.votes }}</span>
      <button>
        <Icon
          name="typcn:arrow-down-outline"
          width="24"
          height="24"
          style="color: #fff"
        />
      </button>
    </div>
    <button class="bg-gray-500 rounded-xl w-10">
      <Icon
        name="mdi:chat-outline"
        width="24"
        height="24"
        style="color: #fff"
      />
    </button>
    <button class="bg-gray-500 rounded-xl w-10">
      <Icon
        name="simple-line-icons:badge"
        width="1024"
        height="1024"
        style="color: #fff"
      />
    </button>
    <button
      class="flex justify-center items-center space-x-4 bg-gray-500 rounded-xl px-2"
    >
      <Icon
        name="ph:share-fat-light"
        width="256"
        height="256"
        style="color: #fff"
      />
      <span class="text-white text-xs">share</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/post';
defineProps<{
  post: Post;
}>();
</script>
