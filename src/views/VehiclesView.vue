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

const route = useRoute();
const router = useRouter();
const selectPerPageOptions = ref([9, 18, 36, 72]);
const perPageselected = ref(9);
const currentPage = ref(1);
const vehiclesStore = useVehiclesStore();

const fetchCarsByParams = async (perPage: number = 9, page: number = 1) => {
  vehiclesStore.fetchCarsByParams(perPage, page);
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
      <span class="page-content__ads text-5">{{
        vehiclesStore.vehiclesTotal
      }}</span>
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

        <UiButton
          class="page-content__filter-add"
          @click.prevent="router.push({ name: 'NewVehicles' })"
        >
          <UiIcon :icon="IconName.PLUS" />
          Add Vehicle
        </UiButton>
      </div>
      <div class="page-content__vehicle-cards">
        <VehicleCardItem
          v-for="vehicle in vehiclesStore.vehicles"
          :vehicle="vehicle"
          :key="vehicle.id"
          class="page-content__vehicle-card"
        />
      </div>
      <div class="page-content__footer">
        <span>
          Showing
          {{
            perPageselected < vehiclesStore.vehiclesTotal
              ? perPageselected
              : vehiclesStore.vehiclesTotal
          }}
          out of {{ vehiclesStore.vehiclesTotal }}
        </span>
        <Pagination
          :currentPage="currentPage"
          :itemsPerPage="perPageselected"
          :totalItems="vehiclesStore.vehiclesTotal"
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
    display: flex;
    gap: 18px;
    align-items: center;
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

  &__ads {
    padding: 5px 12px;
    border-radius: 6px;
    background-color: rgb(237, 237, 237);

    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 15px;
      line-height: 22px;
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
    gap: 32px;
    align-items: center;

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

  &__vehicle-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    margin-top: 32px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
