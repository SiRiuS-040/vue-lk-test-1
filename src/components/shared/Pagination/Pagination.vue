<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, computed } from "vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";

interface pagLink {
  url: null | string;
  label: string;
  active: boolean;
}

interface IProps {
  itemsPerPage?: number;
  currentPage?: number;
  totalItems?: number;
  links?: pagLink[];
}

const emit = defineEmits(["changePage"]);

const props = withDefaults(defineProps<IProps>(), {
  currentPage: 1,
});

const totalPages = computed(() => {
  const pagesCount = Math.ceil(props.totalItems / props.itemsPerPage);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return pages;
});

const changeToPrev = () => {
  console.log(props.currentPage);

  if (props.currentPage <= 1) {
    return;
  }

  emit("changePage", props.currentPage - 1);
};

const changeToNext = () => {
  console.log(props.currentPage);

  if (
    props.currentPage >= totalPages.value.length[totalPages.value.length - 1]
  ) {
    return;
  }

  emit("changePage", props.currentPage + 1);
};

const changePage = (page: number) => {
  emit("changePage", page);
};
</script>

<template>
  <div class="pagination">
    <span>
      Showing
      {{ itemsPerPage < totalItems ? itemsPerPage : totalItems }}
      out of {{ totalItems }}
    </span>
    <div class="pagination__pagination">
      <UiButton :disabled="currentPage === 1" @click.prevent="changeToPrev">
        prev
      </UiButton>
      <UiButton
        v-for="(page, index) in totalPages"
        :key="index"
        :size="ButtonSize.S"
        :disabled="page === currentPage"
        :format="ButtonFormat.SQUARE"
        @click="changePage(page)"
      >
        {{ page }}
      </UiButton>
      <UiButton
        :disabled="currentPage === totalPages[totalPages.length - 1]"
        @click.prevent="changeToNext"
      >
        next
      </UiButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 768px) {
      gap: 16px;
      align-items: flex-start;
      justify-content: flex-end;
    }
  }
}
</style>
