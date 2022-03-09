<template>
  <div class="row">
    <basic />
    <size />
    <buttons />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Size from "./size.vue";
import Buttons from "./buttons.vue";

export default {
  components: {
    Basic,
    Size,
    Buttons
  },
};
</script>