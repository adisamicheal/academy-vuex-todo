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
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload)}
  },
  actions: {
    addTodoItem(context, payload) {
      const data = {
        ...payload,
        id: currentId + 1,
      }
      context.commit('updateTodoItems', data)
    }
  },
  modules: {
  }
})
