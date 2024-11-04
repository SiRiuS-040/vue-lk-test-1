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

const router = useRouter();
const authStore = useAuthStore();

const userName = ref(authStore.userName);
const email = ref(authStore.userLogin);
const password = ref(authStore.userPassword);
const contactPhone = ref();

const oldPassword = ref();
const newPassword = ref();
const newPasswordRepeat = ref();
const isChangePwVisible = ref(false);
const changePwVisibility = () => {
  isChangePwVisible.value = !isChangePwVisible.value;
};
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
      />
      <UiButton
        :theme="ButtonTheme.CLEAR"
        :size="ButtonSize.L"
        class="profile-form__change-pw"
        @click="changePwVisibility"
      >
        Change password
      </UiButton>
      <div v-if="isChangePwVisible" class="profile-form__change-pw-wrapper">
        <UiInput
          v-model="oldPassword"
          label="Old pasword"
          placeholder="password"
          type="password"
          autocomplete="new-password"
          required
        />
        <UiInput
          v-model="newPassword"
          label="New pasword"
          placeholder="New pasword"
          type="password"
          autocomplete="new-password"
          required
        />
        <UiInput
          v-model="newPasswordRepeat"
          label="Replay new pasword"
          placeholder="Replay new pasword"
          type="password"
          autocomplete="new-password"
          required
        />
      </div>
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

  &__change-pw {
    color: var(--color-Secondary-Blue);

    &:hover {
      color: var(--color-Secondary-Blue-45);
    }
  }

  &__change-pw-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 10px;
    background-color: var(--color-Primary-Light-Gray);

    @include media-breakpoint-up(md) {
      gap: 24px;
    }
  }
}
</style>
