<script setup lang="ts">
import { defineProps, computed } from "vue";
import { ref } from "vue";
import VueSelect from "vue3-select-component";
import Multiselect from "vue-multiselect";
import { SelectTheme } from "@/components/ui/UiSelect/model/types";

export interface IProps {
  options?: [];
  hasDefault?: boolean;
  placeholder?: string;
  theme?: SelectTheme;
}

const props = defineProps<IProps>();
const selected = defineModel();
const classes = computed(() => {
  return [props.theme ? `ui-select--theme-${props.theme}` : ""];
});
</script>
<template>
  <Multiselect
    v-model="selected"
    :options="options"
    class="ui-select"
    :show-labels="false"
    :close-on-select="true"
    :searchable="false"
    :allow-empty="false"
    deselect-label="Can't remove this value"
    selectLabel=""
    :class="classes"
  />
</template>
<style lang="scss">
@import "style/ui-select.scss";
</style>
