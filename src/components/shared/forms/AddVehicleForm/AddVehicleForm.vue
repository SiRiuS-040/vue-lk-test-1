<script setup lang="ts">
import { computed, ref, unref, watch } from "vue";
import { useRouter } from "vue-router";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import UiTextArea from "@/components/ui/UiTextArea/UiTextArea.vue";

const router = useRouter();

const vin = ref();
const make = ref();
const model = ref();
const bodyType = ref();
const fuelType = ref();
const hp = ref();
const cmm = ref();

const pwInputType = ref("password");
const authErrorMessage = ref("");
</script>
<template>
  <div class="add-vehicle-form">
    <div class="add-vehicle-form__form">
      <UiInput v-model="vin" label="VIN" placeholder="VIN 1234567890" />
      <UiInput v-model="model" label="Make" placeholder="Make" />
      <UiInput v-model="model" label="Model" placeholder="Model" />
      <UiInput v-model="bodyType" label="Body type" placeholder="Body type" />
      <UiInput v-model="fuelType" label="Fuel type" placeholder="Fuel type" />
      <UiInput v-model="hp" label="Hp" placeholder="Hp" />
      <UiInput v-model="cmm" label="CMM" placeholder="CMM" />
      <UiTextArea label="Description" />
      <UiButton :size="ButtonSize.L"> Add vechicle </UiButton>
    </div>
  </div>
</template>
<style lang="scss">
.add-vehicle-form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__form {

    @include media-breakpoint-up(md) {
      gap: 24px;
    }
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__error {
    color: var(--color-Secondary-Light-Red);
  }

  &__forget-password {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  &__controls {

    @include media-breakpoint-up(md) {
      gap: 24px;
    }
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
