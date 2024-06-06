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
    // kode lain lagi
};
</script>
<template>
    <v-dialog v-model="dialog" max-width="700px">
        <v-card>
            <v-card-title class="text-h5 py-5 px-7 text-left">Apakah kamu yakin ingin memverifikasi pembayaran konsultasi
                ini?</v-card-title>
            <v-card-text class="bordered-content">
                <p class="pb-2"><strong>Tanggal order:</strong> {{ consultation.orderDate }}</p>
                <p class="pb-2"><strong>Waktu order:</strong> {{ consultation.orderTime }}</p>
                <p class="pb-2"><strong>Email pengguna:</strong> {{ consultation.email }}</p>
                <p class="pb-2"><strong>Layanan:</strong> {{ consultation.service }}</p>
                <p class="pb-2"><strong>Dokter:</strong> {{ consultation.doctor }}</p>
                <p class="pb-2"><strong>Jumlah pembayaran:</strong> {{ consultation.paymentAmount }}</p>
                <p class="pb-2"><strong>Kode Unik:</strong> {{ consultation.uniqueCode }}</p>
                <p class="pb-2"><strong>Metode Pembayaran:</strong> {{ consultation.paymentMethod }}</p>
            </v-card-text>
            <v-card-actions  class="justify-center">
                <v-spacer></v-spacer>
                <div class="button-container">
                    <v-btn class="px-15" variant="outlined" color="primary" @click="dialog = false">Batal</v-btn>
                    <v-btn class="px-15" variant="flat" color="primary" @click="verifyPayment">Verifikasi</v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<style>
.bordered-content {
  border: 2px solid rgba(0, 0, 0, 0.12); 
  padding: 16px; 
  border-radius: 4px;
  margin: 0px 30px;
  margin-bottom: 10px;
}
.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>