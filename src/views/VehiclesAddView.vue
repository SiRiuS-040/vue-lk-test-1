<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiSelect from "@/components/ui/UiSelect/UiSelect.vue";

import LoginForm from "@/components/shared/forms/LoginForm/LoginForm.vue";
import AddVehicleForm from "@/components/shared/forms/AddVehicleForm/AddVehicleForm.vue";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="page-content">
    <div class="page-content__page-title-wrapper">
      <UiButton
        :theme="ButtonTheme.PLAIN"
        :format="ButtonFormat.SQUARE"
        @click="router.back()"
      >
        <UiIcon :icon="IconName.ARROW_LEFT" />
      </UiButton>
      <h1 class="page-content__page-title">{{ route.meta.title }}</h1>
    </div>

    <hr />
    <div class="page-content__content">
      <AddVehicleForm class="page-content__form" />
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

  &__content {
    margin-top: 16px;

    @media (min-width: 768px) {
      margin-top: 24px;
    }

    @media (min-width: 1440px) {
      margin-top: 36px;
    }
  }

  &__form {
    @media (min-width: 768px) {
      width: 400px;
    }

    @media (min-width: 1440px) {
      width: 50%;
    }
  }
}
</style>
