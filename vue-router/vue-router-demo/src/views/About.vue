<template>
  <div id="About">
    <div id="AboutNav">
      <router-link to="/About/AboutChildren1">AboutChildren1</router-link> |
      <router-link to="/About/AboutChildren2">AboutChildren2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
/*样式不是必须的，删了于路由功能无影响*/
#AboutNav a.router-link-exact-active {
  color: red;
}
</style>
