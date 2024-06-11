<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const search = ref('');

const headers = [
    { title: 'No', value: 'no' },
    { title: 'Dokter ID', value: 'dokterId' },
    { title: 'Nama Dokter', value: 'namaDokter' },
    { title: 'Email Dokter', value: 'emailDokter' },
    { title: 'No. STR', value: 'noSTR' },
    { title: 'Status', value: 'status' },
    { title: 'Aksi', value: 'aksi', sortable: false },
];

const doctors = ref([
    { no: 1, dokterId: '123456', namaDokter: 'Anabul Vet', emailDokter: 'support@anabulvet.com', noSTR: '01234567890', status: 'Diundang' },
    { no: 2, dokterId: '123456', namaDokter: 'Jeri Rahardian', emailDokter: 'support@anabulvet.com', noSTR: '01234567890', status: 'Aktif' },
    { no: 3, dokterId: '123456', namaDokter: 'Kusuma Sakti', emailDokter: 'support@anabulvet.com', noSTR: '01234567890', status: 'Tidak Aktif' },
    { no: 4, dokterId: '123456', namaDokter: 'Doni Batubara', emailDokter: 'support@anabulvet.com', noSTR: '01234567890', status: 'Aktif' },
    { no: 5, dokterId: '123456', namaDokter: 'Rian Rudi', emailDokter: 'support@anabulvet.com', noSTR: '01234567890', status: 'Tidak Aktif' },
]);

const filteredDoctors = computed(() => {
    if (!search.value) return doctors.value;
    return doctors.value.filter(doctor => {
        return Object.values(doctor).some(val =>
            String(val).toLowerCase().includes(search.value.toLowerCase())
        );
    });
});

const filterList = () => {
    // Implementasi filter
};

const resendInvite = (item: any) => {
    // kirim ulang undangan
    console.log('Kirim ulang untuk:', item);
};

const viewDetails = (item: any) => {
    // lihat detail
    console.log('Lihat detail untuk:', item);
};

const goBack = () => {
    window.history.length > 1 ? router.go(-1) : router.push('/');
};
</script>

<template>
    <v-container>
        <v-card-title>
            <v-row>
                <v-col>
                    <v-btn icon @click="goBack" class="mr-5">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <span class="headline text-h3">Daftar Dokter</span>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" label="Search" class="mt-8"></v-text-field>
                </v-col>
            </v-row>
            <v-col>
                <v-btn color="primary" class="mt-13" @click="filterList">Filter</v-btn>
            </v-col>
        </v-card-title>
        <v-card>
            <v-data-table :headers="headers" :items="filteredDoctors" :search="search" class="elevation-1"
                item-value="no">
                <template v-slot:item.aksi="{ item }">
                    <v-btn variant="outlined" color="primary" v-if="item.status === 'Diundang'"
                        @click="resendInvite(item)">Kirim ulang</v-btn>
                    <v-btn color="primary" v-else @click="viewDetails(item)">Detail</v-btn>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<style scoped>
.v-card {
    max-width: 1200px;
    margin: 0 auto;
}

.v-card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>