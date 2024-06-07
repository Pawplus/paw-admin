<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PopupModalAddDoctor from './PopupModalAddDoctor.vue'

const router = useRouter()
const isModalOpen = ref(false)
const imageUrl = ref<string | null>(null)

const formErrors = reactive({
  profilePicture: '',
  fullName: '',
  gender: '',
  birthDate: '',
  specialist: '',
  clinicLocation: '',
  strNumber: '',
  email: '',
  session: '',
  time: '',
  schedules: ''
})

const formData = reactive({
  profilePicture: null as string | null,
  fullName: '',
  gender: '',
  birthDate: '',
  specialist: '',
  clinicLocation: '',
  strNumber: '',
  email: '',
  session: '',
  time: '',
  schedules: [] as string[]
})

const genderItems = ['Laki-laki', 'Perempuan']
const specialistItems = ['Anjing', 'Kucing', 'Burung', 'Kelinci']
const clinicLocations = ['Klinik A', 'Klinik B', 'Klinik C']
const sessionItems = ['Pagi', 'Siang', 'Sore']
const timeItems = ['08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00', '15:00 - 16:30']

const addSchedule = () => {
  const schedule = `${formData.session} ${formData.time}`
  formData.schedules.push(schedule)
  formData.session = ''
  formData.time = ''
}

const validateForm = () => {
  let isValid = true

  // Validasi tipe data dan field kosong
  if (!formData.fullName || typeof formData.fullName !== 'string') {
    formErrors.fullName = 'Nama lengkap harus diisi dan berupa teks'
    isValid = false
  } else {
    formErrors.fullName = ''
  }
  if (!formData.gender || typeof formData.gender !== 'string') {
    formErrors.gender = 'Jenis kelamin harus dipilih dan berupa teks'
    isValid = false
  } else {
    formErrors.gender = ''
  }
  if (!formData.birthDate || isNaN(Date.parse(formData.birthDate))) {
    formErrors.birthDate = 'Tanggal lahir harus diisi dan berupa tanggal yang valid'
    isValid = false
  } else {
    formErrors.birthDate = ''
  }
  if (!formData.specialist || typeof formData.specialist !== 'string') {
    formErrors.specialist = 'Spesialis harus dipilih dan berupa teks'
    isValid = false
  } else {
    formErrors.specialist = ''
  }
  if (!formData.clinicLocation || typeof formData.clinicLocation !== 'string') {
    formErrors.clinicLocation = 'Lokasi klinik harus dipilih dan berupa teks'
    isValid = false
  } else {
    formErrors.clinicLocation = ''
  }
  if (!formData.strNumber || typeof formData.strNumber !== 'string') {
    formErrors.strNumber = 'Nomor STR harus diisi dan berupa teks'
    isValid = false
  } else {
    formErrors.strNumber = ''
  }
  if (!formData.email || typeof formData.email !== 'string' || !/^\S+@\S+\.\S+$/.test(formData.email)) {
    formErrors.email = 'Email harus diisi dan berupa email yang valid'
    isValid = false
  } else {
    formErrors.email = ''
  }

  // Clear errors for non-mandatory fields
  formErrors.profilePicture = ''
  formErrors.session = ''
  formErrors.time = ''
  formErrors.schedules = ''

  return isValid
}

const submitForm = () => {
  if (validateForm()) {
    isModalOpen.value = true
  }
}

const goBack = () => {
  router.back()
}

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] || null
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageUrl.value = e.target?.result as string
      formData.profilePicture = e.target?.result as string
    }
    reader.onerror = (e) => {
      console.error('Error reading file:', e)
    }
    reader.readAsDataURL(file)
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
                <v-text-field label="Nama lengkap dengan gelar" v-model="formData.fullName"
                  :error-messages="formErrors.fullName ? [formErrors.fullName] : []"></v-text-field>
                <v-select label="Jenis kelamin" :items="genderItems" v-model="formData.gender"
                  :error-messages="formErrors.gender ? [formErrors.gender] : []"></v-select>
                <v-text-field label="Tanggal lahir" v-model="formData.birthDate" type="date"
                  :error-messages="formErrors.birthDate ? [formErrors.birthDate] : []"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select label="Spesialis" :items="specialistItems" v-model="formData.specialist"
                  :error-messages="formErrors.specialist ? [formErrors.specialist] : []"></v-select>
                <v-select label="Lokasi klinik" :items="clinicLocations" v-model="formData.clinicLocation"
                  :error-messages="formErrors.clinicLocation ? [formErrors.clinicLocation] : []"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <h3>Informasi Akun</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nomor STR" v-model="formData.strNumber"
                  :error-messages="formErrors.strNumber ? [formErrors.strNumber] : []"></v-text-field>
                <v-text-field label="Email" v-model="formData.email"
                  :error-messages="formErrors.email ? [formErrors.email] : []"></v-text-field>
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
                <v-btn block @click="submitForm" color="primary">Tambah Dokter</v-btn>
                <PopupModalAddDoctor :formData="formData" :isOpen="isModalOpen" />
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
