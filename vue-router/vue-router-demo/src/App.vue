<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
/*样式不是必须的，删了于路由功能无影响*/
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
