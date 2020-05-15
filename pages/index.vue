<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered is-vcentered">
        <!-- ログイン画面 -->
        <div v-if="!isLoggedIn" class="column is-8 is-centered has-text-centered">
          <h1 class="title">
            ごちチャット
          </h1>
          <h2 class="subtitle">
            お試しチャットアプリ
          </h2>
          <div class="box has-text-centered">
            <h2 class="title has-text-centered">
              <span><Fas i="id-card" /> ログイン</span>
            </h2>
            <button class="button is-large is-primary" @click="login('google')">
              <span class="icon"><Fab i="google" /></span>
              <span>Google</span>
            </button>
            <br>
            <br>
            <button class="button is-large is-primary" @click="login('github')">
              <span class="icon"><Fab i="github" /></span>
              <span>Github</span>
            </button>
          </div>
          <img class="image has-image-centered" src="meigen.jpg">
        </div>
        <!-- ログイン後の画面 -->
        <div v-else class="column">
          <p>Welcome {{ userName }} ! </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import Fab from '~/components/ui/Fab.vue'
import Fas from '~/components/ui/Fas.vue'

export default {
  components: {
    Fab,
    Fas
  },
  // Thx https://stackoverflow.com/questions/55817598/v-if-on-vuex-getter
  computed: {
    isLoggedIn () {
      return this.$store.getters.getUserUid
    },
    userName () {
      return this.$store.getters.getUserName
    }
  },
  methods: {
    login (loginMethod) {
      this.$store.dispatch('login', { loginMethod })
    }
  }
}
</script>
