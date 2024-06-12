<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')
const valid = ref(false)
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmNewPassword = ref(false)

const goBack = () => {
    router.back()
}

const toggleShowCurrentPassword = () => {
    showCurrentPassword.value = !showCurrentPassword.value
}

const toggleShowNewPassword = () => {
    showNewPassword.value = !showNewPassword.value
}

const toggleShowConfirmNewPassword = () => {
    showConfirmNewPassword.value = !showConfirmNewPassword.value
}
// Rule validation
const passwordRule = (v: string) => v.length >= 8 || 'Kata sandi minimal 8 karakter';
const matchPasswordRule = (v: string) => v === newPassword.value || 'Kata sandi tidak cocok';

const changePassword = () => {
    // Logic change password
    if (valid.value) {
        console.log('Kata sandi diubah')
    }
}
</script>

<template>
    <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title class=" mt-9 py-5 d-flex justify-space-between align-center">
                        <v-row align="center" class="py-3 px-3">
                            <v-btn icon @click="goBack" class="mx-3">
                                <v-icon>mdi-arrow-left</v-icon>
                            </v-btn>
                            <p class="text-h4">Ubah Kata Sandi</p>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field v-model="currentPassword" :type="showCurrentPassword ? 'text' : 'password'"
                                :append-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="toggleShowCurrentPassword" label="Kata sandi saat ini"
                                required></v-text-field>
                            <v-text-field v-model="newPassword" :type="showNewPassword ? 'text' : 'password'"
                                :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="toggleShowNewPassword" :rules="[passwordRule]" label="Kata sandi baru"
                                required></v-text-field>
                            <v-text-field v-model="confirmNewPassword"
                                :type="showConfirmNewPassword ? 'text' : 'password'"
                                :append-icon="showConfirmNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="toggleShowConfirmNewPassword" :rules="[matchPasswordRule]"
                                label="Konfirmasi Kata sandi baru" required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn block :disabled="!valid" @click="changePassword" color="primary" variant="flat">
                            Ubah Kata sandi
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.fill-height {
    height: 100%;
}
</style>