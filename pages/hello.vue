<template>
  <div class="container">
    hello world
    <pre>{{datas}}</pre>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'test',
  async asyncData (context) {
    context.app.myInjectedFunction3('test3')
    // let res = await axios.post(`http://192.168.0.1:8091/api/wxPublicAccount/queryQcCloudUrlRequestName`, {"type":1,"sessionId":"y2FJCMbh8QbYDuFOTpdxhQKSPjwb3Ukuadmin","carry":"d2d50f3430eda18b5176913160e91288"})

    return { datas: 123123}
  },
  components: {
  },
  data() {
    datas: ''
  },
  mounted() {
    // this.showLoginError()
    this.$myInjectedFunction('test')
    this.$myInjectedFunction2('test2')
  },
  notifications: {
    showLoginError: { // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>

<style>

</style>
