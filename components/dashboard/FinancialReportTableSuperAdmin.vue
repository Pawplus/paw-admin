<script setup lang="ts">
import { ref } from 'vue'
import type { ReportItem } from '~/types/dashboard';

const items = ref<ReportItem[]>([
    { id: 'EX01C320101230...', bulan: 'Januari', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'Februari', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'Maret', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'April', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'May', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'Juni', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'Juli', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
    { id: 'EX01C320101230...', bulan: 'Agustus', tahun: 2024, totalRevenue: 'Rp230.000.000', totalTransaksi: 492, lihatLaporan: 'download-url' },
])
</script>

<template>
    <v-card>
        <v-data-table class="styled-table">
            <thead>
                <tr>
                    <th>ID Laporan</th>
                    <th>Bulan</th>
                    <th>Tahun</th>
                    <th>Total revenue</th>
                    <th>Total transaksi</th>
                    <th>Lihat laporan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.bulan }}</td>
                    <td>{{ item.tahun }}</td>
                    <td>{{ item.totalRevenue }}</td>
                    <td>{{ item.totalTransaksi }}</td>
                    <td>
                        <v-btn color="primary" variant="outlined">
                            <a :href="item.lihatLaporan">Download</a>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-data-table>
    </v-card>
</template>

<style scoped>
.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 18px;
    text-align: left;
}

.styled-table thead tr {
    background-color: #E8194D;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
    border: 1px solid #dddddd;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #E8194D;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #E8194D;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>