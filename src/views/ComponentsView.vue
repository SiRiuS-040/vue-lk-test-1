<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";

import UiTextArea from "@/components/ui/UiTextArea/UiTextArea.vue";
import UiSelect from "@/components/ui/UiSelect/UiSelect.vue";

const selectOptions = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 5,
  },
];

const route = useRoute();
const selected = ref();
const selected2 = ref();
</script>

<template>
  <div class="page-content">
    <h1 class="page-content__page-title">
      {{ route.meta.title }}
    </h1>
    <div class="app-main__content">
      <div>
        <UiButton> Default </UiButton>
        <UiButton :icon="IconName.LOGIN" :iconEnd="IconName.EYE">
          with props icon
        </UiButton>
        <UiButton
          :icon="IconName.LOGIN"
          :iconEnd="IconName.EYE"
          :size="ButtonSize.L"
        >
          with props icon - (l)
        </UiButton>
      </div>
      <div>
        <UiButton :theme="ButtonTheme.PRIMARY"> Default (m) </UiButton>
        <UiButton
          :theme="ButtonTheme.PRIMARY"
          :icon="IconName.LOGIN"
          :iconEnd="IconName.LOGIN"
        >
          with props icon
        </UiButton>
        <UiButton
          :theme="ButtonTheme.PRIMARY"
          :icon="IconName.LOGIN"
          :iconEnd="IconName.EYE"
          :size="ButtonSize.L"
        >
          with props icon - (l)
        </UiButton>
      </div>
      <div>
        <UiButton disabled :theme="ButtonTheme.PLAIN"> Default (m) </UiButton>
        <UiButton disabled :icon="IconName.LOGIN" :iconEnd="IconName.LOGIN">
          with props icon
        </UiButton>
        <UiButton
          disabled
          :icon="IconName.LOGIN"
          :iconEnd="IconName.EYE"
          :size="ButtonSize.L"
        >
          with props icon - (l)
        </UiButton>
      </div>
      <div>
        <UiButton :size="ButtonSize.S" disabled> Size S </UiButton>
      </div>
      <div>
        <UiButton :format="ButtonFormat.SQUARE">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton :theme="ButtonTheme.OUTLINE" :format="ButtonFormat.SQUARE">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton :theme="ButtonTheme.PLAIN" :format="ButtonFormat.SQUARE">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton :format="ButtonFormat.CIRCLE">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton :theme="ButtonTheme.OUTLINE" :format="ButtonFormat.CIRCLE">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton :theme="ButtonTheme.PLAIN" :format="ButtonFormat.CIRCLE">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
      </div>
      <div class="flex-col-16">
        <UiInput
          label="Label"
          helperText="Helper text"
          placeholder="Placeholder"
        />
        <UiInput
          label="Label"
          helperText="Helper text"
          placeholder="Placeholder"
        >
          <template #icon>
            <UiIcon :icon="IconName.PLUS" />
          </template>
        </UiInput>
        <UiInput
          label="Label"
          helperText="Helper text"
          :icon="IconName.ZOOM"
          placeholder="Placeholder"
        />
        <UiInput disabled placeholder="Placeholder" />
        <UiTextArea
          label="Label"
          helperText="Helper text"
          placeholder="Placeholder"
        />
      </div>
      <div class="flex-8">
        <router-link to="/"> Link - Home </router-link>
        <router-link to="/components"> Link - Components </router-link>
      </div>
      <div class="flex-col-16">
        <div>Выбрано: {{ selected }}</div>
        <div>Выбрано: {{ selected2 }}</div>
        <UiSelect v-model="selected" :options="selectOptions" />
        <UiSelect v-model="selected2" hasDefault :options="selectOptions" />
      </div>
      <div class="flex-8">
        <UiIcon v-for="(icon, index) in IconName" :key="index" :icon="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  &__page-title {
    display: block;
    padding-bottom: 16px;

    @media (min-width: 768px) {
      margin-top: 24px;
    }

    @media (min-width: 1440px) {
      max-width: 580px;
      min-height: 42px;
      margin-top: 0;
      padding-bottom: 30px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
