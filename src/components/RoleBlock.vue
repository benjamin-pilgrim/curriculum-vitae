<template>
  <div class="row">
    <aside><slot name="date" /></aside>
    <main>
      <slot name="header" />
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'RoleBlock'
}
</script>
