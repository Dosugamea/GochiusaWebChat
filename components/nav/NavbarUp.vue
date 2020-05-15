<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item has-text-white has-text-bold">
            ごちチャット
          </nuxt-link>
          <span class="navbar-burger burger has-text-white" :class="{ 'is-active': openMenu }" data-target="navMenu" @click="openMenu = !openMenu">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': openMenu }">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a href="https://gochiusa.com" class="button is-outlined">
                    <span class="icon"><Fas i="users" /></span>
                    <span>ごちうさ公式サイト</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Fas from '~/components/ui/Fas.vue'

export default {
  components: {
    Fas
  },
  data () {
    return {
      openMenu: false
    }
  }
}
</script>
