<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
    isOpen: boolean
    formData: {
        profilePicture: string | null
        fullName: string
        gender: string
        birthDate: string
        specialist: string
        clinicLocation: string
        strNumber: string
        email: string
        schedules: string[]
    }
}>()

const emit = defineEmits(['close', 'verify'])

const close = () => {
    emit('close')
}

const verify = () => {
    emit('verify')
}
</script>
<template>
    <v-dialog v-model="isOpen" max-width="600">
        <v-card>
            <v-card-title class="headline">Apakah kamu yakin ingin menambahkan dokter ini?</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <v-avatar size="120">
                            <v-img :src="formData.profilePicture ?? ''"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <v-row>
                            <v-col cols="6"><strong>Nama lengkap :</strong> {{ formData.fullName }}</v-col>
                            <v-col cols="6"><strong>Klinik :</strong> {{ formData.clinicLocation }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6"><strong>Jenis kelamin :</strong> {{ formData.gender }}</v-col>
                            <v-col cols="6"><strong>Email :</strong> {{ formData.email }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6"><strong>Tanggal lahir :</strong> {{ formData.birthDate }}</v-col>
                            <v-col cols="6"><strong>No. STR :</strong> {{ formData.strNumber }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6"><strong>Spesialis :</strong> {{ formData.specialist }}</v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <strong>Jadwal konsultasi klinik :</strong>
                        <v-chip-group column>
                            <v-chip v-for="(schedule, index) in formData.schedules" :key="index">{{ schedule }}</v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="outlined" color="primary" @click="close">Batal</v-btn>
                <v-btn variant="flat" color="primary" @click="verify">Verifikasi</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>



<style scoped>
.headline {
    font-size: 18px;
    font-weight: bold;
}
</style>