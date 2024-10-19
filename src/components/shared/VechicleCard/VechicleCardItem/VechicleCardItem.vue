<script setup lang="ts">
import { defineProps, computed } from "vue";
import type { IVechicle, IVechicles } from "@/repository/vechicles/models";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";

interface IProps {
  vechicle?: IVechicle;
}

defineProps<IProps>();
</script>
<template>
  <div class="vechicle-card-item" v-if="vechicle">
    <div class="vechicle-card-item__img-wrapper">
      <UiButton :theme="ButtonTheme.CLEAR" :format="ButtonFormat.SQUARE" class="vechicle-card-item__options">
        <UiIcon :icon="IconName.MORE_HORIZONTAL" />
      </UiButton>
      <img :src="vechicle.placeholder" alt="" class="vechicle-card-item__img" />
    </div>
    <div class="vechicle-card-item__info">
      <h3 class="vechicle-card-item__vechicle-name">
        {{
          vechicle["vehicle_name"] ? vechicle["vehicle_name"] : "Without name"
        }}
      </h3>
      <p v-if="vechicle.vin" class="vechicle-card-item__vin">
        <span> {{ vechicle["vin_postfix"] }} </span>
        <span>{{ vechicle.vin }}</span>
      </p>
    </div>
    <hr class="vechicle-card-item__divider" />
    <div class="vechicle-card-item__foter text-4">
      <span v-if="vechicle.hp" class="vechicle-card-item__ads">{{ vechicle.hp }}
      </span>
      <span v-if="vechicle['defect_state']" class="vechicle-card-item__ads">
        {{ vechicle["defect_state"] }}
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.vechicle-card-item {
  padding: 16px;
  border-radius: 10px;
  background-color: var(--color-Primary-Light-Gray);

  @media (min-width: 768px) {}

  @media (min-width: 1440px) {}

  &__img-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;

    @media (min-width: 1440px) {}
  }

  &__options {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 2;

    &::before {
      position: absolute;
      content: "";
      width: 42px;
      height: 42px;
      background-color: var(--color-Primary-Light-Gray);
      z-index: -1;
      transform: rotate(45deg) translateY(-16px) scale(1.5);

    }
  }

  &__img {
    object-fit: cover;
    width: 100%;
    border-radius: 6px;
    aspect-ratio: 26/13.5;
  }

  &__vechicle-name {
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
