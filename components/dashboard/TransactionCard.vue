<script setup lang="ts">
import { ref } from 'vue'

const totalRevenue = ref(230000000)
const totalTransaction = ref(230)
const mostSalesClinic = ref('Blok M')

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-card color="primary" hover>
                    <v-card-title>Total revenue</v-card-title>
                    <v-card-subtitle>{{ formatCurrency(totalRevenue) }}</v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="primary" hover>
                    <v-card-title>Total transaction</v-card-title>
                    <v-card-subtitle>{{ totalTransaction }}</v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="primary" hover>
                    <v-card-title>Most sales clinic</v-card-title>
                    <v-card-subtitle>{{ mostSalesClinic }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.v-card {
    padding: 16px;
    text-align: center;
}

.v-card-title {
    font-weight: bold;
}

.v-card-subtitle {
    font-size: 1.25rem;
}
</style>
