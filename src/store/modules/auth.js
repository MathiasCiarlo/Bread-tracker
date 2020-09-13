import { auth } from '@/firebase'

export const state = () => ({
  user: null,
})

export const getters = {
  isAuthenticated(state) {
    return state.user !== null
  },
}

export const mutations = {
  resetUser(state) {
    state.user = null
  },

  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async refreshUser({ getters }) {
    if (getters['isAuthenticated']) {
      return getters['loggedInUser']
    }

    try {
      console.error('Not implemented')
    } catch (error) {
      if (error.response) {
        if (401 === error.response.status) {
          return
        }
        throw error
      }
    }

    return getters['loggedInUser']
  },

  async login({ commit }, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password).then(() => {
      commit('setUser', auth.currentUser)
    })
  },

  async logout({ commit }) {
    auth.signOut().then(() => {
      commit('resetUser')
    })
  },
}
