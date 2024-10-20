<script setup lang="ts">
import { computed, ref, unref, watch } from "vue";
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
import { useAuthStore } from "@/stores/auth.ts";
import { log } from "console";

const authStore = useAuthStore();
const router = useRouter();
const login = ref("222");
const password = ref("222");
const authErrorMessage = ref("");

const fetchAuth = async (data) => {
  authErrorMessage.value = "";
  authStore.authirize(data).catch(() => {
    console.log("ошибка");

    authErrorMessage.value = "Incorrect Email address or Password";
  });
};
</script>
<template>
  <div class="login-form">
    <h1>Demo Dashboard</h1>
    <h3>Hi there! Nice to see you again.</h3>
    <div class="login-form__form">
      <UiInput
        v-model="login"
        label="Email address"
        placeholder="name@domian.com"
      />
      <UiInput
        v-model="password"
        label="Password"
        placeholder="password"
        type="password"
        autocomplete="new-password"
      >
        <template #helperText>
          <span class="login-form__error"> {{ authErrorMessage }}</span>
        </template>
      </UiInput>
      <router-link class="login-form__forget-password" to="/auth-restore"
        >Forgot Password?</router-link
      >
      <div class="login-form__controls">
        <UiButton
          :size="ButtonSize.L"
          :iconEnd="IconName.LOGIN"
          @click.prevent="fetchAuth({ login, password })"
        >
          Sign in
        </UiButton>
        <UiButton :theme="ButtonTheme.OUTLINE" :size="ButtonSize.L">
          Contact support
        </UiButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;

    @media (min-width: 768px) {
      gap: 24px;
    }
  }

  &__error {
    color: var(--color-Secondary-Light-Red);
  }

  &__forget-password {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  &__controls {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
      gap: 24px;
    }
  }
}
</style>
