<script setup lang="ts">
import {
  defineEmits,
  defineProps,
  withDefaults,
  computed,
  ref,
  watch,
} from "vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {
  ButtonTheme,
  ButtonFormat,
  ButtonSize,
} from "@/components/ui/UiButton/model/types";
import { log } from "console";

interface pagLink {
  url: null | string;
  label: string;
  active: boolean;
}

interface IProps {
  itemsPerPage?: number;
  currentPage?: number;
  totalItems?: number;
  maxVisibleLinks?: number;

  links?: pagLink[];
  frontPagination?: boolean;
  items?: any[];
}

const visibleItems = defineModel<any[]>();
const emit = defineEmits(["changePage", "update:modelValue"]);

const props = withDefaults(defineProps<IProps>(), {
  currentPage: 1,
  frontPagination: false,
  maxVisibleLinks: 0,
});

const totalPages = computed(() => {
  const pagesCount = Math.ceil(props.totalItems / props.itemsPerPage);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return pages;
});

const visiblePages = computed(() => {
  if (props.maxVisibleLinks > 0) {
    const start =
      props.currentPage - Math.ceil(props.maxVisibleLinks / 2) > 0
        ? props.currentPage - Math.ceil(props.maxVisibleLinks / 2)
        : 0;
    const end =
      props.currentPage + Math.ceil(props.maxVisibleLinks / 2) <=
      totalPages.value.length
        ? props.currentPage + Math.ceil(props.maxVisibleLinks / 2) - 1
        : undefined;

    return totalPages.value.slice(start, end);
  }

  return totalPages.value;
});

const changeToPrev = () => {
  if (props.currentPage <= 1) {
    return;
  }

  emit("changePage", props.currentPage - 1);
};

const changeToNext = () => {
  if (
    props.currentPage >= totalPages.value.length[totalPages.value.length - 1]
  ) {
    return;
  }

  emit("changePage", props.currentPage + 1);
};

const frontCurrentPage = ref(props.currentPage);

const filterdeItems = computed(() => {
  return props.items.slice(
    props.currentPage > 1
      ? (frontCurrentPage.value - 1) * props.itemsPerPage
      : 0,
    frontCurrentPage.value * props.itemsPerPage
  );
});

const changePage = (page: number) => {
  emit("changePage", page);

  if (props.frontPagination) {
    frontCurrentPage.value = page;
  }
};

if (props.frontPagination) {
  visibleItems.value = filterdeItems.value;
}

watch(frontCurrentPage, () => {
  visibleItems.value = filterdeItems.value;
});
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
        v-show="visiblePages.includes(page)"
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
  @include media-breakpoint-up(md) {
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
    @include media-breakpoint-up(md) {
      gap: 16px;
      align-items: flex-start;
      justify-content: flex-end;
    }
  }
}
</style>
