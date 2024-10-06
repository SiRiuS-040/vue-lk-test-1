<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Logo from "@/assets/logo.svg";
</script>

<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/components">Components</router-link>
    </div>
  <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
