<template>
  <div class="row">
    <basic />
    <counting />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Counting from "./counting.vue";


export default {
  components: {
    Basic,
    Counting
  },
};
</script>