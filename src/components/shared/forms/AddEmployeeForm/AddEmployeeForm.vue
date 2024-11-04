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

const router = useRouter();
const userName = ref();
const email = ref();
const phone = ref();
const credits = ref();
const tokens = ref();
</script>
<template>
  <div class="add-employee-form">
    <div class="add-employee-form__form">
      <UiInput
        v-model="userName"
        required
        label="Username"
        placeholder="Username"
      />
      <UiInput
        v-model="email"
        required
        label="Email address"
        placeholder="Email address"
      >
        <template #helperText>
          <span class="add-employee-form__error">
            Attention! A new password will be sent to the above email!</span
          >
        </template>
      </UiInput>
      <UiInput
        v-model="phone"
        label="Contact phone"
        placeholder="+7999 999 99 99"
      />
      <UiInput v-model="credits" label="Credit" placeholder="0" />
      <UiInput v-model="tokens" label="Aviailable tokens" placeholder="0" />
      <UiButton :size="ButtonSize.L"> Add employee </UiButton>
    </div>
  </div>
</template>
<style lang="scss">
.add-employee-form {
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

    @include media-breakpoint-up(md) {
      gap: 24px;
    }
  }
}
</style>
