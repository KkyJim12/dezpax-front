<template>
  <v-app>
    <v-main class="background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarabun&display=swap");

* {
  font-family: "Sarabun", sans-serif;
}

.background {
  background: #0091EA;
}
</style>
