<template>
  <router-view></router-view>
    <router-link to="/home">
      <el-button type="primary">Home</el-button>
    </router-link> |
    <router-link to="/about">
      <el-button type="primary">About</el-button>
    </router-link> |
    <router-link to="/form">
      <el-button type="primary">Form</el-button>
    </router-link> |
    <router-link to="table">
      <el-button type="primary">Table</el-button>
    </router-link>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
