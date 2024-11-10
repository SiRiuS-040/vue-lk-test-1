<script setup lang="ts">
import { ref, computed, watch } from "vue";
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
import EmployeeForm from "@/components/shared/forms/EmployeeForm/EmployeeForm.vue";

import PageContent from "@/components/layout/PageContent/PageContent.vue";
import ProfileCard from "@/components/shared/Profile/ProfileCard/ProfileCard.vue";

import {
  IStaffItem,
  UserSStatus,
  Employee,
} from "@/repository/employee/types.ts";

const route = useRoute();
const router = useRouter();
const cardData = ref(new Employee());
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
      <ProfileCard :cardData="cardData" />
      <EmployeeForm v-model="cardData" class="page__form">
        <template #form-actions>
          <UiButton :size="ButtonSize.L"> Add employee </UiButton>
        </template>
      </EmployeeForm>
    </template>
  </PageContent>
</template>

<style scoped lang="scss">
.page {
  &__form {
    @include media-breakpoint-up(md) {
      width: 470px;
    }

    @include media-breakpoint-up(xl) {
      width: 50%;
    }
  }
}
</style>
