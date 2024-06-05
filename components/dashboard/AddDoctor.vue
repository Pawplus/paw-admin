<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const imageUrl = ref<string | null>(null)

const formData = ref({
  profilePicture: null as File | null,
  fullName: '',
  gender: '',
  birthDate: '',
  specialist: '',
  clinicLocation: '',
  strNumber: '',
  email: '',
  session: '',
  time: ''
})

const genderItems = ['Laki-laki', 'Perempuan']
const specialistItems = ['Anjing', 'Kucing', 'Burung', 'Kelinci']
const clinicLocations = ['Klinik A', 'Klinik B', 'Klinik C']
const sessionItems = ['Pagi', 'Siang', 'Sore']
const timeItems = ['08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00']

const addSchedule = () => {
  // Logika untuk menambahkan jadwal
}

const submitForm = () => {
  // Logika untuk mengirim data
}
const goBack = () => {
  router.back()
}

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    formData.value.profilePicture = file
    imageUrl.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <div>
    <v-row class="mb-4" align="center">
      <v-col cols="auto">
        <v-btn icon @click="goBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-card-title>Tambah Dokter</v-card-title>
      </v-col>
    </v-row>
    <v-container>
      <v-card>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <h3>Informasi Profil</h3>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="4">
                <v-avatar size="130" class="mb-4 mx-16">
                  <v-img :src="imageUrl || ''" alt="Profile picture"></v-img>
                </v-avatar>
                <v-file-input label="Upload" prepend-icon="mdi-camera" @change="onFileChange"></v-file-input>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field label="Nama lengkap dengan gelar" v-model="formData.fullName"></v-text-field>
                <v-select label="Jenis kelamin" :items="genderItems" v-model="formData.gender"></v-select>
                <v-text-field label="Tanggal lahir" v-model="formData.birthDate" type="date"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select label="Spesialis" :items="specialistItems" v-model="formData.specialist"></v-select>
                <v-select label="Lokasi klinik" :items="clinicLocations" v-model="formData.clinicLocation"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <h3>Informasi Akun</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nomor STR" v-model="formData.strNumber"></v-text-field>
                <v-text-field label="Email" v-model="formData.email"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <h3>Jadwal Konsultasi Klinik</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-select label="Sesi" :items="sessionItems" v-model="formData.session"></v-select>
              </v-col>
              <v-col cols="6">
                <v-select label="Jam" :items="timeItems" v-model="formData.time"></v-select>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-btn block variant="outlined" color="primary" @click="addSchedule">Tambah Jadwal</v-btn>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-btn block @click="submitForm" color="primary">Tambah Klinik</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.v-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>