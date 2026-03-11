<template>
  <i :class="'fa fa' + (regular ? 'r' : brand ? 'b' : 's') + ' fa-' + name"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    regular: Boolean,
    brand: Boolean
  }
}
</script>
