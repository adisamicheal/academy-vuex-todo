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
</style>