<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered is-vcentered">
        <div v-if="!isLoggedIn" class="column is-6 is-centered has-text-centered">
          <!-- ログイン画面 -->
          <h1 class="title has-text-centered">
            ごちチャット
          </h1>
          <h2 class="subtitle has-text-centered">
            お試しチャットアプリ
          </h2>
          <h4 v-if="isLoggedIn" class="has-text-centered">
            {{ userName }}さん いらっしゃいませ!
          </h4>
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
        <div v-else class="column is-8">
          <div v-for="{ key, displayName, photoURL, text } in chat" :key="key" class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image has-image-vcentered is-48x48">
                    <img :src="photoURL" alt="Profile image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="subtitle is-4">{{ displayName }}</p>
                  <p>{{ text }}</p>
                </div>
              </div>
            </div>
          </div>
          <br>
          <br>
          <!-- 入力フォーム -->
          <form class="form" @submit.prevent="sendMessage">
            <div class="field  has-addons-centered">
              <div class="control is-expanded">
                <textarea
                  v-model="userInput"
                  class="textarea is-fullwidth has-fixed-size"
                  rows="1"
                  placeholder="送りたい文章を入力"
                  :disabled="!isLoggedIn"
                  @keydown.enter.exact.prevent="sendMessage"
                />
              </div>
              <div class="control is-expanded">
                <button class="button is-fullwidth is-primary" type="submit" :disabled="!isLoggedIn">
                  送信
                </button>
              </div>
            </div>
          </form>
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

.has-image-vcentered {
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<script>
import firebase from 'firebase'
import Fab from '~/components/ui/Fab.vue'
import Fas from '~/components/ui/Fas.vue'

export default {
  components: {
    Fab,
    Fas
  },
  data () {
    return {
      chat: [],
      userInput: ''
    }
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
  created () {
    this.fbMessage = firebase.database().ref('message')
  },
  methods: {
    login (loginMethod) {
      this.$store.dispatch('login', { loginMethod })
      this.fbMessage.limitToLast(10).on('child_added', this.addMessage)
    },
    logout () {
      this.fbMessage.limitToLast(10).off('child_added', this.addMessage)
      this.$store.dispatch('logout')
    },
    addMessage (snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        text: message.text,
        displayName: message.displayName,
        photoURL: message.photoURL
      })
    },
    async sendMessage () {
      await firebase.database().ref('message').push(
        {
          text: this.userInput,
          displayName: this.$store.state.user.displayName,
          photoURL: this.$store.state.user.photoURL
        }
      )
      this.userInput = ''
    }
  }
}
</script>
