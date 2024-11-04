<script setup lang="ts">
import { useRoute } from "vue-router";
import UiButton from "@/components/ui/UiButton/UiButton.vue";

const route = useRoute();
</script>

<template>
  <div class="page-content">
    <h1 class="page-content__page-title">
      {{ route.meta.title }}
    </h1>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  flex-direction: column;
  gap: 16px;

  &__page-title {
    display: block;
    padding-bottom: 16px;

    @include media-breakpoint-up(md) {
      margin-top: 24px;
    }

    @include media-breakpoint-up(xl) {
      max-width: 580px;
      min-height: 42px;
      margin-top: 0;
      padding-bottom: 30px;
    }
  }
}
</style>
