<script setup lang="ts">
import { ref, watch } from "vue";

import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import { useAuthStore } from "@/stores/auth.ts";

const authStore = useAuthStore();
</script>

<template>
  <div class="profile-card">
    <div class="profile-card__info">
      <UiIcon :icon="IconName.USER" :size="IconSize.SIZE_82" />
      <div>
        <h2 class="profile-card__name">{{ authStore.userName }}</h2>
      </div>
    </div>

    <div class="profile-card__stats profile-stats">
      <div class="profile-stats__item">
        <p class="text-3">Total Credit</p>
        <p class="text-2">79</p>
      </div>
      <div class="profile-stats__item">
        <p class="text-3">Available Tokens</p>
        <p class="text-2">12</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-card {
  padding: 18px;
  border: 1px solid red;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    border-radius: 10px;

    align-items: center;
    flex-direction: row;
    gap: unset;

    justify-content: space-between;
  }

  &__info {
    display: flex;
    gap: 16px;
  }

  &__stats {
  }
}

.profile-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;

  //   flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  &__item {
    padding: 0 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
}
</style>
