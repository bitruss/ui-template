<template>
  <div class="row">
    <basic />
    <color />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Color from "./color.vue";

export default {
  components: {
    Basic,
    Color
  },
};
</script>