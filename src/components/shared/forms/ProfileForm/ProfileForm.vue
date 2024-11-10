<script setup lang="ts">
import { ref } from "vue";
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
import ChangePW from "@/components/shared/forms/ChangePW/ChangePW.vue";
import { useAuthStore } from "@/stores/auth.ts";

const router = useRouter();
const authStore = useAuthStore();

const userName = ref(authStore.userName);
const email = ref(authStore.userLogin);
const password = ref(authStore.userPassword);
const contactPhone = ref();
</script>
<template>
  <div class="profile-form">
    <div class="profile-form__form">
      <UiInput
        v-model="userName"
        label="Username"
        placeholder="Name"
        required
      />
      <UiInput
        v-model="email"
        label="Email address"
        placeholder="name@domian.com"
        helperText="This is your login"
        required
      />
      <UiInput
        v-model="password"
        label="Password"
        placeholder="password"
        type="password"
        autocomplete="new-password"
        disabled
      />
      <ChangePW />
      <UiInput
        v-model="contactPhone"
        label="Contact phone"
        placeholder="+79991234567"
      />
      <UiButton :size="ButtonSize.L"> Save changes </UiButton>
    </div>
  </div>
</template>
<style scoped lang="scss">
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include media-breakpoint-up(md) {
      gap: 24px;
    }
  }
}
</style>
