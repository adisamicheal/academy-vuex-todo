<template>
  <div>
    <h3>Here are your deleted items</h3>
    <div class="todo">
    <div class="todo-card" v-for="todo in getDeletedTodoItems" :key="todo.id">
        <h5 class="card-title">{{todo.activity}}</h5>
        <p class="card-description">{{todo.description}}</p>
        <button @click="restoreTodoItem(todo.id)">Restore</button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'RecycleBin',
    computed: {
        ...mapGetters(['getDeletedTodoItems'])
    },
    methods: {
        ...mapActions(['restoreTodoItem'])
    }

}
</script>

<style>

</style>