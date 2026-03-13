<template>
  <div class="links">
    <a href="mailto:ben@pilgrim.me.uk" target="_blank">ben@pilgrim.me.uk <icon name="envelope" /></a>
    <a href="tel:07950365848" target="_blank">07950 365848 <icon name="mobile-alt" /></a>
    <a href="https://maps.app.goo.gl/VG6d3VYSqo2JQzQK8" target="_blank"
      >Colchester, Essex <icon name="map-marked-alt"
    /></a>
    <span class="links-gap" aria-hidden="true"></span>
    <a href="https://www.linkedin.com/in/benjamin-pilgrim/" target="_blank"
      >benjamin-pilgrim <icon brand name="linkedin"
    /></a>
    <a href="https://github.com/tgnthump?tab=repositories" target="_blank"
      >TGNThump <icon brand name="github"
    /></a>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.18rem;
  color: rgba(0, 0, 0, 0.88);
  text-align: right;
}

a {
  display: inline-flex;
  align-items: baseline;
  gap: 0.42em;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  font-weight: normal;
  line-height: 1.12;
  font-size: 0.8em;
  white-space: nowrap;
  color: inherit;
}

a > i {
  font-size: 1em;
  color: inherit;
  line-height: 1;
  width: 1.05em;
  text-align: center;
}

.links-gap {
  display: block;
  height: 0.28rem;
}

* {
  padding: 0;
}
</style>
