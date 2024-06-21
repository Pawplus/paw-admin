<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
    isDialogOpen: {
        type: Boolean,
        required: true,
    },
    clinic: {
        type: Object,
        required: true,
    },
    files: {
        type: Array as () => string[],
        required: true,
    },
});

const dialog = ref(props.isDialogOpen);
const popupFiles = ref<string[]>([]);

watch(() => props.isDialogOpen, (newVal) => {
    dialog.value = newVal;
    if (newVal) {
        popupFiles.value = [...props.files];
    }
});
</script>

<template>
    <v-dialog v-model="dialog" max-width="800px">
        <v-card>
            <v-card-title class="text-h5 py-5 px-7 text-left">Apakah kamu yakin ingin menambahkan klinik ini :</v-card-title>
            <v-card-text class="bordered-content">
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <p class="pb-2"><strong>Nama klinik</strong>: {{ clinic.name }}</p>
                            <p class="pb-2"><strong>Alamat klinik</strong>: {{ clinic.address.street }}</p>
                            <p class="pb-2"><strong>RT/RW</strong>: {{ clinic.address.rt }}/{{ clinic.address.rw }}</p>
                            <p class="pb-2"><strong>Kelurahan</strong>: {{ clinic.address.subdistrict }}</p>
                            <p class="pb-2"><strong>Kecamatan</strong>: {{ clinic.address.district }}</p>
                            <p><strong>Kota</strong>: {{ clinic.address.city }}, {{ clinic.address.postalCode }}</p>
                        </v-col>
                        <v-col cols="6">
                            <p class="pb-2"><strong>Email klinik</strong>: {{ clinic.email }}</p>
                            <p><strong>Jam Operasional</strong>:</p>

                            <ul class="ml-5">
                                <li v-for="(hour, index) in clinic.operationalHours" :key="index">
                                    {{ hour.day }} ({{ hour.open }} - {{ hour.close }})
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                    <v-row class="mt-3">
                        <v-col cols="12">
                            <p class="pb-2"><strong>Foto Klinik</strong>:</p>
                            <v-row>
                                <v-col v-for="(file, index) in popupFiles" :key="index" cols="4">
                                    <v-img :src="file" height="100px" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <div class="button-container">
                    <v-btn class="px-15 mr-5" variant="outlined" color="primary"
                        @click="$emit('update:isDialogOpen', false)">Batal</v-btn>
                    <v-btn class="px-15" variant="flat" color="primary" @click="$emit('verifikasi')">Verifikasi</v-btn>
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
