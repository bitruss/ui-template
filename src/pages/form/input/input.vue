<template>
  <div class="row">
    <basic />
    <sizes />
    <format />
    <states />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Sizes from "./sizes.vue";
import Format from "./format.vue";
import States from "./states.vue";

export default {
  components: {
    Sizes,
    Basic,
    Format,
    States,
  },
};
</script>