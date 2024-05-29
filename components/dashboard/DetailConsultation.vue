<script setup lang="ts">
import { ref } from 'vue';

const getCurrentDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${getDayName(today.getDay())}, ${day} ${getMonthName(month)} ${year}`;
};

const getMonthName = (month: string): string => {
    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return monthNames[parseInt(month) - 1];
};

const getDayName = (day: number): string => {
    const dayNames = [
        'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
    ];
    return dayNames[day];
};

const getCurrentTime = (): string => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

interface Consultation {
    id: string;
    orderDate: string;
    orderTime: string;
    email: string;
    service: string;
    doctor: string;
    paymentAmount: string;
    uniqueCode: string;
    paymentMethod: string;
    pet: {
        name: string;
        age: string;
        breed: string;
        gender: string;
        notes: string;
    };
    history: Array<{
        date: string;
        service: string;
        notes: string;
        chatLink: string;
    }>;
}

const consultation = ref<Consultation>({
    id: '21212121',
    orderDate: getCurrentDate(),
    orderTime: getCurrentTime(),
    email: 'user@gmail.com',
    service: 'Konsultasi Online',
    doctor: 'Dr. Sarah',
    paymentAmount: 'Rp50.000',
    uniqueCode: 'Rp333',
    paymentMethod: 'Transfer Bank BCA',
    pet: {
        name: 'Yuki',
        age: '2 Tahun',
        breed: 'Anggora',
        gender: 'Betina',
        notes: 'kucing sakit pilek',
    },
    history: [
        {
            date: getCurrentDate(),
            service: 'Online',
            notes: 'Pdf',
            chatLink: 'Lihat',
        },
        {
            date: getCurrentDate(),
            service: 'Online',
            notes: 'Pdf',
            chatLink: 'Lihat',
        },
    ],
});
</script>


<template>
    <v-container>
        <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between align-center">
                <div>
                    Konsultasi ID#{{ consultation.id }}
                    <span class="pl-6 grey--text">Menunggu Verifikasi</span>
                </div>
                <v-btn color="primary">Verifikasi Pembayaran</v-btn>
            </v-card-title>
            <v-card-text>
                <v-row >
                    <v-col cols="6">
                        <p class="pb-2 pt-4"><strong>Tanggal order:</strong> {{ consultation.orderDate }}</p>
                        <p class="pb-2"><strong>Waktu order:</strong> {{ consultation.orderTime }}</p>
                        <p class="pb-2"><strong>Email pengguna:</strong> {{ consultation.email }}</p>
                        <p class="pb-2"><strong>Layanan:</strong> {{ consultation.service }}</p>
                    </v-col>
                    <v-col cols="6">
                        <p class="pb-2 pt-4"><strong>Dokter:</strong> {{ consultation.doctor }}</p>
                        <p class="pb-2"><strong>Jumlah pembayaran:</strong> {{ consultation.paymentAmount }}</p>
                        <p class="pb-2"><strong>Kode Unik:</strong> {{ consultation.uniqueCode }}</p>
                        <p class="pb-2"><strong>Metode Pembayaran:</strong> {{ consultation.paymentMethod }}</p>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="mb-5">
            <v-card-title>Profil Pet</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <p class="pb-2 pt-4"><strong>Nama Pet:</strong> {{ consultation.pet.name }}</p>
                        <p class="pb-2"><strong>Usia:</strong> {{ consultation.pet.age }}</p>
                        <p class="pb-2"><strong>Ras:</strong> {{ consultation.pet.breed }}</p>
                        <p class="pb-2"><strong>Jenis Kelamin:</strong> {{ consultation.pet.gender }}</p>
                    </v-col>
                    <v-col cols="6">
                        <p><strong>Catatan order:</strong></p>
                        <v-textarea readonly v-model="consultation.pet.notes"></v-textarea>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="mb-2">
            <v-card-title class="mb-3">Riwayat konsultasi</v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr >
                            <th class="pb-2">No</th>
                            <th class="pl-6 pb-2">Tanggal konsultasi</th>
                            <th class="pl-6 pb-2">Layanan</th>
                            <th class="pl-6 pb-2">Catatan konsultasi</th>
                            <th class="pl-6 pb-2">Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in consultation.history" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td class="pl-6 pb-2">{{ item.date }}</td>
                            <td class="pl-6 pb-2">{{ item.service }}</td>
                            <td class="pl-6 pb-2">{{ item.notes }}</td>
                            <td class="pl-6 pb-2">{{ item.chatLink }}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
.grey--text {
  color: rgb(158, 152, 152);
}

</style>

