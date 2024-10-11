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

const router = useRouter();
const loginEmail = ref();
const loginPassword = ref();
const pwInputType = ref("password");

const changePasswordVisibility = () => {
  pwInputType.value === "password"
    ? (pwInputType.value = "text")
    : (pwInputType.value = "password");
};

const checkLogin = () => {
  if (loginEmail.value === "111" && loginPassword.value === "111") {
    console.log("Данные верные - вход");

    router.push("/");
  }
};
</script>
<template>
  <div class="login-form">
    <h1>Demo Dashboard</h1>
    <h3>Hi there! Nice to see you again.</h3>
    <div class="login-form__form">
      <UiInput
        v-model="loginEmail"
        label="Email address"
        placeholder="name@domian.com"
      />
      <UiInput
        v-model="loginPassword"
        label="Password"
        placeholder="password"
        :type="pwInputType"
        autocomplete="new-password"
      >
        <template #icon>
          <UiIcon
            :icon="IconName.EYE"
            @click.prevent="changePasswordVisibility"
          />
        </template>
      </UiInput>
      <router-link class="login-form__forget-password" to="/auth-restore"
        >Forgot Password?</router-link
      >
      <div class="login-form__controls">
        <UiButton :iconEnd="IconName.LOGIN" @click.prevent="checkLogin">
          Sign in
        </UiButton>
        <UiButton :theme="ButtonTheme.OUTLINE"> Contact support </UiButton>
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
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__forget-password {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  &__controls {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>

