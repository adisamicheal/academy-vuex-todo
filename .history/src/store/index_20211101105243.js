import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: [],
    currentId: 0
  },
  getters: {
    getTodoItems: state => state.todoItems,
    getCurrentId: state => state.currentId
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload)},
    updateCurrentId: (state) => state.currentId
  },
  actions: {
    addTodoItem(context, payload) {
      const currentId = context.state.currentId
      const data = {
        ...payload,
        id: currentId + 1,
      }
      context.commit('updateTodoItems', data)
      context.commit('updateCurrentId')
  },
  modules: {
  }
})
