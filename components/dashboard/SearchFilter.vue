<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')

const onFilter = () => {
    console.log('Filter clicked with search:', search.value)
    // Add your filter logic
}
</script>

<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12" sm="8" md="6">
                <v-text-field v-model="search" label="Search" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="2">
                <v-btn @click="onFilter" variant="outlined" color="primary">
                    Filter
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>


<style scoped>
.v-text-field {
    width: 100%;
}

.v-btn {
    width: 100%;
    text-align: center;
}
</style>
