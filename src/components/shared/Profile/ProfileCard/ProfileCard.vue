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
      <div class="flex-col-8">
        <h2 class="profile-card__name">{{ authStore.userName }}</h2>
        <div class="flex-center-16 flex-wrap">
          <UiButton :theme="ButtonTheme.CLEAR" class="flex-8">
            <UiIcon :icon="IconName.CAMERA" :size="IconSize.SIZE_20" />
            Upload new photo
          </UiButton>
          <span class="profile-card__status flex-center-8">
            <UiIcon
              :icon="IconName.PATCH_CHECK_FILL"
              :size="IconSize.SIZE_16"
            />
            Active
          </span>
        </div>
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
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 18px;
  border: 1px solid var(--color-Text-Line-Grey);
  border-radius: 6px;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
  }

  @include media-breakpoint-up(xl) {
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }

  &__status {
    color: var(--color-Secondary-Green);
  }
}

.profile-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  //   flex-direction: column;
  justify-content: center;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @include media-breakpoint-up(xl) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
  }
}
</style>
