<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useAuth } from '~/store/useAuth';

definePageMeta({
  layout: "blank",
});

const auth = useAuth();
const router = useRouter();
const email = ref('');
const password = ref('');
const showPassword = ref(false);

const signIn = async () => {
  auth.email = email.value;
  auth.password = password.value;
  const success = await auth.signInWithEmail();
  if (success) {
    router.push('/ui/admin-dashboard');
  } else {
    alert('Sign-in failed');
  }
};
</script>

<template>
  <v-row class="h-auto d-flex justify-center align-center pa-sm-8">
    <v-col cols="12" class="d-flex align-center">
      <v-row class="w-100">
        <v-col cols="12" md="6" class="d-flex mx-auto">
          <img src="/images/background/auth.png" alt="Sign In Image" class="w-full pa-sm-4">
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center items-center">
          <v-card rounded="md" elevation="0" class="px-sm-1 px-0 mx-auto" max-width="500">
            <v-card-item class="pa-sm-12">
              <div class="font-weight-bold text-lg-h2">Selamat datang di Pawmin</div>
              <v-row class="d-flex pt-10">
                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Email</v-label>
                  <v-text-field v-model="email" variant="outlined" hide-details color="primary">
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Password</v-label>
                  <v-text-field v-model="password" variant="outlined" :type="showPassword ? 'password' : 'text'"
                    hide-details color="primary" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword"></v-text-field>
                </v-col>
                <v-col cols="12" class="pt-3">
                  <div class="d-flex flex-wrap align-center ml-n2">
                    <div class="ml-sm-auto">
                      <NuxtLink to="/"
                        class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">
                        Lupa Password?
                      </NuxtLink>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" class="pt-3">
                  <v-btn @click="signIn" color="#E8194D" size="large" block flat>Sign in</v-btn>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
