<template>
  <div class="row">
    <basic />
    <color />
    <labels />
    <striped />
    <multi />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Color from "./color.vue";
import Labels from "./labels.vue";
import Striped from "./striped.vue";
import Multi from "./multi.vue";

export default {
  components: {
    Basic,
    Color,
    Labels,
    Striped,
    Multi
  },
};
</script>