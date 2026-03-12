<template>
  <div class="row">
    <aside class="role-aside">
      <slot name="header" />
      <span class="role-date"><slot name="date" /></span>
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

<style>
.role-aside {
  display: flex;
  flex-direction: column;
}

.role-date {
  display: block;
  margin-top: 0.9em;
  color: rgba(255,255,255,0.7);
  font-size: 0.9em;
}
</style>