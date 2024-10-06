<template>
  <component :is="currentIcon" class="ui-icon" :class="iconClasses">
    <slot></slot>
  </component>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { UIICON, IconSize, IconName } from '@/components/ui/UiIcon/model/types'

export interface IProps {
  icon: IconName;
  size?: IconSize;
}

const props = withDefaults(defineProps<IProps>(), {
  size: IconSize.SIZE_24,
});

const iconClasses = computed(() => {
  return [
    props.size ? `ui-icon--size-${props.size}` : ""
  ];
});

const currentIcon = UIICON[props.icon]
</script>

<style scoped lang="scss">
@import 'style/ui-icon.scss'
</style>
