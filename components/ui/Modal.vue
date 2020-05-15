<template>
  <div class="modal" :class="{'is-active': isModalOpenInComponent}">
    <div class="modal-background" @click="modalClosed()" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="has-text-left modal-card-title">
          {{ title }}
        </p>
        <button class="delete" aria-label="close" @click="modalClosed()" />
      </header>
      <section class="has-text-left modal-card-body">
        <div class="content">
          <slot />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isModalOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isModalOpenInComponent: this.isModalOpen
    }
  },
  watch: {
    isModalOpen (newVal) {
      this.isModalOpenInComponent = newVal
    }
  },
  methods: {
    modalClosed () {
      this.$emit('modal-closed', true)
      this.isModalOpenInComponent = false
    }
  }
}
</script>
