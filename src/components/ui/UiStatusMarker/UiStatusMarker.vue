<template>
  <span v-if="text || adsText" :class="statusClasses" class="status-marker">
    <UiIcon
      v-if="theme === StatusTheme.BADGE"
      :icon="IconName.PATCH_CHECK_FILL"
      :size="IconSize.SIZE_16"
    />
    <span>{{ text }}</span>
    <span v-if="adsText"> {{ adsText }}</span>
  </span>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import {
  StatusCode,
  StatusTheme,
  STATUSES,
} from "@/components/ui/UiStatusMarker/types";

export interface IProps {
  theme?: StatusTheme;
  statusCode?: StatusCode;
  statusText?: string;
  statusColor?: string;
  adsText?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  theme: StatusTheme.DEFAULT,
  adsText: "",
  statusCode: StatusCode.EMPTY,
  statusText: "",
  statusColor: "",
});

const theme = computed(() => {
  return STATUSES[props.statusCode].theme
    ? STATUSES[props.statusCode].theme
    : props.theme;
});

const text = computed(() => {
  return props.statusText ? props.statusText : STATUSES[props.statusCode].text;
});

const color = computed(() => {
  return props.statusColor
    ? props.statusColor
    : STATUSES[props.statusCode].color;
});

const statusClasses = computed(() => {
  return [
    props.theme ? `status-marker--theme-${theme.value}` : "",
    color.value ? `status-marker--color-${color.value}` : "",
  ];
});
</script>

<style scoped lang="scss">
@import "style.scss";
</style>
