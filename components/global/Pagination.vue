<template>
  <div class="flex w-full justify-center mt-4">
    <ul class="inline-flex gap-x-2">
      <li>
        <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          قبلی
        </button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button
            @click="goToPage(page)"
            :class="{
            'bg-blue-500 text-white': page === currentPage,
            'bg-gray-200': page !== currentPage,
          }"
            class="px-3 py-2 rounded"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          بعدی
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const emit = defineEmits(['pageChange'])

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('pageChange', page)
  }
}
</script>
