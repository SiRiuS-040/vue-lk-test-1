<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, computed, ref } from "vue";
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
  links?: pagLink[];
  frontPagination?: boolean;
  items?: any[];
}

const visibleItems = defineModel<any[]>();

const emit = defineEmits(["changePage", "update:modelValue"]);

const props = withDefaults(defineProps<IProps>(), {
  currentPage: 1,
  frontPagination: false,
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

const frontCurrentPage = ref(props.currentPage);

const filterdeItems = computed(() => {
  console.log(props.items);

  return props.items
    .map((item) => item)
    .slice(
      props.currentPage > 1
        ? (frontCurrentPage.value - 1) * props.itemsPerPage - 1
        : 0,
      frontCurrentPage.value * props.itemsPerPage
    );

  // return [
  //   {
  //     id: 17,
  //     userName: "Wade Warren",
  //     email: "name@domian.com",
  //     phone: "+497074559490",
  //     credits: 90,
  //     userStatus: "ACTIVE",
  //   },
  // ];
});

const changePage = (page: number) => {
  if (!props.frontPagination) {
    emit("changePage", page);
  } else {
    console.log("Пагинация на фронте");
    frontCurrentPage.value = page;
    visibleItems.value = filterdeItems.value;
  }
};

if (props.frontPagination) {
  visibleItems.value = filterdeItems.value;
}
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
  @include media-breakpoint-up(md) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;

  &__pagination {
    @include media-breakpoint-up(md) {
      gap: 16px;
      align-items: flex-start;
      justify-content: flex-end;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
