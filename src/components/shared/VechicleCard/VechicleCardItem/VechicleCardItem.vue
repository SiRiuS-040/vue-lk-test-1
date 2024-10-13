<script setup lang="ts">
import { defineProps, computed } from "vue";
import type { IVechicle, IVechicles } from "@/repository/vechicles/models";

interface IProps {
  vechicle?: IVechicle;
}

defineProps<IProps>();
</script>
<template>
  <div class="vechicle-card-item">
    <div class="vechicle-card-item__img-wrapper">
      <img :src="vechicle.placeholder" alt="" class="vechicle-card-item__img" />
    </div>
    <div class="vechicle-card-item__info">
      <h3 class="vechicle-card-item__vechicle-name">
        {{
          vechicle["vehicle_name"] ? vechicle["vehicle_name"] : "Without name"
        }}
      </h3>
      <p class="vechicle-card-item__vin">
        <span> {{ vechicle["vin_postfix"] }} </span>
        <span>{{ vechicle.vin }}</span>
      </p>
      <hr />
      <div>
        <span v-if="vechicle.hp" class="vechicle-card-item__ads"
          >{{ vechicle.hp }}
        </span>
        <span v-if="vechicle['defect_state']" class="vechicle-card-item__ads">
          {{ vechicle["defect_state"] }}
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.vechicle-card-item {
  border-radius: 10px;
  min-height: 335px;
  background-color: var(--color-Primary-Light-Gray);
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }

  & * {
    // border: 1px solid red;
  }

  &__img-wrapper {
    padding: 16px;

    @media (min-width: 768px) {
      padding: 24px;
    }
  }

  &__img {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 4/3;
  }

  &__vechicle-name {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 22px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__ads {
    border-radius: 6px;
    padding: 4px 12px;
    background-color: rgb(237, 237, 237);
  }
}
</style>

