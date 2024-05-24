<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  role: {
    type: String as PropType<'superadmin' | 'adminklinik'>,
    required: true
  }
});

const money = ref([
  ['Daftar Transaksi'],
  ['Laporan Keuangan'],
]);

const consultation = ref([
  ['Daftar Konsultasi'],
  ['Riwayat Konsultasi'],
]);

const user = ref([
  ['Daftar Pengguna'],
  ['Aktivitas Pengguna'],
]);

const clinic = ref([
  ['Tambah Klinik'],
  ['Tambah Dokter'],
  ['Daftar Klinik'],
]);

const setting = ref([
  ['Tambah Admin'],
  ['Ubah Password'],
]);

const isSuperAdmin = computed(() => props.role === 'superadmin');
</script>

<template>
  <v-navigation-drawer permanent class="sidebar" theme="dark">
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Dashboard"></v-list-item>

      <v-list-group class="mt-8" value="Manajemen Keuangan">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-cash-multiple">Manajemen keuangan</v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in money"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group class="mt-5" value="Manajemen Konsultasi">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-credit-card-edit">Manajemen Konsultasi</v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in consultation"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group v-if="isSuperAdmin" class="mt-5" value="Manajemen Pengguna">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-group">Manajemen Pengguna</v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in user"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group v-if="isSuperAdmin" class="mt-5" value="Manajemen Klinik">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-home-plus">Manajemen Klinik</v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in clinic"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group v-if="isSuperAdmin" class="mt-5" value="Pengaturan Akun">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-cog">Pengaturan Akun</v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in setting"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
.sidebar {
  border-right: 1px solid #e0e0e0;
}
</style>
