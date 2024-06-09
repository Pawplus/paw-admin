<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const location = ref('')

const googleMapsEmbedUrl = computed(() => {
    return "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2939.762763812713!2d107.04607566781714!3d-6.205292379297995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698900248cc3f1%3A0x9b3430faf772b550!2sDarmawangsa%20Residence%20Cluster%20Sriwijaya!5e0!3m2!1sid!2sid!4v1717928813108!5m2!1sid!2sid";
})

const goBack = () => {
  router.back()
}

const addOperationalHour = () => {
    clinic.value.operationalHours.push({ day: '', open: '', close: '' })
}
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
    },
    operationalHours: Array<{ day: string, open: string, close: string }>
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
    },
    operationalHours: [
        { day: 'Senin', open: '09:00', close: '21:00' },
        { day: 'Selasa', open: '09:00', close: '21:00' }
    
    ]
})

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']

const subdistricts = ref(['Bojong Gede', 'Bahagia']) // replace with real data
const districts = ref(['Cilandak', 'Mampang Prapatan']) // replace with real data
const cities = ref(['City 1', 'City 2']) // replace with real data

const files = ref<string[]>([]);
const inputFile = ref<File | null>(null);
const isUploading = ref(false);

const handleFileUpload = () => {
    if (inputFile.value) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            files.value.push(e.target.result as string);
        };
        reader.readAsDataURL(inputFile.value);
        inputFile.value = null;
    }
};

const removeFile = (index: number) => {
    files.value.splice(index, 1);
};

const submit = () => {
    if (files.value.length >= 3 && !isUploading.value) {
        isUploading.value = true;
        // Logic to upload files to server
        console.log('Files uploaded:', files.value);
        // Reset files after upload
        files.value = [];
        isUploading.value = false;
    }
};

</script>


<template>
    <v-container>
        <v-row class="mb-3" align="center">
            <v-col cols="auto">
              <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-card-title>Tambah Klinik</v-card-title>
            </v-col>
          </v-row>
        <v-card>
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

                    <v-select label="Kelurahan" :items="subdistricts"
                        v-model="clinic.address.subdistrict" />
                    <v-select label="Kecamatan" :items="districts"
                        v-model="clinic.address.district" />

                    <v-row>
                        <v-col cols="8">
                            <v-select label="Kota" :items="cities"
                                v-model="clinic.address.city" />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field label="Kode pos" v-model="clinic.address.postalCode" />
                        </v-col>
                    </v-row>

                </v-form>
            </v-card-text>
        </v-card>

        <v-card class="mt-5">
            <v-row>
                <v-col>
                    <h3 class="pb-3">Atur titik lokasi</h3>
                    <iframe width="600" height="450" style="border:0" :src="googleMapsEmbedUrl" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <v-text-field label="Koordinat lokasi" v-model="location"></v-text-field>
                </v-col>
            </v-row>
        </v-card>

        <v-card class="mt-5">
            <v-form>
                <h3 class="pb-3">Jam Operasional</h3>
                <div v-for="(operation, index) in clinic.operationalHours" :key="index">
                    <v-row>
                        <v-col cols="4">
                            <v-select :items="days" v-model="operation.day" label="Hari" />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="operation.open" label="Jam buka" type="time" />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="operation.close" label="Jam tutup" type="time" />
                        </v-col>
                    </v-row>
                </div>
                <v-btn @click="addOperationalHour" color="primary" variant="outlined" block>Tambah hari</v-btn>
            </v-form>
        </v-card>

        <v-card class="mt-5">
            <v-row>
                <h3 class="pb-8 pt-3 pl-3">Upload Foto Klinik</h3>
                <v-col cols="12" sm="6" md="" class="mt-10" v-for="(file, index) in files" :key="index">
                    <v-card>
                        <v-img :src="file" height="100px" />
                        <v-card-actions>
                            <v-btn icon @click="removeFile(index)">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-file-input v-if="files.length < 3" v-model="inputFile" accept="image/*" label="Upload foto"
                prepend-icon="mdi-camera" @change="handleFileUpload" hide-details></v-file-input>
            <v-alert v-if="files.length < 3" type="info" class="mt-3">
                Min. 3 foto dan max. file 2 mb
            </v-alert>
            <v-btn :disabled="files.length < 3 || isUploading" color="primary" block class="mt-5" @click="submit">
                Buat Klinik
            </v-btn>
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

iframe {
    width: 100%;
    height: 450px;
    border: 0;
}

.v-file-input {
    width: 100%;
}
</style>