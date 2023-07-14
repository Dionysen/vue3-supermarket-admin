<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Public */
/* flex layout class */
body,
html {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.flex-float {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}
</style>
