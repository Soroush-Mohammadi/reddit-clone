<template>
  <nav class="flex items-center justify-between space-x-5 p-1">
    <Icon
      name="ant-design:menu-outlined"
      style="color: white"
      size="1.5rem"
      class="flex-none"
    />
    <img src="/Reddit-logo.png" alt="" style="width: 40px" />

    <SearchBox />
    <button
      class="bg-persimmon rounded-2xl text-white flex-none text-xs font-medium p-2"
    >
      Log in
    </button>
    <button class="flex-none">
      <icon
        name="ant-design:ellipsis-outlined"
        style="color: white"
        size="2rem"
      />
    </button>
  </nav>
</template>
