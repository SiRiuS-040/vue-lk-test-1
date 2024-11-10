<script setup lang="ts">
import { computed, ref, unref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import AppLayout from "@/layouts/AppLayout.vue";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const isAuthorized = computed(() => {
  console.log(authStore.isAuthorized);

  return unref(authStore.isAuthorized);
});

// в логику mw

if (authStore.isAuthorized) {
  router.push("/");
} else {
  router.push("/auth-login");
}

watch(
  () => authStore.isAuthorized,
  () => {
    if (authStore.isAuthorized) {
      router.push("/");
    } else {
      router.push("/auth-login");
    }
  }
);
</script>
<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
<style scoped lang="scss"></style>
