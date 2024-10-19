<template>
  <label class="ui-textarea" :class="inputClasses">
    <span v-if="label" class="ui-textarea__label"
      >{{ label }}
      <span v-if="required" class="ui-textarea__label-required">*</span>
    </span>
    <span class="ui-textarea__wrapper">
      <textarea
        v-model="inputModel"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder"
        class="ui-textarea__input"
      />
    </span>
    <span class="ui-textarea__helper-text">{{ helperText }}</span>
  </label>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";

export interface IProps {
  required?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  helperText?: string;
}

const props = defineProps<IProps>();
const inputModel = defineModel();

const inputClasses = computed(() => {
  return [];
});
</script>
<style scoped lang="scss">
@import "style/ui-textarea";
</style>
