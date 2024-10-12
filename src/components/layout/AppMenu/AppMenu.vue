<script setup lang="ts">
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
</script>

<template>
  <div class="app-menu">
    <div class="app-menu__logo">Demo Test</div>
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

<style scope lang="scss">
.app-menu {
  width: 0;
  background-color: var(--color-Primary-Dark);
  overflow: hidden;
  color: var(--color-Text-White);

  &.open {
    width: 100%;

    @media (min-width: 768px) {
      width: 254px;
    }
  }

  @media (min-width: 768px) {
    width: 254px;
  }

  @media (min-width: 1440px) {
    width: 254px;
  }

  &__logo {
    padding: 16px;
    font-size: 24px;
    line-height: 24px;
    text-align: center;

    @media (min-width: 1440px) {
      padding: 30px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__nav-item {
    color: var(--color-Text-White);
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px 30px 12px 32px;
    position: relative;

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
