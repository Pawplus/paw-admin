<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  consultation: {
    type: Object,
    required: true
  }
});

const dialog = ref(false);

const verifyPayment = () => {
  // verifikasi pembayaran
  dialog.value = false;
  // ... kode lainnya
};
</script>
<template>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5">Apakah kamu yakin ingin memverifikasi pembayaran konsultasi ini?</v-card-title>
        <v-card-text>
          <p><strong>Tanggal order:</strong> {{ consultation.orderDate }}</p>
          <p><strong>Waktu order:</strong> {{ consultation.orderTime }}</p>
          <p><strong>Email pengguna:</strong> {{ consultation.email }}</p>
          <p><strong>Layanan:</strong> {{ consultation.service }}</p>
          <p><strong>Dokter:</strong> {{ consultation.doctor }}</p>
          <p><strong>Jumlah pembayaran:</strong> {{ consultation.paymentAmount }}</p>
          <p><strong>Kode Unik:</strong> {{ consultation.uniqueCode }}</p>
          <p><strong>Metode Pembayaran:</strong> {{ consultation.paymentMethod }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red"  @click="dialog = false">Batal</v-btn>
          <v-btn color="green"  @click="verifyPayment">Verifikasi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  