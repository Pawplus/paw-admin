<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    isOpen: boolean,
    formData: {
        profilePicture: string | null,
        fullName: string,
        gender: string,
        birthDate: string,
        specialist: string,
        clinicLocation: string,
        strNumber: string,
        email: string,
        schedules: string[]
    }
}>()

const close = () => {
    props.isOpen = false
}

const verify = () => {
    // Add logic for verifying the doctor's data
    props.isOpen = false
}
</script>

<template>
    <v-dialog v-model="props.isOpen" max-width="990">
        <v-card>
            <v-card-title class="text-h5 py-5 px-7 text-left">Apakah kamu yakin ingin menambahkan dokter ini
                ?</v-card-title>
            <v-card-text class="bordered-content">
                <v-row>
                    <v-col cols="4">
                        <v-avatar size="130" class="mx-16">
                            <v-img :src="props.formData.profilePicture ?? ''"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <v-row>
                            <v-col cols="6"><strong>Nama lengkap :</strong> {{ props.formData.fullName }}</v-col>
                            <v-col cols="6"><strong>Klinik :</strong> {{ props.formData.clinicLocation }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6"><strong>Jenis kelamin :</strong> {{ props.formData.gender }}</v-col>
                            <v-col cols="6"><strong>Email :</strong> {{ props.formData.email }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6"><strong>Tanggal lahir :</strong> {{ props.formData.birthDate }}</v-col>
                            <v-col cols="6"><strong>No. STR :</strong> {{ props.formData.strNumber }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6"><strong>Spesialis :</strong> {{ props.formData.specialist }}</v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <strong>Jadwal konsultasi klinik :</strong>
                        <v-chip-group column>
                            <v-chip v-for="(schedule, index) in props.formData.schedules" :key="index">{{ schedule
                                }}</v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="button-container">
                    <v-btn class="px-15" variant="outlined" color="primary" @click="close">Batal</v-btn>
                    <v-btn class="px-15" variant="flat" color="primary" @click="verify">Verifikasi</v-btn>
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
