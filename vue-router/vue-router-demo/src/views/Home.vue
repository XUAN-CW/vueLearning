<template>
  <div id="Home">
    <div id="HoneNav">
      <router-link to="/Home/HomeChildren1">HomeChildren1</router-link> |
      <router-link to="/Home/HomeChildren2">HomeChildren2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
/*样式不是必须的，删了于路由功能无影响*/
#HoneNav a.router-link-exact-active {
  color: red;
}
</style>


