<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import PageContent from "@/components/layout/PageContent/PageContent.vue";
import ProfileCard from "@/components/shared/Profile/ProfileCard/ProfileCard.vue";
import ProfileForm from "@/components/shared/forms/ProfileForm/ProfileForm.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import StaffList from "@/components/shared/Profile/StaffList/StaffList.vue";
import { staffList } from "@/repository/employee/mock.ts";
import { useAuthStore } from "@/stores/auth.ts";

const authStore = useAuthStore();

const authUser = computed(() => {
  return {
    id: authStore.id,
    userName: authStore.userName,
    email: authStore.email,
    phone: authStore.phone,
    credits: authStore.credits,
    tokens: authStore.tokens,
    avatar: authStore.avatar,
  };
});

const router = useRouter();
const search = ref("");
const filteredList = ref([]);
filteredList.value = staffList;

const clearSearch = () => {
  search.value = "";
};

const searchFields = ["userName", "email", "phone"];

const searchFiltered = () => {
  filteredList.value = staffList
    .map((item) => item)
    .filter((staffItem) => {
      return (
        staffItem.userName.toLowerCase().match(search.value.toLowerCase()) ||
        staffItem.userName.toLowerCase().match(search.value.toLowerCase()) ||
        staffItem.phone.toLowerCase().match(search.value.toLowerCase()) ||
        staffItem.userStatus.toLowerCase().match(search.value.toLowerCase())
      );
    });
};
</script>

<template>
  <PageContent class="page" :tabs="['Profile', 'Staff']">
    <template #Profile-content>
      <div class="flex-col-16">
        <ProfileCard :cardData="authUser" />
        <ProfileForm class="page__form" />
      </div>
    </template>
    <template #Staff-content>
      <div class="page__filter">
        <UiInput
          v-model="search"
          placeholder="Search"
          size="s"
          class="page__filter-search"
        >
          <template #icon>
            <UiIcon v-if="search" :icon="IconName.CLOSE" @click="clearSearch" />
            <UiIcon :icon="IconName.ZOOM" @click="searchFiltered" />
          </template>
        </UiInput>
        <UiButton
          class="page__filter-add"
          @click.prevent="router.push({ name: 'NewEmployee' })"
        >
          <UiIcon :icon="IconName.PLUS" />
          Add new employee
        </UiButton>
      </div>
      <StaffList :items="filteredList" :key="filteredList" />
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

  &__filter {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;

    &-search {
      @include media-breakpoint-up(md) {
        width: 355px;
      }
    }
  }

  &__filter-add {
    margin-right: 0;
    margin-left: auto;
  }
}
</style>
