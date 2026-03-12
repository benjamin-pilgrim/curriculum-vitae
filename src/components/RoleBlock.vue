<template>
  <div class="row">
    <aside>
      <slot name="header" />
      <slot name="date" />
    </aside>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'RoleBlock'
}
</script>
