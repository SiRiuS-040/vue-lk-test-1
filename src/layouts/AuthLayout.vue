<script setup lang="ts">
import { useRoute } from "vue-router";
import LangSelect from "@/components/shared/LangSelect/LangSelect.vue";

const route = useRoute();
</script>

<template>
  <div class="auth-layout" :key="route.path">
    <div class="auth-layout__wrapper">
      <div class="auth-layout__header">
        <span class="">Demo Test</span>
        <LangSelect class="auth-layout__langselect" />
      </div>
      <div class="auth-layout__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  min-height: 100vh;

  padding: 4px 4px;

  opacity: 1;
  transition: opacity 0.1s;
  animation-name: fade-out;
  animation-duration: 0.3s;

  @media (min-width: 1440px) {
    padding: 0;
  }

  &__wrapper {
    position: relative;

    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    width: -webkit-fill-available;
    height: 100%;
    padding: 16px 16px;

    border-radius: 20px;
    background: linear-gradient(
      213.42deg,
      rgb(217, 14, 50) 18.722%,
      rgb(29, 71, 120) 99.217%
    );

    color: var(--color-Primary-White);

    @media (min-width: 768px) {
      padding: 20px 20px;
    }

    @media (min-width: 1440px) {
      flex-grow: 0;
      width: 1440px;
      height: 1024px;
      padding: 30px 40px;
    }

    &::before {
      content: "";
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 550px;
      background-color: var(--color-Primary-White);
      transition: all 0.5s;

      @media (min-width: 768px) {
        top: 0;
        bottom: auto;
        width: 400px;
        height: 100%;
      }

      @media (min-width: 1440px) {
        right: 0;
        width: 1024px;
        border-radius: 50%;
        transform: translateX(35.2%) scale(1.172);
        aspect-ratio: 1;
      }
    }
  }

  &__header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 16px;

    font-size: 18px;
    line-height: 18px;

    @media (min-width: 768px) {
      align-items: flex-start;
      padding: 30px 40px;

      font-size: 24px;
      line-height: 24px;
    }
  }

  &__langselect {
    z-index: 10;
  }

  &__content {
    position: relative;
    width: -webkit-fill-available;
    max-height: 80%;
    margin-top: 100px;
    margin-bottom: 50px;

    @media (min-width: 1440px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}

@keyframes fade-out {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
