<script setup lang="ts">
import { ref } from "vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import UiInput from "@/components/ui/UiInput/UiInput.vue";

import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
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

const selected = ref();
const selected2 = ref();
</script>
<template>
  <main class="app-main">
    <div>Главная страница</div>
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
      <div class="content-grid-8">
        <UiIcon :icon="IconName.ARROW_LEFT" />
        <UiIcon :icon="IconName.ARROW_RIGHT" />
        <UiIcon :icon="IconName.BRIEFCASE" />
        <UiIcon :icon="IconName.CAMERA" />
        <UiIcon :icon="IconName.CHECK" />
        <UiIcon :icon="IconName.CHART" />
        <UiIcon :icon="IconName.CHEVRON_DOWN" />
        <UiIcon :icon="IconName.CHEVRON_LEFT" />
        <UiIcon :icon="IconName.CHEVRON_RIGHT" />
        <UiIcon :icon="IconName.CLOSE" />
        <UiIcon :icon="IconName.COPYRIGHT" />
        <UiIcon :icon="IconName.CROP" />
        <UiIcon :icon="IconName.DOWNLOAD" />
        <UiIcon :icon="IconName.EDIT" />
        <UiIcon :icon="IconName.EYE" />
        <UiIcon :icon="IconName.GLOBE" />
        <UiIcon :icon="IconName.IMAGE_2" />
        <UiIcon :icon="IconName.IMAGE" />
        <UiIcon :icon="IconName.INFO" />
        <UiIcon :icon="IconName.LOCATION" />
        <UiIcon :icon="IconName.LOCK" />
        <UiIcon :icon="IconName.LOGIN" />
        <UiIcon :icon="IconName.MORE_HORIZONTAL" />
        <UiIcon :icon="IconName.MORE_VERTICAL" />
        <UiIcon :icon="IconName.MOVE" />
        <UiIcon :icon="IconName.PATCH_CHECK_FILL" />
        <UiIcon :icon="IconName.PLATE_BLUR" />
        <UiIcon :icon="IconName.PLUS" />
        <UiIcon :icon="IconName.REFLECTIVE_2" />
        <UiIcon :icon="IconName.RIM_1" />
        <UiIcon :icon="IconName.RIM" />
        <UiIcon :icon="IconName.SCISSORS" />
        <UiIcon :icon="IconName.SETTINGS" />
        <UiIcon :icon="IconName.SLASH" />
        <UiIcon :icon="IconName.SLIDERS" />
        <UiIcon :icon="IconName.SUN" />
        <UiIcon :icon="IconName.TRASH" />
        <UiIcon :icon="IconName.UNLOCK" />
        <UiIcon :icon="IconName.USER_MINI" />
        <UiIcon :icon="IconName.USER" />
        <UiIcon :icon="IconName.ZOOM" />
        <UiIcon :icon="IconName.GERMANY" />
        <UiIcon :icon="IconName.PORTUGAL" />
        <UiIcon :icon="IconName.UK" />
        <UiIcon :icon="IconName.USA" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.content-grid-8 {
  display: grid;
  grid-template-columns: repeat(16, min-content);
  gap: 8px;
}
</style>
