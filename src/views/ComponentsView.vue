<script setup lang="ts">
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import UiIcon from "@/components/ui/UiIcon/UiIcon.vue";
import { IconSize, IconName } from '@/components/ui/UiIcon/model/types'

</script>

<template>
  <main class="app-main">
    <div>Главная страница</div>
    <div class="app-main__content">
      <div>
        <UiButton> Default </UiButton>
      </div>
      <div>
        <UiButton>
          <UiIcon :icon="IconName.PLUS" />
            Default (m)
        </UiButton>
      </div>
      <div>
        <UiButton :icon="IconName.LOGIN" :iconEnd="IconName.EYE"> with props icon </UiButton>
      </div>
      <div>
        <UiButton :icon="IconName.LOGIN" :iconEnd="IconName.EYE" size="l"> with props icon - (l) </UiButton>
      </div>
      <div>
        <UiButton theme="outline"> Default  (m) </UiButton>
      </div>
      <div>
        <UiButton theme="outline" :icon="IconName.LOGIN" :iconEnd="IconName.LOGIN"> with props icon </UiButton>
      </div>
      <div>
        <UiButton theme="outline" :icon="IconName.LOGIN" :iconEnd="IconName.EYE" size="l"> with props icon - (l) </UiButton>
      </div>
      <div>
        <UiButton theme="plain"> Default  (m) </UiButton>
      </div>
      <div>
        <UiButton theme="plain" :icon="IconName.LOGIN" :iconEnd="IconName.LOGIN"> with props icon </UiButton>
      </div>
      <div>
        <UiButton theme="plain" :icon="IconName.LOGIN" :iconEnd="IconName.EYE" size="l"> with props icon - (l) </UiButton>
      </div>
      <div>
        <UiButton size="s" disabled>
           Size S
        </UiButton>
      </div>
      <div>
        <UiButton format="clear-square">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton theme="outline" format="clear-square">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton theme="plain" format="clear-square">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton format="clear-rounded">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton theme="outline" format="clear-rounded">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
        <UiButton theme="plain" format="clear-rounded">
          <UiIcon :icon="IconName.PLUS" />
        </UiButton>
      </div>
      <div>
        <UiIcon :icon="IconName.ARROW_LEFT" />
        <UiIcon :icon="IconName.ARROW_RIGHT" />
        <UiIcon :icon="IconName.BRIEFCASE" />
        <UiIcon :icon="IconName.CAMERA" />
        <UiIcon :icon="IconName.CHECK" />
        <UiIcon :icon="IconName.CHART" />
        <UiIcon :icon="IconName.CHEVRON_DOWN" />
        <UiIcon :icon="IconName.CHEVRON_LEFT" />
        <UiIcon :icon="IconName.CHEVRON_RIGHT" />
        <UiIcon :icon="IconName.CLOSE" />
        <UiIcon :icon="IconName.COPYRIGHT" />
        <UiIcon :icon="IconName.CROP" />
        <UiIcon :icon="IconName.DOWNLOAD" />
        <UiIcon :icon="IconName.EDIT" />
        <UiIcon :icon="IconName.EYE" />
        <UiIcon :icon="IconName.GLOBE" />
        <UiIcon :icon="IconName.IMAGE_2" />
        <UiIcon :icon="IconName.IMAGE" />
        <UiIcon :icon="IconName.INFO" />
        <UiIcon :icon="IconName.LOCATION" />
        <UiIcon :icon="IconName.LOCK" />
        <UiIcon :icon="IconName.LOGIN" />
        <UiIcon :icon="IconName.MORE_HORIZONTAL" />
        <UiIcon :icon="IconName.MORE_VERTICAL" />
        <UiIcon :icon="IconName.MOVE" />
        <UiIcon :icon="IconName.PATCH_CHECK_FILL" />
        <UiIcon :icon="IconName.PLATE_BLUR" />
        <UiIcon :icon="IconName.PLUS" />
        <UiIcon :icon="IconName.REFLECTIVE_2" />
        <UiIcon :icon="IconName.RIM_1" />
        <UiIcon :icon="IconName.RIM" />
        <UiIcon :icon="IconName.SCISSORS" />
        <UiIcon :icon="IconName.SETTINGS" />
        <UiIcon :icon="IconName.SLASH" />
        <UiIcon :icon="IconName.SLIDERS" />
        <UiIcon :icon="IconName.SUN" />
        <UiIcon :icon="IconName.TRASH" />
        <UiIcon :icon="IconName.UNLOCK" />
        <UiIcon :icon="IconName.USER_MINI" />
        <UiIcon :icon="IconName.USER" />
        <UiIcon :icon="IconName.ZOOM" />

        <UiIcon :icon="IconName.GERMANY" />
        <UiIcon :icon="IconName.PORTUGAL" />
        <UiIcon :icon="IconName.UK" />
        <UiIcon :icon="IconName.USA" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  &__content {
    display: flex;
    flex-direction: column;;
    gap: 16px;
  }
}

</style>
