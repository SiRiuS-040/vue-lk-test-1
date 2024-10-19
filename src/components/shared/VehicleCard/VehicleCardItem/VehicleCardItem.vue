<script setup lang="ts">
import { defineProps, computed } from "vue";
import type { IVehicle, IVehicles } from "@/repository/vehicles/models";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";

import Image from "primevue/image";

interface IProps {
  vehicle?: IVehicle;
}

defineProps<IProps>();
</script>
<template>
  <div class="vehicle-card-item" v-if="vehicle">
    <div class="vehicle-card-item__img-wrapper">
      <UiButton
        :theme="ButtonTheme.CLEAR"
        :format="ButtonFormat.SQUARE"
        class="vehicle-card-item__options"
      >
        <UiIcon :icon="IconName.MORE_HORIZONTAL" />
      </UiButton>
      <img
        v-if="!(vehicle.photo && vehicle.photo['processed_url'])"
        :src="vehicle.placeholder"
        alt=""
        class="vehicle-card-item__img"
      />
      <Image
        v-if="vehicle.photo && vehicle.photo['processed_url']"
        :src="vehicle.photo['processed_url']"
        alt="Image"
        preview
      />
    </div>
    <div class="vehicle-card-item__info">
      <h3 class="vehicle-card-item__vehicle-name">
        {{ vehicle["vehicle_name"] ? vehicle["vehicle_name"] : "Without name" }}
      </h3>
      <p v-if="vehicle.vin" class="vehicle-card-item__vin">
        <span> {{ vehicle["vin_postfix"] }} </span>
        <span>{{ vehicle.vin }}</span>
      </p>
    </div>
    <hr class="vehicle-card-item__divider" />
    <div class="vehicle-card-item__foter text-4">
      <span v-if="vehicle.hp" class="vehicle-card-item__ads"
        >{{ vehicle.hp }}
      </span>
      <span v-if="vehicle['defect_state']" class="vehicle-card-item__ads">
        {{ vehicle["defect_state"] }}
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.vehicle-card-item {
  padding: 16px;
  border-radius: 10px;
  background-color: var(--color-Primary-Light-Gray);

  &__img-wrapper {
    position: relative;
    display: flex;
    overflow: hidden;

    :deep(img) {
      object-fit: cover;
      width: 100%;
      border-radius: 6px;
      aspect-ratio: 26/13.5;
    }
  }

  &__options {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      width: 42px;
      height: 42px;
      background-color: var(--color-Primary-Light-Gray);
      transform: rotate(45deg) translateY(-16px) scale(1.5);
    }
  }

  &__vehicle-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 22px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
  }

  &__divider {
    margin-top: 18px;
    margin-bottom: 18px;
  }

  &__footer {
    display: flex;
    gap: 12px;
  }

  &__ads {
    padding: 5px 12px;
    border-radius: 6px;
    background-color: rgb(237, 237, 237);
    text-transform: uppercase;
  }
}
</style>
