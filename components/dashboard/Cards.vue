<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  role: {
    type: String as PropType<'superadmin' | 'adminklinik'>,
    required: true
  }
});

const cardData = [
  { title: "Jumlah Klinik", value: 23 },
  { title: "Jumlah Dokter", value: 23 },
  { title: "Order Selesai", value: 23 },
  { title: "Order Aktif", value: 23 }
];

const filteredCardData = computed(() => {
  if (props.role === 'adminklinik') {
    return cardData.filter(card => card.title === 'Order Selesai' || card.title === 'Order Aktif');
  }
  return cardData;
});

const colSize = computed(() => props.role === 'adminklinik' ? 5 : 3);
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="card in filteredCardData" :key="card.title" cols="12" :md="colSize">
        <v-card>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>{{ card.value }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
