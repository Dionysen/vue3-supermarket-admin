export default {
  namespace: true,
  state: {
    userInfo:
      (localStorage.getItem('ruleForm') && JSON.parse(localStorage.getItem('ruleForm'))) || {}
  },
  getter: {},
  mutations: {
    setRuleForm(state, uInfo) {
      state.userInfo = uInfo
    }
  },
  actions: {}
}
