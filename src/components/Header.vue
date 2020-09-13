<template>
  <div class="Header">
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-spacer></v-spacer>
      <span v-if="isAuthenticated">{{ user.displayName }}</span>
      <router-link v-else to="/login">Log in</router-link>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Header',

  data: () => ({
    drawer: null,
  }),

  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
}
</script>

<style lang="scss" scoped></style>
