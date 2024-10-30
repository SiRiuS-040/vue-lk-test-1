<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, computed } from "vue";

interface IProps {}

const emit = defineEmits(["changePage"]);

const props = withDefaults(defineProps<IProps>(), {});
</script>

<template>
  <div class="staff-list">
    <div class="staff-list__header"></div>
  </div>
</template>

<style scoped lang="scss">
.staff-list {
  height: 600px;
  border-radius: 10px;
  background-color: var(--color-Primary-Light-Gray);
}
</style>
