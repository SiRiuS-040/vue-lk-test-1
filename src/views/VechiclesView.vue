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
    margin-bottom: 18px;

    @media (min-width: 768px) {
      margin-top: 24px;
    }

    @media (min-width: 1440px) {
      margin-top: 0;
      min-height: 42px;
      padding-bottom: 30px;
      max-width: 580px;
    }
  }
}
</style>
