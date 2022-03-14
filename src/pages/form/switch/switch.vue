<template>
  <div class="row">
    <basic />
    <color />
    <group />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Color from "./color.vue";
import Group from "./group.vue";

export default {
  components: {
    Basic,
    Color,
    Group
  },
};
</script>