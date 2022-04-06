<template>
  <div class="row">
    <basic />
    <size />
    <color />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Size from "./size.vue";
import Color from "./color.vue";
 

export default {
  components: {
    Basic,
    Size,
    Color
  },
};
</script>