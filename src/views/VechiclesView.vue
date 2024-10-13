<script setup lang="ts">
import { ref } from "vue";
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

const route = useRoute();

const selectOptions = ref([1, 2, 3]);
const selected = ref(1);

const vechiclesMock = [
  {
    id: 10,
    user_id: 2,
    company_id: 1,
    angles_count: 14,
    vin: "232323232",
    vin_postfix: null,
    vehicle_name: "Тестовая куча",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/10/n8ZKWonyUJpBfcj9y45m3GXT1w1oO1e1MLQZZT3i.png",
    preview:
      "https://api.caiman-app.de/storage/photos/10/n8ZKWonyUJpBfcj9y45m3GXT1w1oO1e1MLQZZT3i.png",
    photo: {
      id: 40,
      car_id: 10,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/10/TfI9pZnlnKHZjYVcCCTT133zcslI1NkGXsOnzvym.jpg",
      processed_url:
        "https://api.caiman-app.de/storage/photos/10/n8ZKWonyUJpBfcj9y45m3GXT1w1oO1e1MLQZZT3i.png",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 1,
      created_at: 1669024240,
    },
    photos_count: 14,
    uploads: 6,
    created_at: 1661244952,
  },
  {
    id: 11,
    user_id: 2,
    company_id: 1,
    angles_count: 14,
    vin: "123456",
    vin_postfix: null,
    vehicle_name: null,
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/11/VQlEErMjVr8BVeUkz9QBAct4cEHeSiGtXZRuo3Wm.jpg",
    preview:
      "https://api.caiman-app.de/storage/photos/11/VQlEErMjVr8BVeUkz9QBAct4cEHeSiGtXZRuo3Wm.jpg",
    photo: {
      id: 44,
      car_id: 11,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/11/VQlEErMjVr8BVeUkz9QBAct4cEHeSiGtXZRuo3Wm.jpg",
      processed_url:
        "https://api.caiman-app.de/storage/photos/11/VQlEErMjVr8BVeUkz9QBAct4cEHeSiGtXZRuo3Wm.jpg",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 0,
      created_at: 1669024240,
    },
    photos_count: 1,
    uploads: 12,
    created_at: 1661264923,
  },
  {
    id: 12,
    user_id: 2,
    company_id: 1,
    angles_count: 14,
    vin: "test",
    vin_postfix: null,
    vehicle_name: "undefined undefined",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/12/hVJvNQqepLHQ8Bzm6HanDqu8XqpwPpLHkrfIwvOi.png",
    preview:
      "https://api.caiman-app.de/storage/photos/12/hVJvNQqepLHQ8Bzm6HanDqu8XqpwPpLHkrfIwvOi.png",
    photo: {
      id: 45,
      car_id: 12,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/12/tjCsdx2khhp2TsI79AGzTwN8Tb2A36lENyxx9J76.jpg",
      processed_url:
        "https://api.caiman-app.de/storage/photos/12/hVJvNQqepLHQ8Bzm6HanDqu8XqpwPpLHkrfIwvOi.png",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 1,
      created_at: 1669024240,
    },
    photos_count: 3,
    uploads: 11,
    created_at: 1661358229,
  },
  {
    id: 15,
    user_id: 2,
    company_id: 1,
    angles_count: 16,
    vin: "333",
    vin_postfix: null,
    vehicle_name: "red",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/15/CVyrSHbXhsuF6U112WeP8iX67ldqneeIY3renRtu.png",
    preview:
      "https://api.caiman-app.de/storage/photos/15/CVyrSHbXhsuF6U112WeP8iX67ldqneeIY3renRtu.png",
    photo: {
      id: 51,
      car_id: 15,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/15/5hDunxra1tfXDoD3tfzMhtm8qtgx3Fes24F2pAgw.jpg",
      processed_url:
        "https://api.caiman-app.de/storage/photos/15/CVyrSHbXhsuF6U112WeP8iX67ldqneeIY3renRtu.png",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 1,
      created_at: 1669024240,
    },
    photos_count: 4,
    uploads: 13,
    created_at: 1661433495,
  },
  {
    id: 18,
    user_id: 2,
    company_id: 1,
    angles_count: 16,
    vin: "gfe3998989hjhjj",
    vin_postfix: null,
    vehicle_name: "Серый порш",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/18/pQK7wxAt1EHYIZA5oEldhSpLo0QpTwAyiiSr2vHv.png",
    preview:
      "https://api.caiman-app.de/storage/photos/18/pQK7wxAt1EHYIZA5oEldhSpLo0QpTwAyiiSr2vHv.png",
    photo: {
      id: 53,
      car_id: 18,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/18/2RCAnUbYt4y3TI7e6GKADz2YOJBCxviRUw5kgoYN.png",
      processed_url:
        "https://api.caiman-app.de/storage/photos/18/pQK7wxAt1EHYIZA5oEldhSpLo0QpTwAyiiSr2vHv.png",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 1,
      created_at: 1669024240,
    },
    photos_count: 6,
    uploads: 13,
    created_at: 1661436522,
  },
  {
    id: 19,
    user_id: 2,
    company_id: 1,
    angles_count: 16,
    vin: "testovyVIN123",
    vin_postfix: null,
    vehicle_name: "Рандомная машинка",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/19/evMu1zV6eK0I4riwcX99u2f069Nod98Uggz9WPOc.png",
    preview:
      "https://api.caiman-app.de/storage/photos/19/evMu1zV6eK0I4riwcX99u2f069Nod98Uggz9WPOc.png",
    photo: {
      id: 66,
      car_id: 19,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/19/juBXCZhZ6z4Rmx727skEnNWVHk64xcjLuyds338I.jpg",
      processed_url:
        "https://api.caiman-app.de/storage/photos/19/evMu1zV6eK0I4riwcX99u2f069Nod98Uggz9WPOc.png",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 1,
      created_at: 1669024241,
    },
    photos_count: 7,
    uploads: 14,
    created_at: 1661437067,
  },
  {
    id: 20,
    user_id: 2,
    company_id: 1,
    angles_count: 16,
    vin: "vin2vin",
    vin_postfix: null,
    vehicle_name: "undefined undefined",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/20/05yYQG3AQqyH1XAfogl0FyhTojxzSsreVDLi454z.jpg",
    preview:
      "https://api.caiman-app.de/storage/photos/20/05yYQG3AQqyH1XAfogl0FyhTojxzSsreVDLi454z.jpg",
    photo: {
      id: 60,
      car_id: 20,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/20/05yYQG3AQqyH1XAfogl0FyhTojxzSsreVDLi454z.jpg",
      processed_url: null,
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 0,
      created_at: 1669024240,
    },
    photos_count: 6,
    uploads: 10,
    created_at: 1661510129,
  },
  {
    id: 21,
    user_id: 3,
    company_id: 1,
    angles_count: 16,
    vin: "tetetetet",
    vin_postfix: null,
    vehicle_name: "undefined undefined",
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/21/nwCuGHVxdvCcHGW2SUSbSIfzWAIn43QETjIBKArF.jpg",
    preview:
      "https://api.caiman-app.de/storage/photos/21/nwCuGHVxdvCcHGW2SUSbSIfzWAIn43QETjIBKArF.jpg",
    photo: {
      id: 58,
      car_id: 21,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/21/nwCuGHVxdvCcHGW2SUSbSIfzWAIn43QETjIBKArF.jpg",
      processed_url: null,
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 0,
      created_at: 1669024240,
    },
    photos_count: 3,
    uploads: 12,
    created_at: 1661870165,
  },
  {
    id: 30,
    user_id: 2,
    company_id: 1,
    angles_count: 16,
    vin: "tesst",
    vin_postfix: null,
    vehicle_name: null,
    brand: null,
    model: null,
    body_type: null,
    fuel_type: null,
    hp: null,
    ccm: null,
    description: null,
    moderated: true,
    defect_state: "ok",
    placeholder:
      "https://api.caiman-app.de/storage/photos/30/1YnqIMSh1uptpcO3DfbDrTh4O7WDjdZYJe8VjmmP.png",
    preview:
      "https://api.caiman-app.de/storage/photos/30/1YnqIMSh1uptpcO3DfbDrTh4O7WDjdZYJe8VjmmP.png",
    photo: {
      id: 85,
      car_id: 30,
      angle_id: 1,
      url: "https://api.caiman-app.de/storage/photos/30/zCpQfjCug9XlS8tb2u5uif4Njr932fh2OBR1jWqY.png",
      processed_url:
        "https://api.caiman-app.de/storage/photos/30/1YnqIMSh1uptpcO3DfbDrTh4O7WDjdZYJe8VjmmP.png",
      status: 4,
      status_name: "фото успешно обработано и модерировано",
      defect_state: "ok",
      in_process_by_admin: 1,
      created_at: 1669024241,
    },
    photos_count: 1,
    uploads: 16,
    created_at: 1663764119,
  },
] as IVechicle[];
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
          <UiSelect v-model="selected" :options="selectOptions" />
        </span>

        <UiButton class="page-content__filter-add">
          <UiIcon :icon="IconName.PLUS" />
          Add Vechicle
        </UiButton>
      </div>
      <div class="page-content__vechicle-cards">
        <VechicleCardItem
          v-for="vechicle in vechiclesMock"
          :vechicle="vechicle"
          :key="vechicle.id"
          class="page-content__vechicle-card"
        />
      </div>
      <div class="page-content__footer">
        <span> Showing 9 out of 256 </span>
        <span> Pagination </span>
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
