<template>
  <VueSelect
    v-model="selected"
    :options="options"
    :placeholder="placeholder"
    class="ui-select"
  />
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { ref } from "vue";
import VueSelect from "vue3-select-component";

export interface IProps {
  options?: [];
  hasDefault?: boolean;
  placeholder?: string;
}

const props = defineProps<IProps>();
const selected = defineModel();
</script>
<style scoped lang="scss">
@import "style/ui-select.scss";
</style>
