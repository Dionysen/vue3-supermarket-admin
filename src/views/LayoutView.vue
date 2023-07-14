<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
          <img class="logo" src="../assets/logo.svg" alt="/" />
          <h1 class="title">SuperMarket Manager</h1>
        </div>
        <el-button type="primary" @click="submitLoginOut">Quit</el-button>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="250px">
          <el-menu background-color="none" text-color="#fff" :router="true">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Avatar /></el-icon>
                <span>Account Management</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">Acounts</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Box /></el-icon>
                <span>Role Management</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/roles">Roles</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Box /></el-icon>
                <span>Goodies</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/goodise">Goodies</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'LayoutView',
  setup() {
    const store = useStore()
    const router = useRouter()
    const submitLoginOut = () => {
      localStorage.removeItem('ruleForm')
      store.commit('setRuleForm', {})
      router.push('/login')
    }
    return { submitLoginOut }
  }
}
</script>

<style scoped>
.el-container {
  height: 100vh;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
.common-header {
  background: rgb(39, 47, 65);
  display: flex;
}

.common-aside {
  background: rgb(39, 47, 65);
}

.logo {
  width: 30px;
}

.title {
  color: aliceblue;
}
</style>
