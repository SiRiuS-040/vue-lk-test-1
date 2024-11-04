<template>
  <div
    data-test-id="scrollToTop"
    v-show="scrolled"
    class="back-top"
    @click.prevent="scrollToTop"
  >
    <Icon
      :icon="IconName.expand_less"
      class="button__icon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Icon from '@west/components/ui/Icon/Icon.vue'
import { IconName } from '@west/components/ui/Icon/types'

export interface IProps {
  scrolled: boolean
  target?: string
}

const props = withDefaults(defineProps<IProps>(), {
  scrolled: false,
  target: 'body'
})

const scrollToTop = () => {
  const targetElement = document.querySelector(props.target)

  if (targetElement) {
    targetElement.scrollTop = 0
  }
}

</script>
<style scoped lang="scss">
@use '@west/assets/scss/variables' as *;

.back-top {

  position: fixed;
  right: 12px;
  bottom: 16px;

  z-index: 80;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $newGrey200;
  opacity: 0.3;
  cursor: pointer;

  @include media-breakpoint-up (md) {
    right: 24px;
    bottom: 90px;
  }

  @include media-breakpoint-up (xl) {
    bottom: 60px;
  }
}
</style>
