<script setup lang="ts">
import { DashboardSearchFilter } from '#build/components';
import FinancialReportTableSuperAdmin from '~/components/dashboard/FinancialReportTableSuperAdmin.vue';

const router = useRouter()
const goBack = () => {
    router.back()
}
</script>
<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row class="mb-2" align="center">
                    <v-col cols="auto">
                        <v-btn icon @click="goBack">
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-col>
                    <v-card-title class="text-h4">Laporan Keuangan</v-card-title>
                </v-row>

                <v-row no-gutters>
                    <v-col cols="12" md="3">
                        <DashboardSideBar :role="'superadmin'" />
                        <!-- <DashboardSideBar :role="'adminklinik'" /> -->
                    </v-col>
                    <v-col cols="12" md="15">
                        <DashboardSearchFilter />
                        <FinancialReportTableSuperAdmin />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>