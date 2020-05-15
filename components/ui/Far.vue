<!--- components/Far.vue -->

<!---
  FontAwesome 5 Free Brands Icon Component

  Usage Example:

  <Far i="facebook" />

  Props:
  - i: The FontAwesome 5 Free Brands icon name (like "twitter" or "reddit")
  - classes: CSS classes to add to the icon

  Caveats:
  - Each icon has to be pre-loaded in nuxt.config.js or it won't show up

-->
<template>
  <font-awesome-icon :class="`${classes}`" :icon="['far', i]" />
</template>

<script>
export default {
  props: {
    i: {
      type: String,
      required: true,
      default: 'facebook'
    },
    classes: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
