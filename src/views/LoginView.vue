<script setup lang="ts">
import AuthContent from "@/components/layout/AuthContent/AuthContent.vue";
import LoginForm from "@/components/shared/forms/LoginForm/LoginForm.vue";
</script>
<template>
  <AuthContent class="login-view">
    <template #image>
      <img src="@/assets/img/car-1.png" alt="" class="login-view__img" />
      <h2>Digitale Lösungen für den Fahrzeughandel</h2>
    </template>
    <template #form>
      <LoginForm />
    </template>
  </AuthContent>
</template>
<style lang="scss">
.login-view {
  &__img {
    width: 100%;

    @media (min-width: 1440px) {
      width: 577px;
      max-width: none;
    }
  }
}
</style>

