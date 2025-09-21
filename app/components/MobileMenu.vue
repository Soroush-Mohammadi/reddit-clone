<script setup>
import { mobileMenu } from '~/data/mobileMenu';

const menu = mobileMenu;
</script>

<template>
  <div
    class="w-60 h-full bg-black absolute flex flex-col items-center pt-10 top-12 left-0 text-white font-light"
  >
    <div
      v-for="section in menu"
      :key="section.id"
      class="flex flex-col my-2 w-3/4"
    >
      <ul class="mb-4">
        <h1 v-if="section.title" class="text-gray-400 text-xs mb-4">
          {{ section.title }}
        </h1>
        <li
          v-for="subMenu in section.items"
          :key="subMenu.id"
          class="text-xs my-3 flex space-x-2 items-center"
        >
          <Icon
            :name="subMenu.icon"
            width="64"
            height="64"
            style="color: #fff"
            size="1.1rem"
          />
          <span>{{ subMenu.label }}</span>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>
