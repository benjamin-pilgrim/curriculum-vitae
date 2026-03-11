<template>
  <a class="repo-pill" :href="href">
    <slot />
    <icon brand name="github" />
  </a>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'RepoLink',
  components: { Icon },
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
