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
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters(['getTodoItems'])
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  padding: 50px 0;
}
.todo {
  padding: 20px;
}
.todo-card {
  box-shadow: 10px 10px 5px 0px rgb(49, 49, 49);
  -webkit-box-shadow: 10px 10px 5px 0px rgb(49, 49, 49);
  -moz-box-shadow: 10px 10px 5px 0px rgb(49, 49, 49);
  padding: 20px;
}
</style>
