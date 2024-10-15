<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
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
import type { IVechicle, IVechicles } from "@/repository/vechicles/models";
import VechicleCardItem from "@/components/shared/VechicleCard/VechicleCardItem/VechicleCardItem.vue";
import Pagination from "@/components/shared/Pagination/Pagination.vue";
import { useVechiclesStore } from "@/stores/vechicles.ts";

const route = useRoute();
const selectPerPageOptions = ref([9, 18, 36, 72]);
const perPageselected = ref(9);
const currentPage = ref(1);
const vechiclesStore = useVechiclesStore();

const fetchCarsByParams = async (perPage: number = 9, page: number = 1) => {
  vechiclesStore.fetchCarsByParams(perPage, page);
};

const changePage = async (page: number) => {
  console.log("со страницы");
  console.log(page);

  currentPage.value = page;
  await fetchCarsByParams(perPageselected.value, currentPage.value);
};

fetchCarsByParams(9, 1);

watch(
  () => perPageselected.value,
  () => {
    currentPage.value = 1;
    fetchCarsByParams(perPageselected.value, 1);
  }
);
</script>

<template>
  <div class="page-content">
    <h1 class="page-content__page-title">
      {{ route.meta.title }}
    </h1>
    <hr />
    <div class="page-content__content">
      <div class="page-content__filter">
        <UiInput
          placeholder="Search VIN"
          size="s"
          class="page-content__filter-search"
        >
          <template #icon>
            <UiIcon :icon="IconName.ZOOM" />
          </template>
        </UiInput>
        <span>
          <span>Select vehicles per page:</span>
          <UiSelect v-model="perPageselected" :options="selectPerPageOptions" />
        </span>

        <UiButton class="page-content__filter-add">
          <UiIcon :icon="IconName.PLUS" />
          Add Vechicle
        </UiButton>
      </div>
      <div class="page-content__vechicle-cards">
        <VechicleCardItem
          v-for="vechicle in vechiclesStore.vechicles"
          :vechicle="vechicle"
          :key="vechicle.id"
          class="page-content__vechicle-card"
        />
      </div>
      <div class="page-content__footer">
        <span>
          Showing
          {{
            perPageselected < vechiclesStore.vechiclesTotal
              ? perPageselected
              : vechiclesStore.vechiclesTotal
          }}
          out of
          {{ vechiclesStore.vechiclesTotal }}
        </span>
        <Pagination
          :currentPage="currentPage"
          :itemsPerPage="perPageselected"
          :totalItems="vechiclesStore.vechiclesTotal"
          @changePage="(page) => changePage(page)"
        ></Pagination>
      </div>
    </div>
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
      margin-top: 0;
      min-height: 42px;
      padding-bottom: 30px;
      max-width: 580px;
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

  &__filter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;

    &-search {
      @media (min-width: 1440px) {
        width: 355px;
      }
    }
  }

  &__filter-add {
    margin-right: 0;
    margin-left: auto;
  }

  &__vechicle-cards {
    margin-top: 32px;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }

  &__vechicle-card {
  }

  &__footer {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
