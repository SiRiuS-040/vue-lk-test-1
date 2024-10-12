<script setup lang="ts">
import AuthContent from "@/components/layout/AuthContent/AuthContent.vue";
import LoginForm from "@/components/shared/forms/LoginForm/LoginForm.vue";
</script>
<template>
  <AuthContent>
    <template #image>
      <img src="@/assets/img/car-1.png" alt="" />
      <h2>Digitale Lösungen für den Fahrzeughandel</h2>
    </template>
    <template #form>
      <LoginForm />
    </template>
  </AuthContent>
</template>
<style lang="scss">
</style>

