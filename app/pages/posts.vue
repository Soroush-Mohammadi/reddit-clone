<script setup lang="ts">
const { data: posts, error, pending } = await useFetch('/api/posts');
</script>

<template>
  <div class="bg-white">
    <h1>Posts</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading posts</div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>
