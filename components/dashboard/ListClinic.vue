<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import type { ListKlinik } from '~/types/dashboard';

const router = useRouter()
const goBack = () => {
  router.back()
}
const kliniks: ListKlinik[] = [
    {
        no: 1,
        klinikId: '123456',
        namaKlinik: 'Anabul Vet',
        emailKlinik: 'support@anabulvet.com',
        alamat: 'Jl. Bahagia No. 22',
        status: 'Diundang',
        aksi: 'Kirim ulang',
    },
    {
        no: 2,
        klinikId: '123456',
        namaKlinik: 'Anabul Indo',
        emailKlinik: 'support@anabulvet.com',
        alamat: 'Jl. Bahagia No. 22',
        status: 'Aktif',
        aksi: 'Detail',
    },
    {
        no: 3,
        klinikId: '123456',
        namaKlinik: 'Sejahtera',
        emailKlinik: 'support@anabulvet.com',
        alamat: 'Jl. Bahagia No. 22',
        status: 'Tidak Aktif',
        aksi: 'Detail',
    },
    {
        no: 4,
        klinikId: '123456',
        namaKlinik: 'Mas Jaya',
        emailKlinik: 'support@masjaya.com',
        alamat: 'Jl. Bahagia No. 22',
        status: 'Aktif',
        aksi: 'Detail',
    },
    {
        no: 5,
        klinikId: '981626',
        namaKlinik: 'Kuy',
        emailKlinik: 'support@anabulvet.com',
        alamat: 'Jl. Bahagia No. 22',
        status: 'Tidak Aktif',
        aksi: 'Detail',
    },
]

const FakeAPI = {
    async fetch({ page, itemsPerPage, sortBy, search }: { page: number, itemsPerPage: number, sortBy: { key: string, order: string }[], search: string }) {
        return new Promise<{ items: ListKlinik[], total: number }>((resolve) => {
            setTimeout(() => {
                let items = kliniks.slice()

                // Filter items based on search query
                if (search) {
                    const lowerSearch = search.toLowerCase()
                    items = items.filter(item =>
                        item.klinikId.toLowerCase().includes(lowerSearch) ||
                        item.namaKlinik.toLowerCase().includes(lowerSearch) ||
                        item.emailKlinik.toLowerCase().includes(lowerSearch)
                    )
                }

                if (sortBy.length) {
                    const sortKey = sortBy[0].key
                    const sortOrder = sortBy[0].order
                    items.sort((a, b) => {
                        const aValue = (a[sortKey as keyof ListKlinik] ?? '').toString()
                        const bValue = (b[sortKey as keyof ListKlinik] ?? '').toString()
                        return sortOrder === 'desc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue)
                    })
                }

                const start = (page - 1) * itemsPerPage
                const end = start + itemsPerPage
                const paginated = items.slice(start, end)

                resolve({ items: paginated, total: items.length })
            }, 500)
        })
    },
}

const itemsPerPage = ref(5)
const headers = ref([
    { title: 'No', key: 'no', align: 'start' },
    { title: 'Klinik ID', key: 'klinikId', align: 'start' },
    { title: 'Nama Klinik', key: 'namaKlinik', align: 'start' },
    { title: 'Email Klinik', key: 'emailKlinik', align: 'start' },
    { title: 'Alamat', key: 'alamat', align: 'start' },
    { title: 'Status', key: 'status', align: 'start' },
    { title: 'Aksi', key: 'aksi', align: 'start' },
])
const serverItems = ref<ListKlinik[]>([])
const loading = ref(true)
const totalItems = ref(0)
const searchQuery = ref('')

const loadItems = ({ page, itemsPerPage, sortBy }: { page: number, itemsPerPage: number, sortBy: { key: string, order: string }[] }) => {
    loading.value = true
    FakeAPI.fetch({ page, itemsPerPage, sortBy, search: searchQuery.value }).then(({ items, total }) => {
        serverItems.value = items
        totalItems.value = total
        loading.value = false
    })
}

const DetailKlinik = (item: ListKlinik) => {
    // Implement verification logic
    console.log('Detailing klinik for:', item)
}

onMounted(() => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
})

const filteredHeaders = computed(() => {
    return headers.value.filter(header => header.key !== 'aksi')
})
</script>

<template>
    <v-row class="mb-4" align="center">
        <v-col cols="auto">
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
        <v-card-title class="text-h4">Daftar Klinik</v-card-title>
    </v-row>
    <v-text-field v-model="searchQuery" label="Cari berdasarkan Klinik ID, Nama Klinik, atau Email Klinik" class="mb-4"
        @input="loadItems({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] })"></v-text-field>
    <v-data-table v-model:items-per-page="itemsPerPage" :header="headers" :items="serverItems"
        :items-length="totalItems" :loading="loading" item-value="no" @update:options="loadItems">
        <template v-slot:[`item.aksi`]="{ item }">
            <v-btn color="primary" @click="DetailKlinik(item)">{{ item.aksi }}</v-btn>
        </template>
    </v-data-table>
</template>
