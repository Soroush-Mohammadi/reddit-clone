<script setup>
import { popularCommunities } from '@/data/communityData';

const communites = popularCommunities;
</script>

<template>
  <div class="bg-black text-white p-2">
    <h1 class="text-lg text-gray-500">Popular Communities</h1>
    <ul>
      <li class="my-4" v-for="comm in popularCommunities" :key="comm.id">
        {{ comm.name }} {{ comm.memberCount }}
      </li>
    </ul>
  </div>
</template>
