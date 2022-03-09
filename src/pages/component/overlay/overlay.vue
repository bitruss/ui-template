<template>
  <div class="row">
    <basic />
    <custom />
  </div>
</template>

<script>

import Basic from "./basic.vue";
import Custom from "./custom.vue";

export default {
  components: {
    Basic,
    Custom
  },
};
</script>