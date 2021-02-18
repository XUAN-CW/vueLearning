<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="active" exact>Home</router-link> |
      <router-link to="/about" active-class="active">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.active{
  color: gold;
}
</style>
