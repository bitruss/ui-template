<template>
  <div class="row">
    <basic />
    <multi />
    <size />
    <types />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Multi from "./multi.vue";
import Size from "./size.vue";
import Types from "./types.vue";

export default {
  components: {
    Basic,
    Multi,
    Size,
    Types
  },
};
</script>