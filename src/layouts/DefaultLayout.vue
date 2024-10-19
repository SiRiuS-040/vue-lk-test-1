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
import { useAuthStore } from "@/stores/auth.ts";

const router = useRouter();
const route = useRoute();

const appMenuStore = useAppMenuStore();
const authStore = useAuthStore();
</script>
<template>
  <div class="default-layout">
    <div class="default-layout__wrapper">
      <AppMenu class="default-layout__app-menu" />
      <div class="default-layout__content">
        <div class="default-layout__header">
          <div class="default-layout__header-info">
            <UiButton
              :format="ButtonFormat.SQUARE"
              :theme="ButtonTheme.OUTLINE"
            >
              <UiIcon :icon="IconName.PLUS" />
            </UiButton>
            <span class="default-layout__header-user">
              <span class="default-layout__header-user-icon">
                <UiIcon :icon="IconName.USER" :size="IconSize.SIZE_32" />
              </span>
              <span class="text-3">{{ authStore.userName }}</span>
            </span>
            <LangSelect />
          </div>
          <UiButton
            :theme="ButtonTheme.CLEAR"
            class="default-layout__header-burger"
            @click="appMenuStore.triggerMenuState()"
          >
            <UiIcon :icon="IconName.MORE_HORIZONTAL" />
          </UiButton>
        </div>
        <div class="default-layout__main">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 4px 4px;
  opacity: 1;
  transition: opacity 0.3s;

  @media (min-width: 768px) {
    max-height: none;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }

  &__wrapper {
    position: relative;

    display: flex;
    flex-grow: 1;
    overflow: hidden;
    width: 100%;
    border-radius: 4px;
    background: var(--color-Primary-White);

    transition: all 0.1s;

    @media (min-width: 768px) {
      border-radius: 20px;
      min-height: 1024px;
    }

    @media (min-width: 1440px) {
      flex-grow: 0;
      width: 1440px;
    }
  }

  &__content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow-y: auto;
    padding: 16px 16px;

    @media (min-width: 768px) {
      width: min-content;
    }

    @media (min-width: 1440px) {
      padding: 32px 30px;
    }
  }

  &__header {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    color: var(--color-Text-Black);
  }

  &__header-burger {
    @media (min-width: 768px) {
      display: none;
    }
  }

  &__main {
    @media (min-width: 1440px) {
      margin-top: -42px;
    }
  }

  &__header-info {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;

    margin-right: 0;
    margin-left: auto;

    @media (min-width: 768px) {
      margin-right: unset;
      margin-left: unset;
    }

    @media (min-width: 1440px) {
      gap: 32px;
    }
  }

  &__header-user {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__header-user-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: var(--color-Primary-Light-Gray);
  }
}
</style>
