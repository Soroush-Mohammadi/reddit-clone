<script setup>
import { mobileMenu } from '~/data/mobileMenu';

const menu = mobileMenu;
</script>

<template>
  <div
    v-for="section in menu"
    :key="section.id"
    class="flex flex-col my-3 w-3/4 m-auto"
  >
    <ul class="mb-4">
      <h1 v-if="section.title" class="text-gray-400 text-xs mb-4">
        {{ section.title }}
      </h1>
      <li
        v-for="subMenu in section.items"
        :key="subMenu.id"
        class="text-xs my-4 flex flex-col gap-y-3"
      >
        <div class="w-full flex items-center">
          <Icon
            :name="subMenu.icon"
            width="64"
            height="64"
            style="color: #fff"
            size="1.1rem"
          />
          <span class="mx-2">{{ subMenu.label }}</span>
          <Icon
            v-if="subMenu.children && subMenu.children.length"
            name="bxs:down-arrow"
            width="24"
            height="24"
            style="color: #fff"
            class="ml-auto"
          />
        </div>
        <div class="ml-2 ps-4 border-l border-gray-500">
          <ul v-if="subMenu.children && subMenu.children.length">
            <li
              v-for="item in subMenu.children"
              :key="item.id"
              class="my-2 text-xs"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <hr />
  </div>
</template>
