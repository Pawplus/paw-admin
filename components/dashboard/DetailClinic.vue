<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
    router.back()
}

const clinic = ref({
    name: 'Anabul Vet #22222',
    status: 'active',
    address: 'Jl. Bahagia No. 22 RT. 007 RW. 008, Pejagalan, Tambora, Jakarta Barat, 11250',
    coordinates: '6°08\'00.7"S 106°48\'45.4"E',
    openingHours: {
        Senin: '09.00 - 21.00',
        Selasa: '09.00 - 21.00',
        Rabu: '09.00 - 21.00',
        Kamis: '09.00 - 21.00',
        Jumat: '09.00 - 21.00',
    },
    photos: [
        '/images/products/s4.jpg',
        '/images/products/s5.jpg',
        '/images/products/s11.jpg',
    ],
})

const googleMapsUrl = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.2824373979783!2d106.81237695091383!3d-6.133145295547275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e6a5e6e6e7%3A0x6e0f0c6e0f0c6e0f!2sJl.%20Bahagia%20No.%2022%2C%20Pejagalan%2C%20Kec.%20Tambora%2C%20Kota%20Jakarta%20Bar.%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011250!5e0!3m2!1sid!2sid!4v1623583726234!5m2!1sid!2sid')

const editClinic = () => {
    // Logic edit klinik
}

onMounted(() => {
    // Fetch detail klinik by clinicId
})
</script>

<template>
    <v-container>
        <v-row class="mb-4" align="center">
            <v-col cols="auto">
                <v-btn icon @click="goBack">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-card-title class="text-h3">Detail Klinik</v-card-title>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="d-flex justify-space-between align-center pb-5">
                        <div class="d-flex align-center">
                            <h2 class="mr-4 text-h4">{{ clinic.name }}</h2>
                            <v-chip :color="clinic.status === 'active' ? 'success' : 'red'" dark>
                                {{ clinic.status === 'active' ? 'Aktif' : 'Tidak Aktif' }}
                            </v-chip>
                        </div>
                        <v-btn color="primary" @click="editClinic">Edit klinik</v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <iframe :src="googleMapsUrl" width="100%" height="330" style="border:0;" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <p class="py-1">{{ clinic.address }}</p>
                                <p>{{ clinic.coordinates }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card>
                                    <v-card-title>Jam Buka</v-card-title>
                                    <v-list>
                                        <v-list-item v-for="(hours, day) in clinic.openingHours" :key="day">
                                            <v-list-item-content>
                                                <v-list-item-title>{{ day }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ hours }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <p class="py-3 text-h5">Foto Klinik</p>
                                <v-row>
                                    <v-col cols="12" md="4" v-for="(photo, index) in clinic.photos" :key="index">
                                        <v-img :src="photo" aspect-ratio="16/9" class="clinic-photo"></v-img>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-card-title class="d-flex justify-space-between align-center mt-7">
        <div class="d-flex align-center">
            <h2 class="mr-4 text-h4">Daftar Dokter</h2>
            <v-chip :color="clinic.status === 'active' ? 'primary' : 'red'" dark>
                {{ clinic.status === 'active' ? '20' : 'Tidak Aktif' }}
            </v-chip>
        </div>
        <v-btn color="primary" @click="editClinic">Tambah Dokter</v-btn>
    </v-card-title>
</template>

<style scoped>
.v-card-title {
    display: flex;
    justify-content: space-between;
}

.clinic-photo {
    border-radius: 8px;
    overflow: hidden;
}
</style>