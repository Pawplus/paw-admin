<script setup lang="ts">
import DetailConsultation from '~/components/dashboard/DetailConsultation.vue';

</script>
<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="3">
            <DashboardSideBar :role="'superadmin'" />
            <!-- <DashboardSideBar :role="'adminklinik'" /> -->
          </v-col>
          <v-col cols="12" md="15">
            <DetailConsultation/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>