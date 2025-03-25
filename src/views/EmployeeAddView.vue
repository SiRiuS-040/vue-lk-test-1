<script setup lang="ts">
import { ref, computed, watch, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
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
import { staffList } from "@/repository/employee/mock";
import { UserStatus, Employee } from "@/repository/employee/types";
import type { IStaffItem } from "@/repository/employee/types.ts";

const toast = useToast();
const route = useRoute();
const router = useRouter();
const cardData = ref(new Employee() as IStaffItem);

const addEmployee = () => {
  if (!cardData.value.userName || !cardData.value.email) {
    toast.warning("Please input required fields!");
    return;
  }

  const newUserPw: string | number = "333";
  cardData.value.password = newUserPw;

  const newEmployee = { ...toRaw(cardData.value) };
  staffList.push(newEmployee);
  toast.success(`New employee created succesfully! Password is ${newUserPw}`);
};
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
          <UiButton :size="ButtonSize.L" @click.prevent="addEmployee()">
            Add employee
          </UiButton>
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
