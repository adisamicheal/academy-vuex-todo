<template>
  <div>
    <h3>Here are your deleted items</h3>
    <div class="todo">
    <div class="todo-card" v-for="todo in getDeletedTodoItems" :key="todo.id">
        <h5 class="card-title">{{todo.activity}}</h5>
        <p class="card-description">{{todo.description}}</p>
        <button>Restore</button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'RecycleBin',
    computed: {
        ...mapGetters(['getDeletedTodoItems'])
    }

}
</script>

<style>

</style>