import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: [],
    currentId: 0,
    deletedTodoItems: []
  },
  getters: {
    getTodoItems: state => state.todoItems,
    getCurrentId: state => state.currentId,
    getDeletedTodoItems: state => state.deletedTodoItems
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload)},
    updateCurrentId: (state) => state.currentId,
    updateDeletedTodoItems: (state, payload) => { state.deletedTodoItems.push(payload)}
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
    deleteTodoItem(context, payload) {}
  },
  modules: {
  }
})
