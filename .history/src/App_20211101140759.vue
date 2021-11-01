<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.active-button {
  background: #42b983;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid #42b983;
  border-radius: 20px;
}
</style>
