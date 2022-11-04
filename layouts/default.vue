<template>
  <div class="theme-bg-light">
    <Navbar/>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {
    Navbar: () => import("~/components/Navbar.vue"),
  }
}
</script>
