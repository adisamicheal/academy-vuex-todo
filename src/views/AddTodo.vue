<template>
  <div>
      <h3>Add your activity</h3>
      <div class="form-container">
          <form action="">
              <div class="form-input">
                  <label for="Activity">Activity</label>
                  <input type="text" id="activity" name="activity" v-model="formData.activity">
              </div>
              <div class="form-input">
                  <label for="Description">Description</label>
                  <input type="text" id="description" name="description" v-model="formData.description">
              </div>
              <button @click.prevent="onSubmit">Submit</button>
          </form>
      </div>
      <!-- <div class="todo">
        <div class="todo-card" v-for="todo in getTodoItems" :key="todo.id">
            <h5 class="card-title">{{ todo.activity }}</h5>
            <p class="card-description">{{ todo.description }}</p>
        </div>
      </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'AddTodo',
    data() {
        return {
            formData: {
                activity: '',
                description: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getTodoItems'])
    },
    methods: {
        ...mapActions(['addTodoItem']),
        onSubmit() {
            const data = {
                activity: this.formData.activity,
                description: this.formData.description
            }
            console.log('todo data', data);
            this.addTodoItem(data)
            this.formData.activity = '',
            this.formData.description = ''
        }
    }

}
</script>

<style scoped>
h3 {
    text-align: center;
}
.form-container {
    max-width: 300px;
    margin: 20px auto;
    padding: 30px;
    box-shadow: 10px 10px 5px 0px green;
    -webkit-box-shadow: 10px 10px 5px 0px green;
    -moz-box-shadow: 10px 10px 5px 0px green;
}
.form-input {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}
.form-input input {
    margin-top: 10px;
    padding: 10px 15px;
    border: 1px solid green;
}
button {
    background: green;
    border: 1px solid green;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    margin-top: 20px;
}
</style>