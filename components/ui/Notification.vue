<template>
  <div v-if="!deletedInComponent" class="subtitle notification" :class="`${classes}`">
    <button v-if="deletable" class="delete" @click="pushDeleted()" />
    <span v-if="icon"><Fas :i="icon" /></span>
    <span>{{ title }}</span>
  </div>
</template>

<script>
import Fas from '~/components/ui/Fas.vue'

export default {
  components: {
    Fas
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'info'
    },
    deletable: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: 'is-success'
    },
    deleted: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      deletedInComponent: this.deleted
    }
  },
  watch: {
    deleted (newVal) {
      this.deletedInComponent = newVal
    }
  },
  methods: {
    pushDeleted () {
      this.$emit('deleted-event', true)
      this.deletedInComponent = true
    }
  }
}
</script>
