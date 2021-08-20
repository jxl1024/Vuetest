<template>
  <div id="app">
    <div id="nav">
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
