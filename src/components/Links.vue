<template>
  <div class="links">
<!--    <div>-->
<!--      <a href="https://www.linkedin.com/in/benjamin-pilgrim/" target="_blank"-->
<!--        >benjamin-pilgrim <icon brand name="linkedin"-->
<!--      /></a>-->
<!--    </div>-->
    <div>
      <a href="mailto:ben@pilgrim.me.uk" target="_blank"
        >ben@pilgrim.me.uk <icon name="envelope"
      /></a>
      <a href="https://maps.app.goo.gl/VG6d3VYSqo2JQzQK8" target="_blank"
        >Colchester, Essex <icon name="map-marked-alt"
      /></a>
      <a href="tel:07950365848" target="_blank">07950 365848 <icon name="mobile-alt" /></a>
      <a href="https://github.com/tgnthump?tab=repositories" target="_blank"
        >TGNThump <icon brand name="github"
      /></a>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon }
}
</script>

<style lang="scss" scoped>
$primary: #3a446e;

.links {
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: flex-end;
  padding: 1.5em;

  div {
    display: flex;
    gap: 0.4em;
    flex-direction: column;
  }

  a {
    display: inline-flex;
    align-items: baseline;
    justify-content: right;
    gap: 0.45em;
    padding: 0;
    font-weight: normal;
    line-height: 1.2;
    font-size: 0.9em;
    white-space: nowrap;
  }

  a > i {
    font-size: 0.9em;
    color: #2b3559;
    opacity: 1;
    line-height: 1;
  }

  * {
    padding: 0;
  }
}
</style>
