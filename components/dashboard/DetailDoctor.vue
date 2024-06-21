<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const search = ref('');
const headers = [
    { title: 'No', value: 'no' },
    { title: 'Penarikan ID', value: 'penarikanId' },
    { title: 'Tanggal & waktu penarikan', value: 'tanggalWaktu' },
    { title: 'Jumlah', value: 'jumlah' },
    { title: 'Metode', value: 'metode' },
    { title: 'Nomor Rekening', value: 'nomorRekening' },
    { title: 'Atas nama', value: 'atasNama' },
    { title: 'Status', value: 'status' },
    { title: 'Aksi', value: 'aksi' },
];

const riwayat = ref([
    {
        no: 1,
        penarikanId: '123456',
        tanggalWaktu: 'Senin, 22 Maret 2023, 14:30',
        jumlah: 'Rp1.000.000',
        metode: 'Transfer Mandiri',
        nomorRekening: '93323032',
        atasNama: 'Adi Setiawan',
        status: 'Diajukan',
    },
    {
        no: 2,
        penarikanId: '123456',
        tanggalWaktu: 'Senin, 22 Maret 2023, 14:30',
        jumlah: 'Rp1.000.000',
        metode: 'Transfer Bank BCA',
        nomorRekening: 'Rp50.000',
        atasNama: 'Adi Setiawan',
        status: 'Diproses',
    },
    {
        no: 3,
        penarikanId: '123456',
        tanggalWaktu: 'Senin, 22 Maret 2023, 14:30',
        jumlah: 'Rp1.000.000',
        metode: 'Transfer Bank BCA',
        nomorRekening: 'Rp50.000',
        atasNama: 'Adi Setiawan',
        status: 'Selesai',
    },
]);

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Diajukan':
            return 'blue';
        case 'Diproses':
            return 'orange';
        case 'Selesai':
            return 'green';
        default:
            return 'grey';
    }
};

const filterList = () => {
    // filter
};

const goBack = () => {
    window.history.length > 1 ? router.go(-1) : router.push('/');
};

const goToDetail = (item: any) => {
    console.log('Detail clicked for', item);
    // navigasi ke halaman detail
};
function editProfile() {
    // Logic edit profil
}
</script>


<template>
    <v-container>
        <v-card-title class="mb-3">
            <v-row>
                <v-col>
                    <v-btn icon @click="goBack" class="mr-5">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <span class="headline text-h3 ">Detail Dokter</span>
                </v-col>
            </v-row>

        </v-card-title>
        <v-card class="px-5 py-5">
            <v-card-title class="d-flex align-center justify-space-between">
                <div class="d-flex align-center">
                    <v-avatar size="135">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                            alt="Doctor Image" />
                    </v-avatar>
                    <div class="ml-4">
                        <p class="text-h3 pb-3">drh. Adi Setiawan</p>
                        <p class="text-h5">Anabul Vet</p>
                    </div>
                </div>
                <v-btn color="primary" @click="editProfile">Edit profil</v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <p class="py-2"><strong>Jenis kelamin:</strong> Laki-laki</p>
                        <p class="pb-2"><strong>Tanggal lahir:</strong> 09/22/1989</p>
                        <p class="pb-2"><strong>Spesialis:</strong> Kucing, Anjing</p>
                    </v-col>
                    <v-col cols="6">
                        <p class="py-2"><strong>Email:</strong> adisetiawan@gmail.com</p>
                        <p class="pb-2"><strong>No. STR:</strong> 1234567890</p>
                    </v-col>
                </v-row>
                <v-divider class="my-4"></v-divider>
                <h3 class="mb-3">Jadwal konsultasi klinik:</h3>
                <v-row>
                    <v-col cols="3">
                        <v-chip>Pagi 09.00 - 10.00</v-chip>
                    </v-col>
                    <v-col cols="3">
                        <v-chip>Siang 12.00-14.00</v-chip>
                    </v-col>
                </v-row>
                <v-divider class="my-4"></v-divider>
            </v-card-text>
        </v-card>

        <v-card class="mt-5">
            <v-card-text>
                <p class="pb-4 text-h5">Riwayat konsultasi</p>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th class="px-2">No</th>
                            <th class="px-2">Tanggal & waktu konsultasi</th>
                            <th class="px-2">Layanan</th>
                            <th class="px-2">Catatan konsultasi</th>
                            <th class="px-2">Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-2">1</td>
                            <td class="px-2">Senin, 22 Mei 2024 23:22</td>
                            <td class="px-2">Online</td>
                            <td class="px-2">Pdf</td>
                            <td class="px-2 py-4"><v-btn small variant="outlined" color="primary"> Lihat </v-btn></td>
                        </tr>
                        <tr>
                            <td class="px-2">2</td>
                            <td class="px-2">Senin, 22 Mei 2024 23:22</td>
                            <td class="px-2">Online</td>
                            <td class="px-2">Pdf</td>
                            <td class="px-2"><v-btn small variant="outlined" color="primary"> Lihat </v-btn></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
        </v-card>

        <v-card class="mt-5">
            <v-card-title class="search-filter">
                <v-row>
                    <v-col>
                        <span class="headline text-h5">Riwayat konsultasi klinik</span>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" label="Search" class="mt-8"></v-text-field>
                    </v-col>
                </v-row>
                <v-col>
                    <v-btn color="primary" class="mt-13" @click="filterList">Filter</v-btn>
                </v-col>
            </v-card-title>
            <v-data-table :headers="headers" :items="riwayat" :search="search">
                <template v-slot:item.status="{ item }">
                    <v-chip :color="getStatusColor(item.status)" dark>
                        {{ item.status }}
                    </v-chip>
                </template>
                <template v-slot:item.aksi="{ item }">
                    <v-btn color="primary" @click="goToDetail(item)">
                        Detail
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>


<style scoped>
.ml-4 {
    margin-left: 1rem;
}

.search-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>