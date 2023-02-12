import { createStore } from 'vuex'

export default createStore({
  state: {
    proyectos: []
  },
  getters: {
  },
  mutations: {
    setProyectos(state, payload){
      state.proyectos = payload
      console.log(state.proyectos)
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('proyectos.json')
        const data = await res.json()
        commit('setProyectos', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
