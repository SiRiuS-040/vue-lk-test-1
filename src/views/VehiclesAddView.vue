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

import PageContent from "@/components/layout/PageContent/PageContent.vue";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <PageContent>
    <template #title-control>
      <UiButton
        :theme="ButtonTheme.PLAIN"
        :format="ButtonFormat.SQUARE"
        @click="router.back()"
      >
        <UiIcon :icon="IconName.ARROW_LEFT" />
      </UiButton>
    </template>

    <template #default-content>
      <AddVehicleForm class="page__form" />
    </template>
  </PageContent>
</template>

<style scoped lang="scss">
.page {
  &__form {
    @media (min-width: 768px) {
      width: 470px;
    }

    @media (min-width: 1440px) {
      width: 50%;
    }
  }
}
</style>
