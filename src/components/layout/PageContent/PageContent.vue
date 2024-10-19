<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";

interface IProps {
  tabs?: string[];
}

const props = defineProps<IProps>();
const route = useRoute();
</script>

<template>
  <div class="page-content">
    <div class="page-content__page-title-wrapper">
      <slot name="title-control" />
      <h1 class="page-content__page-title">
        {{ route.meta.title }}
        <slot name="title-ads" />
      </h1>
    </div>
    <div v-if="tabs" class="page-content__tabs tabs">
      <div v-for="(tab, index) in tabs" :key="index" class="tabs__item">
        {{ tab }}
      </div>
    </div>
    <hr />
    <div
      class="page-content__content"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <slot :name="`${tab}-content`" />
    </div>
    <div class="page-content__content">
      <slot name="default-content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  flex-direction: column;
  gap: 16px;

  &__page-title-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-top: 24px;
    }

    @media (min-width: 1440px) {
      max-width: 580px;
      min-height: 42px;
      margin-top: 0;
      margin-bottom: 30px;
      min-height: 42px;
    }
  }

  &__page-title {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__content {
    margin-top: 16px;

    @media (min-width: 768px) {
      margin-top: 24px;
    }

    @media (min-width: 1440px) {
      margin-top: 36px;
    }
  }
}
</style>
