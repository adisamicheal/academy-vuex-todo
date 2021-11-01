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
    getDeletedTodoItems: state => state.deletedTodoItems,
    getTodoById: (state) =>(id) => {
      return state.todoItems.find(item => item.id === id)
    }
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload)},
    updateCurrentId: (state) => { state.currentId +=1 },
    removeItem: (state, payload) => {state.todoItems.filter(item => item.id !== payload)},
    updateDeletedTodoItems: (state, payload) => { state.deletedTodoItems.push(payload)}
  },
  actions: {
    addTodoItem(context, payload) {
      const currentId = context.state.currentId
      const data = {
        ...payload,
        id: currentId,
      }
      context.commit('updateTodoItems', data)
      context.commit('updateCurrentId')
    },
    deleteTodoItem(context, payload) {
      console.log(payload);
      const currentTodo = context.getters.getTodoById(payload)
      context.commit('updateDeletedTodoItems', currentTodo)
    }
  },
  modules: {
  }
})
