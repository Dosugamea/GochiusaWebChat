<template>
  <div id="app">
    <NavbarUp />
    <main>
      <nuxt />
    </main>
    <transition name="fade">
      <a v-show="showJump" v-scroll-to="'#app'" href="#" class="scroll-top">
        <Fas i="angle-up" classes="scroll-icon" />
      </a>
    </transition>
  </div>
</template>

<script>
/*
上に戻るボタンは 下記サイトより。
https://note.com/aliz/n/nfd2bfc514ace
https://helloworld-blog.tech/javascript/vue-js-smooth-scroll%E3%81%A7top%E3%81%AB%E6%88%BB%E3%82%8B%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E5%AE%9F%E8%A3%85%E3%81%99%E3%82%8B

*/
import NavbarUp from '~/components/nav/NavbarUp.vue'
import Fas from '~/components/ui/Fas.vue'

export default {
  components: {
    NavbarUp,
    Fas
  },
  data () {
    return {
      scrollY: 0
    }
  },
  computed: {
    showJump () {
      return Boolean(this.scrollY > 200)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('load', () => {
      this.onScroll()
    })
  },
  methods: {
    onScroll () {
      this.scrollY = window.pageYOffset
    }
  }
}
</script>

<style>
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #000;
  padding: 10px 16px;
  border-radius: 32px;
}
.scroll-icon {
  font-weight: bold;
  font-size: 20px;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
