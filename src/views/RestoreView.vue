<script setup lang="ts">
import AuthContent from "@/components/shared/AuthContent/AuthContent.vue";

import RestoreForm from "@/components/shared/forms/RestoreForm/RestoreForm.vue";
</script>
<template>
  <AuthContent>
    <template #image>
      <img src="@/assets/img/key-1.png" alt="" />
    </template>
    <template #form>
      <RestoreForm />
    </template>
  </AuthContent>
</template>
<style lang="scss">
</style>

