<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";

const loginEmail = ref();

const restorePassword = () => {
  console.log("restorePassword");
};
</script>
<template>
  <div class="restore-form">
    <h1>Forgot Password?</h1>
    <h3>Do not worry! Just enter your E-mail</h3>
    <div class="restore-form__form">
      <UiInput
        v-model="loginEmail"
        label="Email address"
        placeholder="name@domian.com"
      />
      <div class="restore-form__controls">
        <UiButton @click.prevent="restorePassword" :size="ButtonSize.L">
          Restore Password
        </UiButton>
      </div>
      <div class="restore-form__to-login">
        I remembered the password!
        <router-link to="/auth-login">SIGN IN </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.restore-form {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  &__form {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
      gap: 24px;
    }
  }

  &__controls {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
  }

  &__to-login {
    margin-top: 16px;
    text-align: center;
  }
}
</style>
