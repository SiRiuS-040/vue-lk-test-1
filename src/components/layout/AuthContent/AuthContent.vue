<script setup lang="ts">
</script>

<template>
  <div class="auth-content">
    <div class="auth-content__image-wrapper">
      <slot name="image" />
    </div>
    <div class="auth-content__form-wrapper">
      <slot name="form" />
    </div>
  </div>
</template>

<style scope lang="scss">
.auth-content {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  width: -webkit-fill-available;
  height: 80%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 350px;
    gap: 60px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: min-content auto;
    gap: 160px;
    height: 770px;
    margin-left: 40px;
    margin-right: 115px;
  }

  &__image-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--color-Text-White);

    & img {
      width: 100%;

      @media (min-width: 1440px) {
        max-width: none;
        width: 577px;
      }
    }

    & .restore-view__img {
      @media (min-width: 1440px) {
        max-width: none;
        width: 488px;
      }
    }
  }

  &__form-wrapper {
    color: var(--color-Text-Black);

    @media (min-width: 1440px) {
      width: 384px;
    }
  }
}
</style>