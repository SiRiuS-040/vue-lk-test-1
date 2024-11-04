<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, computed, ref } from "vue";
import Pagination from "@/components/shared/Pagination/Pagination.vue";
import { IStaffItem } from "@/components/shared/Profile/StaffList/model/types.ts";

interface IProps {
  items?: IStaffItem[];
}

const emit = defineEmits(["changePage"]);
const props = withDefaults(defineProps<IProps>(), {});
const currentPage = ref(1);

const changePage = async (page: number) => {
  currentPage.value = page;
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
      :currentPage="currentPage"
      :itemsPerPage="12"
      :totalItems="items.length"
      :items="items"
      frontPagination
      @changePage="(page) => changePage(page)"
      class="page__pagination"
    />
  </div>
</template>

<style scoped lang="scss">
.staff-list {
  overflow: auto;
  border-radius: 10px;
  background-color: var(--color-Primary-Light-Gray);

  &__header {
    display: grid;
    grid-template-columns: 80px 230px 230px 230px 115px 80px;
    gap: 24px;
    padding: 18px 24px;
    color: var(--color-Text-Light-Grey);
    text-transform: uppercase;

    @include media-breakpoint-up(xl) {
      grid-template-columns: 80px 1fr 1fr 1fr 0.5fr 80px;
    }
  }

  &__list {
    overflow: hidden;
    width: max-content;
    border: 1px solid var(--color-Text-Line-Grey);
    border-radius: 0 0 10px 10px;

    @include media-breakpoint-up(xl) {
      width: auto;
    }
  }
}

.staff-list-item {
  display: grid;
  grid-template-columns: 80px 230px 230px 230px 115px 80px;
  gap: 24px;
  width: max-content;
  padding: 14px 24px;
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
