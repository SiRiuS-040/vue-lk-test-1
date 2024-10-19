<script setup lang="ts">
import PageContent from "@/components/layout/PageContent/PageContent.vue";
import ProfileCard from "@/components/shared/Profile/ProfileCard/ProfileCard.vue";
</script>

<template>
  <PageContent class="page" :tabs="['Profile', 'Staff']">
    <template #Profile-content>
      <ProfileCard> </ProfileCard>
    </template>
    <template #Staff-content> Таб Staff </template>
  </PageContent>
</template>

<style scoped lang="scss">
</style>
