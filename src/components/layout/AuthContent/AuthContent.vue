<script setup lang="ts"></script>

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

<style scoped lang="scss">
.auth-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  align-items: center;
  justify-content: space-between;

  width: -webkit-fill-available;
  height: 80%;

  @include media-breakpoint-up(md) {
    grid-template-columns: 1fr 350px;
    gap: 60px;
  }

  @include media-breakpoint-up(xl) {
    grid-template-columns: min-content auto;
    gap: 160px;
    height: 770px;
    margin-right: 115px;
    margin-left: 40px;
  }

  &__image-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: var(--color-Text-White);

    @include media-breakpoint-up(md) {
      gap: 24px;
    }
  }

  &__form-wrapper {
    color: var(--color-Text-Black);

    @include media-breakpoint-up(xl) {
      width: 384px;
    }
  }
}
</style>
