<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['update:modelValue', 'confirm'])
const dialog = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    dialog.value = newVal
})

const closeDialog = () => {
    dialog.value = false
    emit('update:modelValue', false)
}

const confirmChangePassword = () => {
    emit('confirm')
    closeDialog()
}
</script>

<template>
    <v-dialog v-model="dialog" max-width="650" persistent>
        <v-card class="py-3 px-3">
            <v-card-title class="text-h5 mb-8">Apakah anda yakin ingin mengubah kata sandi saat ini?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="button-container">
                    <v-btn class="px-15 mr-8" variant="outlined" @click="closeDialog" color="primary">Batal</v-btn>
                    <v-btn class="px-15" variant="flat" @click="confirmChangePassword" color="primary">Ubah Kata
                        sandi</v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style>
.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>
