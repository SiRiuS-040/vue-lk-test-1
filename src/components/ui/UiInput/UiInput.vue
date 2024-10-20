<script setup lang="ts">
import { computed, ref } from "vue";
import { IconName } from "@/components/ui/UiIcon/model/types";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";

export interface IProps {
  autocomplete?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  icon?: IconName;
  disabled?: boolean;
  helperText?: string;
  size?: string;
  required?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  type: "text",
  autocomplete: "off",
  size: "m",
});

const inputModel = defineModel();
const initialInputType = props.type;

const inputClasses = computed(() => {
  return [props.size ? `ui-input--size-${props.size}` : ""];
});

const changedType = ref(props.type);
const changePasswordVisibility = () => {
  changedType.value === "password"
    ? (changedType.value = "text")
    : (changedType.value = "password");
};
</script>

<template>
  <label class="ui-input" :class="inputClasses">
    <span v-if="label" class="ui-input__label"
      >{{ label }}
      <span v-if="required" class="ui-input__label-required">*</span>
    </span>
    <span class="ui-input__wrapper">
      <input
        v-model="inputModel"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="changedType"
        :autocomplete="autocomplete"
        :required="required"
        class="ui-input__input"
      />
      <UiIcon v-if="icon" class="ui-input__icon" :icon="icon" />
      <span class="ui-input__icon-slot">
        <slot name="icon"></slot>
        <UiIcon
          v-if="initialInputType === 'password'"
          :icon="IconName.EYE"
          @click.prevent="changePasswordVisibility"
        />
      </span>
    </span>
    <span v-if="helperText" class="ui-input__helper-text">
      {{ helperText }}
    </span>
    <slot name="helperText" />
  </label>
</template>

<style scoped lang="scss">
@import "style/ui-input";
</style>
