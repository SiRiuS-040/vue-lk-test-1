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
import { useAppMenuStore } from "@/stores/app-menu";
import { useAuthStore } from "@/stores/auth";

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
              @click.prevent="router.push({ name: 'NewEmployee' })"
            >
              <UiIcon :icon="IconName.PLUS" />
            </UiButton>
            <span class="default-layout__header-user">
              <span class="default-layout__header-user-avatar-wrapper">
                <img
                  v-if="authStore.avatar"
                  :src="authStore.avatar"
                  alt="Аватар"
                  class="default-layout__header-user-avatar"
                />
                <UiIcon v-else :icon="IconName.USER" :size="IconSize.SIZE_32" />
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

  @include media-breakpoint-up(md) {
    max-height: none;
  }

  @include media-breakpoint-up(xl) {
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

    @include media-breakpoint-up(md) {
      min-height: 1024px;
      border-radius: 20px;
    }

    @include media-breakpoint-up(xl) {
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

    @include media-breakpoint-up(md) {
      width: min-content;
    }

    @include media-breakpoint-up(xl) {
      padding: 32px 30px;
    }
  }

  &__header {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    color: var(--color-Text-Black);
  }

  &__header-user-avatar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__header-user-avatar {
    width: 42px;
    height: 42px;
    overflow: hidden;
    border-radius: 8px;
  }

  &__header-burger {
    @include media-breakpoint-up(md) {
      display: none;
    }
  }

  &__main {
    @include media-breakpoint-up(xl) {
      margin-top: -42px;
    }
  }

  &__header-info {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;

    margin-right: 0;
    // margin-left: auto;
    flex-grow: 1;

    @include media-breakpoint-up(md) {
      margin-right: unset;
      margin-left: unset;
      flex-grow: unset;
    }

    @include media-breakpoint-up(xl) {
      gap: 32px;
    }
  }

  &__header-user {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: auto;

    @include media-breakpoint-up(md) {
      margin-right: unset;
    }
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
