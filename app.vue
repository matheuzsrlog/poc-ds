<template>
  <div>
    <v-btn color="#f2f" @click="showAlert = !showAlert">Button</v-btn>
    <div v-if="showAlert"> Alertaaaaaaaaaaaaaa  </div>
    <!-- <l-button-new>Teste</l-button-new> -->
  </div>
  </template>

<script setup>
  const showAlert = ref(false)
</script>


<style lang="scss">
</style>