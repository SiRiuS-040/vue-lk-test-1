<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";

interface IProps {
  tabs?: string[];
}

const props = defineProps<IProps>();
const route = useRoute();

const currentTab = ref("");

if (props.tabs) {
  currentTab.value = props.tabs[0];
}

const changeTab = (tab: string) => {
  currentTab.value = tab;
};
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
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: currentTab === tab }"
        class="tabs__item text-1"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
    <hr />
    <div
      v-show="currentTab === tab"
      class="page-content__content flex-col-16"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <slot :name="`${tab}-content`" />
    </div>
    <div class="page-content__content flex-col-16">
      <slot name="default-content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  flex-direction: column;
  gap: 16px;

  &__page-title-wrapper {

    @include media-breakpoint-up(xl) {
      max-width: 580px;
      min-height: 42px;
      margin-top: 0;
      margin-bottom: 30px;
    }
    display: flex;
    gap: 16px;
    align-items: center;
    min-height: 42px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  &__page-title {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__tabs {
    @include media-breakpoint-up(xl) {
      margin-top: -16px;
    }
  }

  &__content {

    @include media-breakpoint-up(md) {
      margin-top: 24px;
    }

    @include media-breakpoint-up(xl) {
      margin-top: 32px;
    }
    margin-top: 16px;
  }
}

.tabs {
  display: flex;
  flex-direction: row;
  gap: 32px;

  &__item {
    padding-bottom: 14px;
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      box-shadow: 0 3px 0px -1px var(--color-Primary-Red);
    }
  }
}
</style>
