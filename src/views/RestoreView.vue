<script setup lang="ts">
import AuthContent from "@/components/layout/AuthContent/AuthContent.vue";
import RestoreForm from "@/components/shared/forms/RestoreForm/RestoreForm.vue";
</script>
<template>
  <AuthContent class="restore-view">
    <template #image>
      <img src="@/assets/img/key-1.png" alt="" class="restore-view__img" />
    </template>
    <template #form>
      <RestoreForm />
    </template>
  </AuthContent>
</template>
<style scoped lang="scss">
.restore-view {
  &__img {
    width: 100%;

    @include media-breakpoint-up(xl) {
      width: 488px;
      max-width: none;
    }
  }
}
</style>
