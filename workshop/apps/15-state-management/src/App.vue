<template>
  <section>
    <el-menu mode="horizontal" class="navBar">
      <el-menu-item>
        <router-link :to="{name: 'home'}">
          <img class="logo" src="/assets/images/logo-people.svg" />
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link :to="{name: 'people'}" class="link">Peoples</router-link>
      </el-menu-item>
    </el-menu>
    <div class="notification-teleport"></div>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({});
</script>

<style scoped>
.navBar {
  background-color: #0168ab !important;
  background-image: url('/assets/images/bg_right.png');
  background-repeat: no-repeat;
  background-position: right;
  top: 0px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  z-index: 1;
  color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.logo {
  height: 56px;
}

.link {
  color: white !important;
}

a {
  color: inherit !important;
  text-decoration: none !important;
  height: 100%;
  margin: 0px 10px 0px 10px;
  border-bottom: 2px solid transparent;
  font-size: 1.3em;
  font-weight: normal;
  font-family: 'Open Sans', sans-serif;
}

a:hover {
  border-bottom: 2px solid white !important;
}
</style>
