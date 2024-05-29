<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { Payment } from '~/types/dashboard';

const generateCurrentDate = (): string => {
  const now = new Date()
  return now.toISOString().split('T')[0] // Format YYYY-MM-DD
}

const payments: Payment[] = [
  {
    no: 1,
    orderId: 'ORD123',
    orderDate: generateCurrentDate(),
    service: 'online',
    userEmail: 'user1@example.com',
    doctor: 'Dr. Smith',
    paymentAmount: 100000,
    uniqueCode: '123',
    paymentMethod: 'Credit Card',
    action: 'Detail',
  },
  {
    no: 2,
    orderId: 'ORD124',
    orderDate: generateCurrentDate(),
    service: 'online',
    userEmail: 'user2@example.com',
    doctor: 'Dr. John',
    paymentAmount: 200000,
    uniqueCode: '124',
    paymentMethod: 'Bank Transfer',
    action: 'Detail',
  },
  {
    no: 3,
    orderId: 'ORD125',
    orderDate: generateCurrentDate(),
    service: 'online',
    userEmail: 'user3@example.com',
    doctor: 'Dr. Jane',
    paymentAmount: 300000,
    uniqueCode: '125',
    paymentMethod: 'Cash',
    action: 'Detail',
  },
]

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy, search }: { page: number, itemsPerPage: number, sortBy: { key: string, order: string }[], search: string }) {
    return new Promise<{ items: Payment[], total: number }>((resolve) => {
      setTimeout(() => {
        let items = payments.slice()

        // Filter items based on search query
        if (search) {
          const lowerSearch = search.toLowerCase()
          items = items.filter(item =>
            item.orderId.toLowerCase().includes(lowerSearch) ||
            item.userEmail.toLowerCase().includes(lowerSearch) ||
            item.doctor.toLowerCase().includes(lowerSearch)
          )
        }

        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a, b) => {
            const aValue = (a[sortKey as keyof Payment] ?? '').toString()
            const bValue = (b[sortKey as keyof Payment] ?? '').toString()
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
  { title: 'Order ID', key: 'orderId', align: 'start' },
  { title: 'Tanggal Order', key: 'orderDate', align: 'start' },
  { title: 'Layanan', key: 'service', align: 'start' },
  { title: 'Email Pengguna', key: 'userEmail', align: 'start' },
  { title: 'Dokter', key: 'doctor', align: 'start' },
  { title: 'Jumlah Pembayaran', key: 'paymentAmount', align: 'end' },
  { title: 'Kode Unik', key: 'uniqueCode', align: 'end' },
  { title: 'Metode Pembayaran', key: 'paymentMethod', align: 'start' },
  { title: 'Aksi', key: 'action', align: 'start' },
])
const serverItems = ref<Payment[]>([])
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

const DetailPayment = (item: Payment) => {
  // Implement verification logic
  console.log('Detailing payment for:', item)
}

onMounted(() => {
  loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
})

const filteredHeaders = computed(() => {
  return headers.value.filter(header => header.key !== 'action')
})
</script>

<template>
  <p class="mt-5 mb-3 text-h6">Riwayat Konsultasi</p>
  <v-text-field
    v-model="searchQuery"
    label="Cari berdasarkan Order ID, Email Pengguna, atau Dokter"
    class="mb-4"
    @input="loadItems({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] })"
  ></v-text-field>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :header="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="no"
    @update:options="loadItems"
  >
    <template v-slot:[`item.action`]="{ item }">
      <v-btn color="primary" @click="DetailPayment(item)">Detail</v-btn>
    </template>
  </v-data-table>
</template>
