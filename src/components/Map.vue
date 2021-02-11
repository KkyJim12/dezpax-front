<template
  ><GmapMap
    :center="selectPlace"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%; height:75vh"
  >
    <GmapMarker
      :position="searchGeo"
      :clickable="true"
      :icon="{ url: require('@/assets/pin.png') }"
    />
    <GmapMarker
      :key="index"
      v-for="(m, index) in places"
      :position="m.geometry.location"
      :clickable="true"
      :icon="{ url: require('@/assets/restaurant.png') }"
    />
  </GmapMap>
</template>

<script>
export default {
  computed: {
    places() {
      return this.$store.state.places;
    },
    searchGeo() {
      return this.$store.state.searchGeo;
    },
    selectPlace() {
      return this.$store.state.selectPlace;
    },
    zoom() {
      return this.$store.state.zoom;
    },
  },
};
</script>
