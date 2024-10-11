<script setup lang="ts">
</script>
<template>
  <div>
    <div class="flex-16">
      <router-link to="/auth-login">Login</router-link>
      <router-link to="/auth-restore">Restore</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/components">Components</router-link>
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
</style>
