<template>
  <div class="home">
    <h3>A TODO App</h3>
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
</style>
