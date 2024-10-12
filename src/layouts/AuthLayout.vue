<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import UiSelect from "@/components/ui/UiSelect/UiSelect.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from "@/components/ui/UiIcon/model/types";
import { SelectTheme } from "@/components/ui/UiSelect/model/types";

const route = useRoute()
const langOptions = ["UK", "PT", "GER"];
const langModel = ref("PT");

const selectedLngIcon = computed(() => {
  return langModel.value ?? IconName[langModel.value];
});
</script>

<template>
  <div class="auth-layout" :key="route.path">
    <div class="auth-layout__wrapper">
      <div class="auth-layout__header">
        <span class="">Demo Test</span>
        <span class="auth-layout__langselect">
          <UiIcon :icon="IconName[selectedLngIcon]" :key="selectedLngIcon" />
          <UiSelect
            v-model="langModel"
            :options="langOptions"
          />
        </span>
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

  padding: 16px 16px;
  width: 100%;

  opacity: 1;
  animation-name: fade-out;
  transition: opacity 0.1s;
  animation-duration: 0.3s;

  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 20px 20px;
  }

  @media (min-width: 1440px) {
    padding: 30px 40px;
  }

  &__wrapper {
    padding: 16px 16px;
    height: 100%;

    border-radius: 20px;
    background: linear-gradient(
      213.42deg,
      rgb(217, 14, 50) 18.722%,
      rgb(29, 71, 120) 99.217%
    );

    color: var(--color-Primary-White);
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      padding: 20px 20px;
    }

    @media (min-width: 1440px) {
      padding: 30px 40px;
      width: 1440px;
      height: 1024px;
    }

    &::before {
      content: "";
      position: absolute;
      top: auto;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 630px;
      background-color: var(--color-Primary-White);
      transition: all 0.5s;

      @media (min-width: 768px) {
        top: 0;
        bottom: auto;
        width: 400px;
        height: 100%;
      }

      @media (min-width: 1440px) {
        width: 1024px;
        right: 0;
        aspect-ratio: 1;
        border-radius: 50%;
        transform: translateX(35.2%) scale(1.172);
      }
    }
  }

  &__header {
    padding: 30px 40px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 10;

    font-size: 24px;
    line-height: 24px;
  }

  &__langselect {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  &__content {
    position: relative;
    max-height: 80%;
    width: -webkit-fill-available;
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