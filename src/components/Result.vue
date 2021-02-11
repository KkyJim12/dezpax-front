<template>
  <v-card max-width="100%" class="mx-auto mt-5">
    <v-toolbar color="light-blue darken-3" dark>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-toolbar-title>ผลการค้นหา</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list three-line height="80vh" class="overflow-y-auto" id="style-4">
      <v-list-item-group active-class="light-blue lighten-4">
        <v-subheader v-text="searchWordResult"></v-subheader>

        <v-divider></v-divider>

        <v-list-item
          :key="item.id"
          v-for="item in items"
          @click="focus(item.geometry.location)"
        >
          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.vicinity"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.places;
    },
    searchWordResult() {
      return this.$store.state.searchWord;
    },
  },
  methods: {
    focus(geo) {
      this.$store.dispatch("mapFocus", geo);
    },
  },
};
</script>

<style scoped>
#style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #e5e5e5;
}

#style-4::-webkit-scrollbar {
  width: 10px;
  background-color: #e5e5e5;
}

#style-4::-webkit-scrollbar-thumb {
  background-color: #908B9F !important;
  border: 2px solid #908B9F !important;
  border-radius:20px;
}
</style>
