<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">LEARN VUE3</div>
          <div class="tips">Vue3.0 SuperMarket Manager</div>
        </div>
      </div>
      <el-form :model="ruleForm" ref="loginForm" class="login-form" status-icon>
        <el-form-item label="Username" prop="username" :rules="rules.username">
          <el-input type="text" v-model.trim="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password" :rules="rules.password">
          <el-input type="password" v-model.trim="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm">Sign in</el-button>
          <el-checkbox v-model="checked" @change="!checked">Remember me</el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginView',
  setup() {
    const store = useStore()
    const router = useRouter()
    const loginForm = ref(null)
    const state = reactive({
      ruleForm: {
        username: '',
        password: ''
      },
      checked: true,
      rules: {
        username: [{ required: 'true', message: '账户不能为空', trigger: 'blur' }],
        password: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }]
      }
    })

    const submitForm = () => {
      store.commit('setRuleForm', state.ruleForm)
      localStorage.setItem('ruleForm', JSON.stringify(state.ruleForm))
      router.push({ path: '/roles' })
    }

    return {
      loginForm,
      ...toRefs(state),
      submitForm
    }
  }
}
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  position: relative;
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
  margin: 6rem;
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}

.head .title {
  font-size: 30px;
  color: #2c3c70;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: auto;
}
.el-form-item {
  padding: 10px 10px;
}
</style>
