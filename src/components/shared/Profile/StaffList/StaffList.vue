<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, computed, ref } from "vue";
import Pagination from "@/components/shared/Pagination/Pagination.vue";

import { staffList } from "@/components/shared/Profile/StaffList/model/mock.ts";
import { IStaffItem } from "@/components/shared/Profile/StaffList/model/types.ts";

interface IProps {
  items?: IStaffItem[];
}

const emit = defineEmits(["changePage"]);
const props = withDefaults(defineProps<IProps>(), {});

const changePage = async (page: number) => {
  console.log("смена страницы пагинации");
};

const visibleList = ref([]);
</script>

<template>
  <div>
    <div class="staff-list">
      <div class="staff-list__header">
        <span> Id </span>
        <span> username </span>
        <span> e-mail </span>
        <span> phone </span>
        <span> credits </span>
        <span> status </span>
      </div>
      <ul class="staff-list__list">
        <li
          v-for="(item, index) in visibleList"
          :key="index"
          class="staff-list-item"
        >
          <span class="text-4"> {{ item.id }} </span>
          <span class="staff-list-item__name text-4">
            {{ item.userName }}
          </span>
          <span class="text-4"> {{ item.email }} </span>
          <span class="text-4"> {{ item.phone }} </span>
          <span class="text-4"> {{ item.credits }} </span>
          <span> {{ item.userStatus }} </span>
        </li>
      </ul>
    </div>
    <Pagination
      v-model="visibleList"
      :currentPage="1"
      :itemsPerPage="12"
      :totalItems="staffList.length"
      :items="staffList"
      frontPagination
      @changePage="(page) => changePage(page)"
      class="page__pagination"
    />
  </div>
</template>

<style scoped lang="scss">
.staff-list {
  border-radius: 10px;
  background-color: var(--color-Primary-Light-Gray);
  overflow: auto;

  &__header {
    padding: 18px 24px;
    text-transform: uppercase;
    color: var(--color-Text-Light-Grey);

    display: grid;
    grid-template-columns: 80px 230px 230px 230px 115px 80px;
    gap: 24px;

    @include media-breakpoint-up(xl) {
      grid-template-columns: 80px 1fr 1fr 1fr 0.5fr 80px;
    }
  }

  &__list {
    border-radius: 0 0 10px 10px;
    border: 1px solid var(--color-Text-Line-Grey);
    width: max-content;
    overflow: hidden;

    @include media-breakpoint-up(xl) {
      width: auto;
    }
  }
}

.staff-list-item {
  padding: 14px 24px;
  display: grid;
  grid-template-columns: 80px 230px 230px 230px 115px 80px;
  gap: 24px;
  width: max-content;
  background-color: var(--color-Primary-White);

  @include media-breakpoint-up(xl) {
    grid-template-columns: 80px 1fr 1fr 1fr 0.5fr 80px;
    width: auto;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-Text-Line-Grey);
  }

  &__name {
    color: var(--color-Secondary-Blue);
  }
}
</style>
