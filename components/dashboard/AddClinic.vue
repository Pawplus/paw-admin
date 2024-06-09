<script setup lang="ts">
import { ref } from 'vue'

interface Clinic {
    name: string,
    email: string,
    address: {
        street: string,
        rt: string,
        rw: string,
        subdistrict: string,
        district: string,
        city: string,
        postalCode: string
    }
}

const clinic = ref<Clinic>({
    name: '',
    email: '',
    address: {
        street: '',
        rt: '',
        rw: '',
        subdistrict: '',
        district: '',
        city: '',
        postalCode: ''
    }
})

const subdistricts = ref(['Subdistrict 1', 'Subdistrict 2']) // replace with real data
const districts = ref(['District 1', 'District 2']) // replace with real data
const cities = ref(['City 1', 'City 2']) // replace with real data
</script>


<template>
    <v-container>
        <v-card>
            <v-card-title>Tambah klinik</v-card-title>
            <v-card-text>
                <v-form>
                    <p class="pb-2">Nama Klinik</p>
                    <v-text-field placeholder="input nama klinik" v-model="clinic.name" />

                    <p class="pb-2">Email Klinik</p>
                    <v-text-field placeholder="input email klinik" v-model="clinic.email" />

                    <p class="pb-2">Alamat Klinik</p>
                    <v-text-field label="Input jalan dan nomor" v-model="clinic.address.street" />

                    <v-row>
                        <v-col cols="6">
                            <v-text-field label="RT" v-model="clinic.address.rt" />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="RW" v-model="clinic.address.rw" />
                        </v-col>
                    </v-row>

                    <v-select label="Kelurahan (autofill dari kelurahan)" :items="subdistricts"
                        v-model="clinic.address.subdistrict" />
                    <v-select label="Kecamatan (autofill dari kelurahan)" :items="districts"
                        v-model="clinic.address.district" />

                    <v-row>
                        <v-col cols="8">
                            <v-select label="Kota (autofill dari kelurahan)" :items="cities"
                                v-model="clinic.address.city" />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field label="Kode pos" v-model="clinic.address.postalCode" />
                        </v-col>
                    </v-row>

                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<style scoped>
.v-card {
    padding: 20px;
}

.v-card-title {
    font-size: 24px;
    font-weight: bold;
}
</style>