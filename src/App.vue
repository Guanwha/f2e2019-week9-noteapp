<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a class="navbar-brand" href="#">Navbar</a>
        <router-link to="/">Home</router-link> |
        <router-link to="/about" class="mr-auto">About</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
