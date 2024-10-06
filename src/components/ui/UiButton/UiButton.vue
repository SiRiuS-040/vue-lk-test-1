<template>
  <button class="ui-button" :class="buttonClasses">
    <UiIcon v-if="icon" :icon="icon" class="ui-button__icon"/>
    <slot></slot>
    <UiIcon v-if="iconEnd" :icon="iconEnd" class="ui-button__icon ui-button__icon--end"/>
  </button>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from '@/components/ui/UiIcon/model/types'

export interface IProps {
  theme?: string;
  size?: string;
  format?: string;
  disabled?: boolean;
  icon?: IconName;
  iconEnd?: IconName;
}

const props = withDefaults(defineProps<IProps>(), {
  theme: "primary",
  size: "m",
  disabled: false,
});

const buttonClasses = computed(() => {
  return [
    props.theme ? `ui-button--theme-${props.theme}` : "",
    props.size ? `ui-button--size-${props.size}` : "",
    props.format ? `ui-button--format-${props.format}` : "",
    props.disabled ? `disabled` : "",
    props.icon || props.iconEnd ? `ui-button--has-icon` : "",
  ];
});
</script>

<style scoped lang="scss">
@import 'style/ui-button.scss'
</style>
