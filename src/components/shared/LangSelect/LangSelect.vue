<template>
  <span class="lang-select">
    <UiIcon :icon="IconName[selectedLngIcon]" :key="selectedLngIcon" />
    <UiSelect v-model="langModel" :options="langOptions" />
  </span>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiSelect from "@/components/ui/UiSelect/UiSelect.vue";

const langOptions = ["UK", "PT", "GER"];
const langModel = ref("PT");
const selectedLngIcon = computed(() => {
  return langModel.value ?? IconName[langModel.value];
});
</script>

<style scoped lang="scss">
.lang-select {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
