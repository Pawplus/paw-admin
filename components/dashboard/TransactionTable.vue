<script setup lang="ts">
import { ref } from 'vue'

const headers = [
    { title: 'ID Transaksi', value: 'ID Transaksi' },
    { title: 'Klinik', value: 'Klinik' },
    { title: 'Tanggal transaksi', value: 'Tanggal transaksi' },
    { title: 'Waktu order', value: 'Waktu order' },
    { title: 'Dokter', value: 'Dokter' },
    { title: 'Tipe Order', value: 'Tipe Order' },
    { title: 'Payment method', value: 'Payment method' },
    { title: 'Penjualan (Rp)', value: 'Penjualan' },
    { title: 'Status', value: 'Status' },
    { title: 'Type', value: 'Type' },
]

const transactions = ref([
    {
        "ID Transaksi": "EX01C3201012301",
        "Klinik": "Blok M",
        "Tanggal transaksi": "08/02/2023 10:00",
        "Waktu order": "02:00",
        "Dokter": "drh. Adinda",
        "Tipe Order": "Konsultasi online",
        "Payment method": "Bank BCA",
        "Penjualan": "Rp349.000",
        "Status": "Terbayar",
        "Type": "Income"
    },
    {
        "ID Transaksi": "EX01C3201012302",
        "Klinik": "South Jakarta",
        "Tanggal transaksi": "08/02/2023 10:00",
        "Waktu order": "12:00",
        "Dokter": "drh. Adinda",
        "Tipe Order": "Konsultasi klinik",
        "Payment method": "Bank BCA",
        "Penjualan": "Rp490.000",
        "Status": "Pending",
        "Type": "Income"
    },
    {
        "ID Transaksi": "EX01C3201012302",
        "Klinik": "South Jakarta",
        "Tanggal transaksi": "08/02/2023 10:00",
        "Waktu order": "12:00",
        "Dokter": "drh. Adinda",
        "Tipe Order": "Konsultasi klinik",
        "Payment method": "Bank BCA",
        "Penjualan": "Rp490.000",
        "Status": "Pending",
        "Type": "Income"
    },
    {
        "ID Transaksi": "EX01C3201012302",
        "Klinik": "South Jakarta",
        "Tanggal transaksi": "08/02/2023 10:00",
        "Waktu order": "12:00",
        "Dokter": "drh. Adinda",
        "Tipe Order": "Konsultasi klinik",
        "Payment method": "Bank BCA",
        "Penjualan": "Rp490.000",
        "Status": "Pending",
        "Type": "Income"
    },
    {
        "ID Transaksi": "EX01C3201012302",
        "Klinik": "South Jakarta",
        "Tanggal transaksi": "08/02/2023 10:00",
        "Waktu order": "12:00",
        "Dokter": "drh. Adinda",
        "Tipe Order": "Konsultasi klinik",
        "Payment method": "Bank BCA",
        "Penjualan": "Rp490.000",
        "Status": "Pending",
        "Type": "Income"
    },
])

const statusClass = (status: string) => {
    return status === 'Terbayar' ? 'status-paid' : 'status-pending'
}

const typeClass = (type: string) => {
    return type === 'Income' ? 'type-income' : 'type-expense'
}
</script>

<template>
   
        <v-data-table :headers="headers" :items="transactions" class="elevation-1" item-value="ID Transaksi"
            :items-per-page="5">
            <template #item.status="{ item }">
                <span :class="statusClass(item.Status)">{{ item.Status }}</span>
            </template>
            <template #item.type="{ item }">
                <span :class="typeClass(item.Type)">{{ item.Type }}</span>
            </template>
        </v-data-table>

</template>

<style scoped>
.status-paid {
    color: green;
}

.status-pending {
    color: red;
}

.type-income {
    color: green;
}

.type-expense {
    color: red;
}
</style>
