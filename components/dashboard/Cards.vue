<script setup lang="ts">
const amount = 23;

const cardData = [
  { title: "Jumlah Klinik", value: amount },
  { title: "Jumlah Dokter", value: amount },
  { title: "Order Selesai", value: amount },
  { title: "Order Aktif", value: amount }
];
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="card in cardData" :key="card.title" cols="12" md="3">
        <v-card>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>{{ card.value }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
