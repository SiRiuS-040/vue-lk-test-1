<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
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
import type { IVehicle, IVehicles } from "@/repository/vehicles/models";
import VehicleCardItem from "@/components/shared/VehicleCard/VehicleCardItem/VehicleCardItem.vue";
import Pagination from "@/components/shared/Pagination/Pagination.vue";
import { useVehiclesStore } from "@/stores/vehicles.ts";
import PageContent from "@/components/layout/PageContent/PageContent.vue";

const route = useRoute();
const router = useRouter();
const selectPerPageOptions = ref([9, 18, 36, 72]);
const perPageselected = ref(9);
const currentPage = ref(1);
const search = ref("");
const vehiclesStore = useVehiclesStore();

const fetchCarsByParams = async () => {
  vehiclesStore.fetchCarsByParams(
    perPageselected.value,
    currentPage.value,
    search.value
  );
};

const changePage = async (page: number) => {
  currentPage.value = page;
  await fetchCarsByParams();
};

fetchCarsByParams();

const clearSearch = () => {
  search.value = "";
};

const searchFiltered = () => {
  fetchCarsByParams();
};

watch(
  () => perPageselected.value,
  () => {
    currentPage.value = 1;
    fetchCarsByParams();
  }
);
</script>

<template>
  <PageContent class="page">
    <template #title-ads>
      <span class="page__ads text-5">
        {{ vehiclesStore.vehiclesTotal }}
      </span>
    </template>
    <template #default-content>
      <div class="page__filter">
        <UiInput
          v-model="search"
          placeholder="Search Name, VIN, Model, Brand"
          size="s"
          class="page__filter-search"
        >
          <template #icon>
            <UiIcon v-if="search" :icon="IconName.CLOSE" @click="clearSearch" />
            <UiIcon :icon="IconName.ZOOM" @click="searchFiltered" />
          </template>
        </UiInput>
        <span>
          <span>Select vehicles per page:</span>
          <UiSelect v-model="perPageselected" :options="selectPerPageOptions" />
        </span>
        <UiButton
          class="page__filter-add"
          @click.prevent="router.push({ name: 'NewVehicles' })"
        >
          <UiIcon :icon="IconName.PLUS" />
          Add Vehicle
        </UiButton>
      </div>
      <div class="page__vehicle-cards">
        <VehicleCardItem
          v-for="vehicle in vehiclesStore.vehicles"
          :vehicle="vehicle"
          :key="vehicle.id"
          class="page__vehicle-card"
        />
      </div>
      <Pagination
        :currentPage="currentPage"
        :itemsPerPage="perPageselected"
        :totalItems="vehiclesStore.vehiclesTotal"
        @changePage="(page) => changePage(page)"
        class="page__pagination"
      />
    </template>
  </PageContent>
</template>

<style scoped lang="scss">
.page {
  &__ads {

    @include media-breakpoint-up(md) {
      font-size: 15px;
      line-height: 22px;
    }
    padding: 5px 12px;
    border-radius: 6px;
    background-color: rgb(237, 237, 237);

    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    text-transform: uppercase;
  }

  &__filter {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;

    &-search {
      @include media-breakpoint-up(md) {
        width: 49%;
      }

      @include media-breakpoint-up(xl) {
        width: 355px;
      }
    }
  }

  &__filter-add {
    margin-right: 0;
    margin-left: auto;
  }

  &__vehicle-cards {

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    @include media-breakpoint-up(xl) {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    margin-top: 32px;
  }

  &__pagination {
    margin-top: auto;
    margin-bottom: 0;
  }
}
</style>
