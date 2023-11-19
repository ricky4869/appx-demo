<script setup>
import AppHeader from "@/components/AppHeader.vue"
import AppSide from "@/components/AppSide.vue"
import AppFooter from "@/components/AppFooter.vue"
import Collection from "@/pages/Collection.vue"

import { ref } from "vue"

const isOpenSide = ref(false)

const toggleSide = () => {
  isOpenSide.value = !isOpenSide.value
}
</script>

<template>
  <div class="layout">
    <AppHeader @toggleSide="toggleSide" />
    <AppSide :isOpenSide="isOpenSide" @toggleSide="toggleSide" />
    <main class="main" :class="{ 'main--open-side': isOpenSide }">
      <Collection />
    </main>
    <!-- <AppFooter /> -->
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  background: $main;
  min-height: 100vh;
  .main {
    padding: 80px 16px 16px;
  }

  @media (min-width: 1200px) {
    display: flex;
    .main {
      position: relative;
      width: calc(100% - 76px);
      left: 76px;
      padding: 120px 26px 30px;

      &--open-side {
        padding: 120px 26px 30px 0;

        width: calc(100% - 295px);
        left: 295px;
      }
    }
  }
}
</style>
