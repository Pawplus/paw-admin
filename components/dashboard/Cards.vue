<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { defineProps } from 'vue';
import { useTotalClinic } from '~/store/useTotalClinic';
import { useTotalDoctor } from '~/store/useTotalDoctor';
import { useTotalOrder } from '~/store/useTotalOrder';

const props = defineProps({
  role: {
    type: String as PropType<'superadmin' | 'adminklinik'>,
    required: true
  }
});

const totalClinicStore = useTotalClinic();
const totalDoctorStore = useTotalDoctor();
const totalOrderStore = useTotalOrder();

onMounted(async () => {
  await totalClinicStore.fetchTotalClinic();
  await totalDoctorStore.fetchTotalDoctor();
  await totalOrderStore.fetchTotalFinishedOrders();
});

const cardData = computed(() => [
  { title: "Jumlah Klinik", value: totalClinicStore.totalClinic ?? 0 },
  { title: "Jumlah Dokter", value: totalDoctorStore.totalDoctor ?? 0 },
  { title: "Order Selesai", value: totalOrderStore.totalFinishedOrders ?? 0 },
  { title: "Order Aktif", value: 23 }
]);

const filteredCardData = computed(() => {
  if (props.role === 'adminklinik') {
    return cardData.value.filter(card => card.title === 'Order Selesai' || card.title === 'Order Aktif');
  }
  return cardData.value;
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
