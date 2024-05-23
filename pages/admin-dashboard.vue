<script setup lang="ts">
import ConsulClinic from '~/components/dashboard/ConsulClinic.vue';
import SalesOverview from '~/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '~/components/dashboard/YearlyBreakup.vue';
</script>
<template>
    <v-app>
      <v-main>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" md="3">
              <DashboardSideBar />
            </v-col>
            <v-col cols="12" md="13">
              <DashboardCards />
            </v-col>
            <v-col cols="12" md="8">
              <SalesOverview/>
            </v-col>
            <v-col cols="12" md="4">
                <div class="mb-6">
                    <YearlyBreakup/>
                </div>
                <div>
                    <ConsulClinic/>
                </div>
            </v-col>
            <v-col cols="12" md="15">
                <DashboardPaymentVerification/>
              </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
    
  <style scoped>
  .pa-0 {
    padding: 0;
  }
  </style>
  