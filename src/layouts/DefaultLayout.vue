<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import AppMenu from "@/components/layout/AppMenu/AppMenu.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiSelect from "@/components/ui/UiSelect/UiSelect.vue";
import LangSelect from "@/components/shared/LangSelect/LangSelect.vue";

import { useAppMenuStore } from "@/stores/app-menu.ts";

const router = useRouter();
const route = useRoute();

const windowWidth = ref(window.innerWidth);

console.log(windowWidth.value);

const istMobile = computed(() => {
  return windowWidth.value < 768;
});

const appMenuStore = useAppMenuStore();
</script>
<template>
  <div class="default-layout">
    <div class="default-layout__wrapper">
      <AppMenu class="default-layout__app-menu"> </AppMenu>
      <div class="default-layout__content">
        <div class="default-layout__header">
          <h1 class="default-layout__page-title">
            {{ route.meta.title }}
          </h1>
          <div class="default-layout__header-info">
            <UiButton :format="ButtonFormat.SQUARE">
              <UiIcon :icon="IconName.PLUS" />
            </UiButton>
            <span class="default-layout__header-user">
              <span class="default-layout__header-user-icon">
                <UiIcon :icon="IconName.USER" />
              </span>
              <span class="text-3">John Doe</span>
            </span>
            <LangSelect />
            <UiButton
              v-show="istMobile"
              :format="ButtonFormat.SQUARE"
              :theme="ButtonTheme.OUTLINE"
              class="default-layout__header-burger"
              @click="appMenuStore.triggerMenuState()"
            >
              <UiIcon :icon="IconName.MORE_HORIZONTAL" />
            </UiButton>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;

  opacity: 1;
  animation-name: fade-out;
  transition: opacity 0.1s;
  animation-duration: 0.3s;

  height: 100%;
  width: 100%;
  min-height: 100vh;
  // max-height: 100vh;

  @media (min-width: 768px) {
    padding: 20px 20px;
  }

  @media (min-width: 1440px) {
    padding: 30px 40px;

    // min-height: none;
  }

  &__wrapper {
    flex-grow: 1;
    // padding: 16px 16px;
    // height: 100%;
    width: 100%;
    border-radius: 20px;
    background: var(--color-Primary-White);
    position: relative;
    overflow: hidden;

    display: flex;
    // align-items: center;
    // justify-content: center;

    @media (min-width: 768px) {
      // padding: 20px 20px;
      min-height: 1024px;
    }

    @media (min-width: 1440px) {
      flex-grow: 0;
      // padding: 30px 40px;
      width: 1440px;
      // height: 1024px;
    }
  }

  &__content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 16px 16px;

    @media (min-width: 1440px) {
      padding: 32px 30px;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    color: var(--color-Text-Black);

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__page-title {
    order: 2;

    @media (min-width: 768px) {
      order: 1;
    }

    @media (min-width: 1440px) {
      // order: 1;
    }
  }

  &__header-info {
    display: flex;
    align-items: center;
    gap: 16px;
    order: 1;

    margin-right: 0;
    margin-left: auto;

    @media (min-width: 768px) {
      order: 2;

      margin-right: unset;
      margin-left: unset;
    }

    @media (min-width: 1440px) {
      gap: 32px;
    }
  }

  &__header-user {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__header-user-icon {
    border-radius: 50%;
    height: 46px;
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-Primary-Light-Gray);
  }

  &__header-burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
}

@keyframes fade-out {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
