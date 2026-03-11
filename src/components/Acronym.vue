<template>
  <abbr :title="title"><slot /></abbr>
</template>

<script>
export default {
  name: 'Acronym',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
