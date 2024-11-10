<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
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
import { Employee } from "@/repository/employee/types";
import type { IChangePw } from "@/repository/employee/types";
import { staffList } from "@/repository/employee/mock";
import { useAuthStore } from "@/stores/auth";

const toast = useToast();
const router = useRouter();
const authStore = useAuthStore();

const userName = ref(authStore.userName);
const email = ref(authStore.email);
const password = ref(authStore.userPassword);
const avatar = ref(authStore.avatar);
const contactPhone = ref(authStore.phone);

const changePw = ref<IChangePw>({
  oldPw: authStore.userPassword,
  newPw: "",
});

const saveProfileChanges = () => {
  // console.log("сохранение новых данных пользовалетя");
  if (!userName.value && !email.value) {
    toast.warning("Please input required fields!");
    return;
  }

  const userDbData = staffList.find((item) => item.email === authStore.email);

  if (userDbData) {
    userDbData.userName = userName.value;
    userDbData.email = email.value;
    userDbData.avatar = avatar.value;
    userDbData.password = changePw.value.newPw
      ? changePw.value.newPw
      : password.value;
    userDbData.phone = contactPhone.value;

    toast.success("Changes saved !");
  }
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
      <UiInput v-model="avatar" label="Avatar path" placeholder="avatar" />
      <UiInput
        v-model="password"
        label="Password"
        placeholder="password"
        type="password"
        autocomplete="new-password"
        disabled
      />
      <ChangePW v-model="changePw" />
      <UiInput
        v-model="contactPhone"
        label="Contact phone"
        placeholder="+79991234567"
      />
      <UiButton :size="ButtonSize.L" @click.prevent="saveProfileChanges">
        Save changes
      </UiButton>
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
