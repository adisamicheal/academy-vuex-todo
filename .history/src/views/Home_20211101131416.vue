<template>
  <div class="home">
    <div class="heading">
      <h3>A TODO App</h3>
      <p>Here are some of my todo list ...</p>
    </div>
    <div class="todo">
      <div class="todo-card" v-for="todo in getTodoItems" :key="todo.id">
        <h5 class="card-title">{{ todo.activity }}</h5>
        <p class="card-description">{{ todo.description }}</p>
        <button @click="deleteTodoItem(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  dat() {
    return {
      todoItem: {}
    }
  },
  components: {
  },
  computed: {
    ...mapGetters(['getTodoItems'])
  },
  methods: {
    methods: {
      ...mapActions(['deleteTodoItem']),
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  padding: 50px 0;
}
</style>

<style>
.todo {
  padding: 20px;
}
.todo-card {
  box-shadow: 10px 10px 5px 0px rgb(128, 128, 128);
  -webkit-box-shadow: 10px 10px 5px 0px rgb(128, 128, 128);
  -moz-box-shadow: 10px 10px 5px 0px rgb(128, 128, 128);
  padding: 20px;
  margin: 20px 0;
}
.card-title {
  font-size: 36px;
}
</style>
