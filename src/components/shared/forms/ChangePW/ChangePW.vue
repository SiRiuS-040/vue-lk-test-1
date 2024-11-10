<script setup lang="ts">
import { ref, watch } from "vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import { useToast } from "vue-toastification";

const toast = useToast();
const oldPassword = ref();
const newPassword = ref();
const newPasswordRepeat = ref();
const changePasswordModel = defineModel<{ oldPw: string; newPw: string }>();
const isChangePwVisible = ref(false);

const changePwVisibility = () => {
  oldPassword.value = "";
  newPassword.value = "";
  newPasswordRepeat.value = "";
  changePasswordModel.value.newPw = "";
  isChangePwVisible.value = !isChangePwVisible.value;
};

const checkChangePw = () => {
  changePasswordModel.value.newPw = "";

  if (!oldPassword.value) {
    // console.log("не введен старый пароль");
    return;
  }

  if (oldPassword.value !== changePasswordModel.value.oldPw) {
    // console.log("старый пароль не верный");
    return;
  }

  if (!newPassword.value || newPassword.value !== newPasswordRepeat.value) {
    // console.log("пустой пароль или новые пароли не совпадают");
    return;
  }

  // console.log("смена пароля готова");
  toast.info("смена пароля готова");
  changePasswordModel.value.newPw = newPasswordRepeat.value;
};

watch(oldPassword, () => {
  checkChangePw();
});
watch(newPassword, () => {
  checkChangePw();
});
watch(newPasswordRepeat, () => {
  checkChangePw();
});
</script>
<template>
  <div class="change-password">
    <UiButton
      :theme="ButtonTheme.CLEAR"
      :size="ButtonSize.L"
      class="change-password__change-pw"
      @click="changePwVisibility"
    >
      {{ isChangePwVisible ? "Cancel" : "Change password" }}
    </UiButton>
    <div v-if="isChangePwVisible" class="change-password__wrapper">
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
        label="Repeat new pasword"
        placeholder="Repeat new pasword"
        type="password"
        autocomplete="new-password"
        required
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.change-password {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include media-breakpoint-up(md) {
    gap: 24px;
  }

  &__change-pw {
    color: var(--color-Secondary-Blue);

    &:hover {
      color: var(--color-Secondary-Blue-45);
    }
  }

  &__wrapper {
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
