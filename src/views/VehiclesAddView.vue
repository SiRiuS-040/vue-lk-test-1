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

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="page-content">
    <h1 class="page-content__page-title">
      {{ route.meta.title }}
    </h1>
    <hr />
    <div class="page-content__content"></div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  flex-direction: column;
  gap: 16px;

  &__page-title {
    display: block;
    padding-bottom: 16px;

    @media (min-width: 768px) {
      margin-top: 24px;
    }

    @media (min-width: 1440px) {
      max-width: 580px;
      min-height: 42px;
      margin-top: 0;
      padding-bottom: 30px;
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
}
</style>
