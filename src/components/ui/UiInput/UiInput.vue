<template>
  <label class="ui-input" :class="inputClasses">
    <span v-if="label" class="ui-input__label">{{ label }}</span>
    <span class="ui-input__wrapper">
      <input
        :disabled="disabled"
        :placeholder="placeholder"
        class="ui-input__input"
      />
      <UiIcon v-if="icon" class="ui-input__icon" :icon="icon" />
      <span class="ui-input__icon-slot">
        <slot name="icon"> </slot>
      </span>
    </span>
    <span class="ui-input__helper-text">{{ helperText }}</span>
  </label>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { IconName } from "@/components/ui/UiIcon/model/types";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";

export interface IProps {
  placeholder?: string;
  label?: string;
  icon?: IconName;
  disabled?: boolean;
  helperText?: string;
}

const props = defineProps<IProps>();

const inputClasses = computed(() => {
  return [];
});
</script>
<style scoped lang="scss">
@import "style/ui-input.scss";
</style>
