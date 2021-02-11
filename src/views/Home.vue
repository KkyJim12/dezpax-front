<template>
  <v-container fluid>
    <v-row justify="start" class="pa-8">
      <v-col md="8">
        <SearchBar></SearchBar>
        <Map></Map>
      </v-col>
      <v-col md="4">
        <Result></Result>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="2">
        <small class="text-center white--text">Produced by Piyakarn Nimmakulvirut.</small>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
import SearchBar from "@/components/SearchBar";
import Map from "@/components/Map";
import Result from "@/components/Result";

export default {
  components: {
    SearchBar,
    Map,
    Result,
  },
};
</script>
