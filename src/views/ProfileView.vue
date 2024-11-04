<script setup lang="ts">
import { ref, watch } from "vue";
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
import { staffList } from "@/components/shared/Profile/StaffList/model/mock.ts";

const search = ref("");

const filteredList = ref([]);

filteredList.value = staffList;

const clearSearch = () => {
  search.value = "";
};

const searchFields = ["userName", "email", "phone"];

const searchFiltered = () => {
  console.log("searchFiltered");
  filteredList.value = staffList
    .map((item) => item)
    .filter((staffItem) => {
      if (
        staffItem.userName &&
        staffItem.userName.toLowerCase().match(search.value.toLowerCase())
      ) {
        return staffItem;
      }

      if (
        staffItem.email &&
        staffItem.email.toLowerCase().match(search.value.toLowerCase())
      ) {
        return staffItem;
      }

      if (
        staffItem.phone &&
        staffItem.phone.toLowerCase().match(search.value.toLowerCase())
      ) {
        return staffItem;
      }

      // return searchFields.filter((field) => {
      //   console.log(staffItem[field]);
      //   console.log(
      //     staffItem[field].toLowerCase().match(search.value.toLowerCase())
      //   );

      //   if (
      //     staffItem[field] &&
      //     staffItem[field].toLowerCase().match(search.value.toLowerCase())
      //   ) {
      //     return staffItem;
      //   }
      // });
    });
};

watch(search, () => {
  console.log(search.value);
});
</script>

<template>
  <PageContent class="page" :tabs="['Profile', 'Staff']">
    <template #Profile-content>
      <div class="flex-col-16">
        <ProfileCard />
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
        <UiButton class="page__filter-add">
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
