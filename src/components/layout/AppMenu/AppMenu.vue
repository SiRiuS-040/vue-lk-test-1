<script setup lang="ts">
import { ref, computed } from "vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import { useAppMenuStore } from "@/stores/app-menu.ts";

const appMenuStore = useAppMenuStore();
</script>

<template>
  <div class="app-menu" :class="{ 'is-open': appMenuStore.isOpen }">
    <div class="app-menu__logo">
      <span>Demo Test</span>
      <UiButton
        :theme="ButtonTheme.CLEAR"
        class="app-menu__menu-close"
        @click="appMenuStore.triggerMenuState()"
      >
        <UiIcon :icon="IconName.CLOSE" />
      </UiButton>
    </div>
    <ul class="app-menu__nav">
      <li>
        <router-link class="app-menu__nav-item" to="/auth-login">
          <UiIcon :icon="IconName.LOGIN" />Login
        </router-link>
      </li>
      <li>
        <router-link class="app-menu__nav-item" to="/auth-restore">
          <UiIcon :icon="IconName.EDIT" />Restore
        </router-link>
      </li>
      <li>
        <router-link class="app-menu__nav-item" to="/">
          <UiIcon :icon="IconName.GLOBE" />Home
        </router-link>
      </li>
      <li>
        <router-link class="app-menu__nav-item" to="/profile">
          <UiIcon :icon="IconName.USER_MINI" />Profile
        </router-link>
      </li>
      <li>
        <router-link class="app-menu__nav-item" to="/vechicles">
          <UiIcon :icon="IconName.RIM" />Vechicles
        </router-link>
      </li>
      <li>
        <router-link class="app-menu__nav-item" to="/settings">
          <UiIcon :icon="IconName.SETTINGS" />Settings
        </router-link>
      </li>
      <li>
        <router-link class="app-menu__nav-item" to="/components">
          <UiIcon :icon="IconName.TRASH" />Components
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.app-menu {
  width: 0;
  background-color: var(--color-Primary-Dark);
  overflow: hidden;
  // color: var(--color-Text-White);
  overflow-y: auto;

  padding: 0 0 40px 0;

  &.is-open {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    @media (min-width: 768px) {
      width: 254px;
      position: static;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    width: 254px;
  }

  @media (min-width: 1440px) {
    width: 254px;
  }

  &__menu-close {
    @media (min-width: 768px) {
      display: none;
    }
  }

  &__logo {
    padding: 30px 16px;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: var(--color-Text-White);

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding: 30px 30px 30px 32px;
    }

    @media (min-width: 1440px) {
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 32px;

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }

  &__nav-item {
    color: var(--color-Text-White);
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px 16px 12px 18px;
    position: relative;

    @media (min-width: 768px) {
      padding: 12px 30px 12px 32px;
    }

    &:hover {
      transition: color 0.3s;
      color: var(--color-Primary-Red);
    }

    &.router-link-active,
    .router-link-exact-active {
      background-color: rgba(255, 255, 255, 0.2);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: var(--color-Primary-Red);
      }
    }
  }
}
</style>
