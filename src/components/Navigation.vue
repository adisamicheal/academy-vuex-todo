<template>
  <nav>
      <div class="logo">
          Logo
      </div>
      <div>
          <ul>
              <li><router-link to="/">Home</router-link> </li>
              <li><router-link to="/add-todo">Add Todo</router-link> </li>
              <li><router-link to="/recycle-bin">Recycle Bin</router-link> </li>
              <!-- <li><router-link to="/">Home</router-link> </li> -->
          </ul>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
ul {
    list-style: none;
    display: flex;
    align-items: center;
}
ul li {
    margin-left: 20px;
}
ul li a {
    text-decoration: none;
}
</style>