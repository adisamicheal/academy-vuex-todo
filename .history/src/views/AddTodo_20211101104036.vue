<template>
  <div>
      <h3>Add your activity</h3>
      <div class="form">
          <form action="">
              <div class="form-input">
                  <label for="Activity">Activity</label>
                  <input type="text" id="activity" name="activity" v-model="formData.activity">
              </div>
              <div class="form-input">
                  <label for="Description">Description</label>
                  <input type="text" id="description" name="description" v-model="formData.description">
              </div>
              <button>Submit</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            formData: {}
        }
    }

}
</script>

<style scoped>
h3 {
    text-align: center;
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