<script setup lang="ts">
import PageContent from "@/components/layout/PageContent/PageContent.vue";
import ProfileCard from "@/components/shared/Profile/ProfileCard/ProfileCard.vue";
import ProfileForm from "@/components/shared/forms/ProfileForm/ProfileForm.vue";
</script>

<template>
  <PageContent class="page" :tabs="['Profile', 'Staff']">
    <template #Profile-content>
      <div class="flex-col-16">
        <ProfileCard />
        <ProfileForm class="page__form" />
      </div>
    </template>
    <template #Staff-content> Таб Staff </template>
  </PageContent>
</template>

<style scoped lang="scss">
.page {
  &__form {
    @media (min-width: 768px) {
      width: 470px;
    }

    @media (min-width: 1440px) {
      width: 50%;
    }
  }
}
</style>
