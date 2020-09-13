<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="gray" app>
      <v-spacer></v-spacer>

      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header },

  created() {
    this.$vuetify.theme.dark = true
  },
}
</script>
