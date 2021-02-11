<template>
  <div class="text-left">
    <h1 class="white--text font-weight-thin">ค้นหาร้านอาหารรอบๆจุดหมาย</h1>
    <v-form @submit.prevent="search()">
      <v-row>
        <v-col sm="12" md="10">
          <v-text-field
            label="ค้นหาร้านอาหารในระยะ 5 km"
            solo
            v-model="searchInput"
          ></v-text-field>
        </v-col>
        <v-col sm="12" md="2">
          <v-btn type="submit" color="primary" large>ค้นหา</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.search();
  },
  data() {
    return {
      searchInput: "Bangsue",
    };
  },
  methods: {
    search() {
      if (this.searchInput === "") {
        this.searchInput = "Bangsue";
      }
      this.$store.dispatch("searchRestaurant", this.searchInput);
    },
  },
};
</script>
